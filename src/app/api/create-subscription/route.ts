import { NextResponse } from "next/server";
import {
  ADD_PURCHASE_PLAN_ROUTE,
  CHECK_SETUP_INTENT_IS_USED_ROUTE,
  STRIPE_SECRET_KEY,
} from "@/lib/constants";
import Stripe from "stripe";
import axios, { AxiosError } from "axios";
import { Plan, PurchasedPlan } from "@/types";
import { auth } from "@/auth";

const stripe = new Stripe(STRIPE_SECRET_KEY);

export async function POST(request: Request) {
  try {
    const session = await auth();

    if (!session) {
      return NextResponse.json(
        { status: false, message: "Unauthorized: You are not logged in" },
        { status: 401 }
      );
    }

    const { plan, setupIntentId }: { plan: Plan; setupIntentId: string } =
      await request.json();

    if (!plan || !setupIntentId)
      return NextResponse.json(
        {
          status: false,
          message: "plan and setupIntentId are required",
        },
        { status: 400 }
      );

    const res = await axios.post<{
      status: boolean;
      is_used: boolean;
      payment_intent: string;
      message: string;
    }>(
      CHECK_SETUP_INTENT_IS_USED_ROUTE,
      { payment_intent: setupIntentId },
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${session.user.access_token}`,
        },
      }
    );

    if (!res.data.status)
      return NextResponse.json(
        { status: false, message: res.data.message },
        { status: res.status }
      );

    if (res.data.is_used)
      return NextResponse.json(
        { status: true, message: "You have already Purchased few moments ago" },
        { status: 200 }
      );

    const customers = await stripe.customers.list({
      email: session.user.email,
      limit: 1,
    });
    const customerId = customers.data[0].id;

    const setupIntent = await stripe.setupIntents.retrieve(setupIntentId);

    if (setupIntent.status !== "succeeded")
      return NextResponse.json(
        { status: false, message: "Failed to add payment method" },
        { status: 400 }
      );

    const customer = await stripe.customers.update(customerId, {
      invoice_settings: {
        default_payment_method: setupIntent.payment_method as string,
      },
    });

    const subscription = await stripe.subscriptions.create({
      customer: customerId,
      items: [{ price: plan.stripe_price_id }],
      trial_period_days: plan.trial_days,
      default_payment_method: setupIntent.payment_method as string,
      payment_settings: { save_default_payment_method: "on_subscription" },
      metadata: {
        customerId,
        email: customer.email,
      },
    });

    const purchasePlan = await axios
      .post<{
        status: boolean;
        message: string;
        purchase: PurchasedPlan;
      }>(
        ADD_PURCHASE_PLAN_ROUTE,
        {
          plan_id: plan.id,
          payment_intent: setupIntentId,
        },
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${session.user.access_token}`,
          },
        }
      )
      .then((res) => res.data);

    if (!purchasePlan.status)
      return NextResponse.json(
        { status: false, message: purchasePlan.message },
        { status: 400 }
      );

    return NextResponse.json(
      {
        status: true,
        message: purchasePlan.message,
        subscriptionId: subscription.id,
        activePlan: purchasePlan.purchase,
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof stripe.errors.StripeError) {
      return NextResponse.json(
        {
          status: false,
          message: (error.raw as { message?: string })?.message,
        },
        { status: error.statusCode }
      );
    }

    if (error instanceof AxiosError) {
      return NextResponse.json(
        {
          status: false,
          message: error.response?.data.message,
        },
        { status: error.status }
      );
    }

    return NextResponse.json(
      { status: false, message: "Internal Server Error", error },
      { status: 500 }
    );
  }
}

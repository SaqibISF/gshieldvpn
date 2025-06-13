import { NextResponse } from "next/server";
import { STRIPE_SECRET_KEY } from "@/lib/constants";
import Stripe from "stripe";
import { auth } from "@/auth";

const stripe = new Stripe(STRIPE_SECRET_KEY);

export async function GET() {
  try {
    const session = await auth();

    if (!session)
      return NextResponse.json(
        { status: false, message: "Unauthorized: You are not logged in" },
        { status: 401 }
      );

    let customerId;

    const customers = await stripe.customers.list({
      email: session.user.email,
      limit: 1,
    });

    if (customers.data.length > 0) {
      customerId = customers.data[0].id;
    } else {
      const customer = await stripe.customers.create({
        email: session.user.email,
      });
      customerId = customer.id;
    }

    const setupIntent = await stripe.setupIntents.create({
      customer: customerId,
      automatic_payment_methods: { enabled: true },
    });

    return NextResponse.json(
      {
        status: true,
        message: "Setup Intent created successfully",
        customerId,
        clientSecret: setupIntent.client_secret,
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

    return NextResponse.json(
      { status: false, message: "Internal Server Error", error },
      { status: 500 }
    );
  }
}

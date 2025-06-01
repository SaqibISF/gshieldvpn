"use client";

import React, { FC, useEffect, useState } from "react";
import { notFound, useSearchParams } from "next/navigation";
import axios, { AxiosError } from "axios";
import { addToast, Alert, Button, Spinner } from "@heroui/react";
import { Section } from "@/components/sections";
import { HOME_PAGE_PATH } from "@/lib/pathnames";
import { ErrorIcon, VerifiedIcon } from "@/icons";
import { PurchasedPlan } from "@/types";
import { useDispatch } from "react-redux";
import { setActivePlan } from "@/store/plans.slice";
import Link from "next/link";
import { usePlans } from "@/hooks/usePlans";

const PaymentProcessingPage: FC = () => {
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const planId = searchParams.get("planId");
  const setupIntentId = searchParams.get("setup_intent");
  const setupIntentClientSecret = searchParams.get(
    "setup_intent_client_secret"
  );
  const redirectStatus = searchParams.get("redirect_status");

  if (
    !planId ||
    !setupIntentId ||
    !setupIntentClientSecret ||
    !redirectStatus
  ) {
    notFound();
  }

  const { isPlansLoading, plans } = usePlans();
  const plan = plans.find((plan) => plan.id === +planId);

  const [isPaymentSuccessful, setPaymentStatus] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [successMessage, setSuccessMessage] = useState<string>("");

  useEffect(() => {
    const subscribe = async () => {
      try {
        const res = await axios
          .post<{
            status: boolean;
            message: string;
            subscriptionId: string;
            activePlan: PurchasedPlan;
          }>("/api/create-subscription", { plan, setupIntentId })
          .then((res) => res.data);

        if (res.status) {
          setPaymentStatus(true);
          setSuccessMessage(res.message);
          dispatch(setActivePlan(res.activePlan));
        } else {
          setPaymentStatus(false);
        }
      } catch (error) {
        const errorMessage =
          error instanceof AxiosError
            ? error.response
              ? error.response.data.message
              : error.message
            : "An error occurred";
        addToast({
          color: "danger",
          title: errorMessage,
        });
      } finally {
        setLoading(false);
      }
    };

    if (redirectStatus === "succeeded") {
      if (!isPlansLoading) subscribe();
    } else {
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlansLoading]);

  return (
    <Section isHeroSection isCenterGradient className="space-y-4">
      {isLoading && (
        <Spinner
          size="lg"
          color="current"
          variant="spinner"
          label="Processing Payment..."
          className="space-y-8"
          classNames={{ wrapper: "size-32", label: "text-xl font-bold" }}
        />
      )}

      {!isLoading && !isPaymentSuccessful && (
        <>
          <ErrorIcon className="size-48 text-danger-500" />
          <h1 className="text-3xl font-semibold text-gray-900 dark:text-white">
            Payment Failed
          </h1>

          <Alert
            className="max-w-3xl flex-grow-0"
            color="danger"
            title="Unfortunately, we were unable to process your payment. Please try again or contact support if the issue persists."
          />
        </>
      )}

      {!isLoading && isPaymentSuccessful && (
        <>
          <VerifiedIcon className="size-48 text-success-500" />
          <h1 className="text-3xl font-semibold text-gray-900 dark:text-white">
            Payment Successful
          </h1>
          <Alert
            className="max-w-3xl flex-grow-0"
            color="success"
            // title="Your payment has been successfully processed. Thank you for your purchase!"
            title={successMessage}
          />
          <Button
            as={Link}
            href={HOME_PAGE_PATH}
            color="primary"
            variant="shadow"
          >
            Back to Home
          </Button>
        </>
      )}
    </Section>
  );
};

export default PaymentProcessingPage;

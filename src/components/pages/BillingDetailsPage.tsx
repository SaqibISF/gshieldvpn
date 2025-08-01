"use client";

import React, { FC } from "react";
import DashboardSection from "../Dashboard/DashboardSection";
import { Card, CardBody, CardHeader, Divider, Spinner } from "@heroui/react";
import { useBillingAddress } from "@/hooks/use-billing-address";
import ChangeNameDialog from "../Dashboard/ChangeNameDialog";
import ChangeEmailDialog from "../Dashboard/ChangeEmailDialog";
import ChangePasswordDialog from "../Dashboard/ChangePasswordDialog";
import DeleteAccountDialog from "../Dashboard/DeleteAccountDialog";
import PaymentHistoryTable from "../Dashboard/PaymentHistoryTable";
import ChangeBillingAddressDialog from "../Dashboard/ChangeBillingAddressDialog";
import { useSession } from "next-auth/react";

const BillingDetailsPage: FC = () => {
  const { data: session } = useSession();
  const { isBillingAddressLoading, billingAddress } = useBillingAddress();
  return (
    <>
      <DashboardSection title="My Account" heading="User Information">
        <Card
          className="p-6 bg-opacity-35"
          data-aos="fade-down"
          data-aos-duration="1500"
          data-aos-offset="25"
        >
          <CardBody className="sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Name</h3>

              <p className="text-default-500 text-lg font-normal">
                {session?.user.name}
              </p>
            </div>
            <ChangeNameDialog />
          </CardBody>
        </Card>

        <Card
          className="p-6 bg-opacity-35"
          data-aos="fade-down"
          data-aos-duration="1500"
          data-aos-offset="25"
        >
          <CardBody className="sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Email Address</h3>
              <p className="text-default-500 text-lg font-normal">
                {session?.user.email}
              </p>
            </div>
            <ChangeEmailDialog />
          </CardBody>
        </Card>

        <Card
          className="p-6 bg-opacity-35"
          data-aos="fade-down"
          data-aos-duration="1500"
          data-aos-offset="25"
        >
          <CardBody className="sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Password</h3>
              <p className="text-default-500 text-lg font-normal">**********</p>
            </div>
            <ChangePasswordDialog />
          </CardBody>
        </Card>

        <Card
          className="p-6 bg-opacity-35"
          data-aos="fade-down"
          data-aos-duration="1500"
          data-aos-offset="25"
        >
          <CardHeader className="text-3xl font-bold">
            Account management
          </CardHeader>
          <Divider />
          <CardBody className="md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-4 md:w-2/3">
              <h3 className="text-2xl font-semibold">Delete</h3>

              <p className="text-default-500 text-lg font-normal">
                Delete your account and its associated data in accordance with
                our Privacy Policy. You may choose to do it immediately or once
                your subscription ends and its
              </p>
            </div>
            <DeleteAccountDialog />
          </CardBody>
        </Card>
      </DashboardSection>

      <DashboardSection title="Billing Details" heading="Payment History">
        <div
          className="w-full"
          data-aos="fade-down"
          data-aos-duration="1500"
          data-aos-offset="25"
        >
          <PaymentHistoryTable />
        </div>

        <Card
          className="p-6 bg-opacity-35"
          data-aos="fade-down"
          data-aos-duration="1500"
          data-aos-offset="25"
        >
          <CardHeader className="text-3xl font-bold">
            Billing Address
          </CardHeader>
          <Divider />
          <CardBody className="md:flex-row md:items-center justify-between gap-6">
            {isBillingAddressLoading && <Spinner className="mx-auto" />}

            {!isBillingAddressLoading && !billingAddress && (
              <p className="text-default-500 text-lg font-normal">
                No Billing Address Found
              </p>
            )}

            {!isBillingAddressLoading && billingAddress && (
              <div className="space-y-2 md:w-2/3">
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <h4 className="text-xl font-semibold w-40">Name:</h4>
                  <span className="text-default-500 text-lg font-normal ml-2">
                    {billingAddress.name}
                  </span>
                </div>

                <Divider className="sm:hidden" />

                <div className="flex flex-col sm:flex-row sm:items-center">
                  <h4 className="text-xl font-semibold w-40">Email Address:</h4>
                  <span className="text-default-500 text-lg font-normal ml-2">
                    {session?.user.email}
                  </span>
                </div>

                <Divider className="sm:hidden" />

                <div className="flex flex-col sm:flex-row sm:items-center">
                  <h4 className="text-xl font-semibold w-40">Address:</h4>
                  <span className="text-default-500 text-lg font-normal ml-2">
                    {billingAddress.address}
                  </span>
                </div>

                <Divider className="sm:hidden" />

                <div className="flex flex-col sm:flex-row sm:items-center">
                  <h4 className="text-xl font-semibold w-40">City:</h4>
                  <span className="text-default-500 text-lg font-normal ml-2">
                    {billingAddress.city}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center">
                  <h4 className="text-xl font-semibold w-40">State:</h4>
                  <span className="text-default-500 text-lg font-normal ml-2">
                    {billingAddress.state}
                  </span>
                </div>

                <Divider className="sm:hidden" />

                <div className="flex flex-col sm:flex-row sm:items-center">
                  <h4 className="text-xl font-semibold w-40">Postal Code:</h4>
                  <span className="text-default-500 text-lg font-normal ml-2">
                    {billingAddress.postal_code}
                  </span>
                </div>
              </div>
            )}

            {!isBillingAddressLoading && <ChangeBillingAddressDialog />}
          </CardBody>
        </Card>
      </DashboardSection>
    </>
  );
};

export default BillingDetailsPage;

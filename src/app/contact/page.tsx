"use client";

import React, { FC, useEffect, useState } from "react";
import { Section } from "@/components/sections";
import { addToast, Alert, Button, Divider } from "@heroui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import axios, { AxiosError } from "axios";
import { SEND_FEEDBACK_ROUTE } from "@/lib/constants";
import { useSession } from "next-auth/react";
import Input from "@/components/Input";
import { EMAIL_INVALID_ERROR_MESSAGE, EMAIL_REGEX } from "@/lib/utils";
import Textarea from "@/components/TextArea";

const ContactUsPage: FC = () => {
  type Data = {
    email: string;
    subject: string;
    message: string;
  };

  const { data: session } = useSession();

  const [isLoading, setLoading] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
    reset,
    setFocus,
  } = useForm<Data>({
    defaultValues: {
      email: "",
      subject: "",
      message: "",
    },
  });

  const submit: SubmitHandler<Data> = async (values) => {
    try {
      clearErrors();
      setSuccessMessage("");
      setLoading(true);
      const res = await axios
        .post<{ status: boolean; message: string }>(
          SEND_FEEDBACK_ROUTE,
          values,
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${session?.user.access_token}`,
            },
          }
        )
        .then((res) => res.data);
      if (res.status) {
        addToast({ color: "success", description: res.message });
        setSuccessMessage(res.message);
        reset();
      } else {
        addToast({ color: "danger", description: res.message });
        setError("root", { type: "manual", message: res.message });
      }
    } catch (error) {
      const errorMessage =
        error instanceof AxiosError
          ? error.response
            ? error.response.data.message
            : error.message
          : "Failed to send feedback, please try again later.";
      addToast({ color: "danger", description: errorMessage });
      setError("root", { type: "manual", message: errorMessage });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setFocus("email");
  }, [setFocus]);

  return (
    <Section isHeroSection heading="Contact Us" className="gap-6">
      <div className="flex items-center gap-x-2">
        You can email us at
        <a
          href="mailto:support@gshieldvpn.com"
          className="text-primary font-bold"
        >
          support@gshieldvpn.com
        </a>
      </div>

      <Divider className="max-w-sm" />

      <div className="text-default-500 text-xl font-semibold">-- OR --</div>

      <form
        onSubmit={handleSubmit(submit)}
        className="max-w-md w-full flex flex-col gap-y-4"
      >
        <Input
          isRequired
          label="Email"
          placeholder="Enter your Email Address"
          type="email"
          errorMessage={errors.email?.message}
          {...register("email", {
            required: { value: true, message: "Enter email address" },
            pattern: {
              value: EMAIL_REGEX,
              message: EMAIL_INVALID_ERROR_MESSAGE,
            },
          })}
        />

        <Input
          isRequired
          label="Subject"
          placeholder="Enter Subject"
          type="text"
          maxLength={100}
          errorMessage={errors.subject?.message}
          {...register("subject", {
            required: { value: true, message: "Enter subject" },
            minLength: {
              value: 3,
              message: "Please enter minimum 3 characters",
            },
          })}
        />

        <Textarea
          isRequired
          label="Message"
          placeholder="Type here your message"
          errorMessage={errors.message?.message}
          {...register("message", {
            required: { value: true, message: "Write here your feedback" },
            minLength: {
              value: 15,
              message: "Please enter minimum 15 characters",
            },
          })}
        />

        {successMessage && <Alert color="success" title={successMessage} />}

        {errors.root && <Alert color="danger" title={errors.root.message} />}

        <Button
          isLoading={isLoading}
          type="submit"
          color="primary"
          className="self-end "
        >
          {isLoading ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </Section>
  );
};

export default ContactUsPage;

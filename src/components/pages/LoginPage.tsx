"use client";

import React, { FC, useEffect, useState } from "react";
import { Section } from "../sections";
import { AppleIcon, EnvelopeIcon, GoogleIcon } from "@/icons";
import {
  DASHBOARD_PAGE_PATH,
  FORGOT_PASSWORD_PAGE_PATH,
  SIGNUP_PAGE_PATH,
  RESENT_EMAIL_VERIFICATION_PAGE_PATH,
} from "@/lib/pathnames";
import {
  addToast,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Checkbox,
} from "@heroui/react";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "@/components/Input";
import { EMAIL_INVALID_ERROR_MESSAGE, EMAIL_REGEX } from "@/lib/utils";
import axios, { AxiosError } from "axios";
import { LOGIN_ROUTE } from "@/lib/constants";
import { User } from "@/types/user";
import { useSession, signIn } from "next-auth/react";
import { getToken } from "next-auth/jwt";
import { useRouter, useSearchParams } from "next/navigation";

const LoginPage: FC = () => {
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");
  const router = useRouter();
  const { data: session } = useSession();
  type LoginData = { email: string; password: string };

  const [isLoading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    // setValue,
    clearErrors,
    reset,
    setFocus,
  } = useForm<LoginData>();

  const login: SubmitHandler<LoginData> = async (data) => {
    try {
      clearErrors();
      setLoading(true);

      type LoginResponse = {
        status: boolean;
        message: string;
        access_token: string;
        user: User;
      };

      const res = await axios
        .post<LoginResponse>(LOGIN_ROUTE, data, {
          headers: {
            Accept: "application/json",
          },
        })
        .then((res) => res.data);

      if (res.status) {
        await signIn("credentials", {
          redirect: false,
          id: res.user.id,
          email: res.user.email,
          name: res.user.name,
          slug: res.user.slug,
          access_token: res.access_token,
        });
        router.replace(redirect ? redirect : DASHBOARD_PAGE_PATH);
        reset();
        addToast({
          color: "success",
          description: res.message,
        });
      } else {
        addToast({ color: "danger", description: res.message });
        setError("root", { type: "manual", message: res.message });
        // setValue("password", "");
      }
    } catch (error) {
      const errorMessage =
        error instanceof AxiosError
          ? error.response
            ? error.response.data.message
            : error.message
          : "Failed to login";
      setError("root", { type: "manual", message: errorMessage });
      // setValue("password", "");
      setFocus("password");
      addToast({ color: "danger", description: errorMessage });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignin = async () =>
    await signIn("google", {
      callbackUrl: redirect ? redirect : DASHBOARD_PAGE_PATH,
    });

  const handleAppleSignin = async () =>
    await signIn("apple", {
      callbackUrl: redirect ? redirect : DASHBOARD_PAGE_PATH,
    });

  useEffect(() => {
    console.log("Session:", session);
  }, [session]);

  useEffect(() => {
    const token = async () => {
      const res = await getToken({ req: { headers: {} }, secureCookie: true });
      console.log("Token", res);
    };

    token();
  }, [session]);

  return (
    <Section isHeroSection isRightCornerGradient>
      <form onSubmit={handleSubmit(login)} className="max-w-md w-full relative">
        <div
          className="w-full h-full rounded-xl absolute blur-[5.375rem] !pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(96, 211, 148, 0.70) 12.38%, rgba(96, 211, 148, 0.00) 100%)",
          }}
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-offset="25"
        ></div>
        <Card
          className="p-6"
          data-aos="fade-down"
          data-aos-duration="1500"
          data-aos-offset="25"
        >
          <CardHeader className="flex-col gap-2">
            <h2 className="text-3xl font-semibold text-center">
              Welcome Back to Secure Internet
            </h2>
            <p className="text-default-500 text-sm font-normal">
              Enter your credentials to connect instantly.
            </p>

            {errors.root && (
              <div className="w-full text-danger-600 bg-danger-50 border-2 border-solid border-danger-100 p-3 rounded-xl">
                {errors.root.message}
              </div>
            )}
          </CardHeader>
          <CardBody className="gap-6">
            <Input
              label="Email"
              placeholder="you@example.com"
              type="email"
              endContent={
                <EnvelopeIcon className="w-5 text-default-500 pointer-events-none" />
              }
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
              label="Password"
              placeholder="Enter your password"
              type="password"
              errorMessage={errors.password?.message}
              {...register("password", {
                required: { value: true, message: "Enter your password" },
              })}
            />

            <div className="flex justify-between">
              <Checkbox
                color="primary"
                classNames={{ label: "text-sm sm:text-medium" }}
              >
                Remember me
              </Checkbox>
              <Link
                href={FORGOT_PASSWORD_PAGE_PATH}
                className="text-primary dark:text-primary-600 text-sm sm:text-medium font-medium"
              >
                Forgot password
              </Link>
            </div>
          </CardBody>
          <CardFooter className="flex-col gap-4">
            <Button
              isLoading={isLoading}
              type="submit"
              fullWidth
              size="lg"
              color="primary"
            >
              {isLoading ? "Logging in..." : "Login"}
            </Button>

            <Button
              fullWidth
              size="lg"
              variant="bordered"
              startContent={<GoogleIcon />}
              onPress={handleGoogleSignin}
            >
              Continue with Google
            </Button>

            <Button
              fullWidth
              size="lg"
              variant="bordered"
              startContent={<AppleIcon />}
              onPress={handleAppleSignin}
            >
              Continue with Apple
            </Button>

            <Link
              href={RESENT_EMAIL_VERIFICATION_PAGE_PATH}
              className="text-primary dark:text-primary-600 text-sm sm:text-medium font-medium"
            >
              Resend Email Verification
            </Link>
            <span className="text-sm font-normal">
              Don&apos;t have an account?{" "}
              <Link
                href={SIGNUP_PAGE_PATH}
                className="text-primary dark:text-primary-600 font-medium"
              >
                Create an account
              </Link>
            </span>
          </CardFooter>
        </Card>
      </form>
    </Section>
  );
};

export default LoginPage;

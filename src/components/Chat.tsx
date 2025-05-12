"use client";

import React, { FC, useEffect, useState } from "react";
import {
  BoltIcon,
  ChatIcon,
  CloseIcon,
  FileArrowUpIcon,
  PaperPlaneIcon,
  TickIcon,
  WarningIcon,
} from "@/icons";
import {
  addToast,
  Alert,
  Button,
  ButtonProps,
  Divider,
  Popover,
  PopoverContent,
  PopoverTrigger,
  RadioGroup,
  Spinner,
  Textarea,
} from "@heroui/react";
import { cn } from "@/lib/utils";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import axios, { AxiosError } from "axios";
import {
  CLOSE_SUPPORT_TICKETS_ROUTE,
  CREATE_SUPPORT_TICKETS_ROUTE,
  MESSAGE_REPLY_SUPPORT_TICKET_ROUTE,
} from "@/lib/constants";
import Input from "./Input";
import RadioElement from "./RadioElement";
import { useUserCookie } from "@/hooks/use-cookies";
import { useViewTicket } from "@/hooks/use-view-ticket";
import { useAppState } from "@/hooks/use-app-state";
import useEcho from "@/hooks/useEcho";
import { SupportTicket } from "@/types";
import { useDispatch } from "react-redux";
import {
  closeChat,
  setCurrentSupportTicketId,
  setIsChatDialogOpen,
} from "@/store/app.slice";

const CreateTicket: FC = () => {
  const dispatch = useDispatch();
  const { user } = useUserCookie();

  type SubmitData = {
    priority: "high" | "medium" | "low";
    subject: string;
    message: string;
  };

  const [isLoading, setLoading] = useState<boolean>(false);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
    reset,
  } = useForm<SubmitData>({
    defaultValues: {
      priority: "high",
      subject: "",
      message: "",
    },
  });

  const handleCreateTicket: SubmitHandler<SubmitData> = async (data) => {
    try {
      clearErrors();
      setLoading(true);
      const res = await axios.post<{ ticket: SupportTicket; message: string }>(
        CREATE_SUPPORT_TICKETS_ROUTE,
        data,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${user.access_token}`,
          },
        }
      );

      if (res.status === 200 || res.status === 201) {
        dispatch(setCurrentSupportTicketId(res.data.ticket.id));
        addToast({ color: "success", description: res.data.message });
        reset();
      } else {
        addToast({ color: "danger", description: res.data.message });
        setError("root", { type: "manual", message: res.data.message });
      }
    } catch (error) {
      const errorMessage =
        error instanceof AxiosError
          ? error.response
            ? error.response.data.message
            : error.message
          : "Something Went Wrong";
      addToast({ color: "danger", description: errorMessage });
      setError("root", { type: "manual", message: errorMessage });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleCreateTicket)}
      className="max-w-md w-full flex flex-col gap-4 p-6"
    >
      <Controller
        name="priority"
        control={control}
        render={({ field }) => (
          <RadioGroup
            label="Priority Level"
            value={field.value}
            onValueChange={field.onChange}
            classNames={{ label: "text-foreground" }}
          >
            <div className="flex items-center gap-2">
              <RadioElement
                description="High"
                value="high"
                classNames={{
                  base: "bg-danger-100 border-transparent data-[selected=true]:border-danger-500",
                  wrapper: "hidden",
                  labelWrapper:
                    "text-danger-500 ml-0 w-16 h-8 flex flex-col gap-2 items-center justify-center",
                  label: "text-danger-500",
                }}
              >
                <WarningIcon />
              </RadioElement>
              <RadioElement
                description="Medium"
                value="medium"
                classNames={{
                  base: "bg-warning-100 border-transparent data-[selected=true]:border-warning-500",
                  wrapper: "hidden",
                  labelWrapper:
                    "text-warning-500 ml-0 w-16 h-8 flex flex-col gap-2 items-center justify-center",
                  label: "text-warning-500",
                }}
              >
                <BoltIcon />
              </RadioElement>
              <RadioElement
                description="Low"
                value="low"
                classNames={{
                  base: "bg-success-100 border-transparent data-[selected=true]:border-success-500",
                  wrapper: "hidden",
                  labelWrapper:
                    "text-success-500 ml-0 w-16 h-8 flex flex-col gap-2 items-center justify-center",
                  label: "text-success-500",
                }}
              >
                <TickIcon />
              </RadioElement>
            </div>
          </RadioGroup>
        )}
      />

      <Input
        label="Subject"
        placeholder="Brief description of issue"
        type="text"
        size="md"
        errorMessage={errors.subject?.message}
        {...register("subject", {
          required: {
            value: true,
            message: "Brief description of issue",
          },
        })}
      />

      <Textarea
        label="Message"
        labelPlacement="outside"
        placeholder="Provide detailed information about your issue"
        type="text"
        classNames={{
          inputWrapper: "bg-transparent border",
          errorMessage: "mt-2 whitespace-pre-line",
        }}
        {...register("message")}
      />

      {errors.root && <Alert color="danger" title={errors.root.message} />}

      <Button
        isLoading={isLoading}
        type="submit"
        fullWidth
        color="primary"
        variant="shadow"
      >
        {isLoading ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
};

const ViewChat: FC<{ ticketId: number }> = ({ ticketId }) => {
  const dispatch = useDispatch();
  const { user } = useUserCookie();

  const echo: { private: (channel: string) => { listen: (event: string, callback: (data: any) => void) => void } } | null = useEcho();

  type SubmitData = {
    message: string;
    attachments?: File[];
  };

  if (echo) {
    echo.private(`ticket.${ticketId}`).listen("TicketMessageSent", event => {
      console.log(event);
    });
  }

  const { isTicketLoading, ticket } = useViewTicket(
    ticketId,
    user.access_token
  );

  const [isChatClosing, setIsChatClosing] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setFocus,
    clearErrors,
    watch,
    reset,
  } = useForm<SubmitData>({
    defaultValues: {
      message: "",
      attachments: [],
    },
  });

  const watchMessage = watch("message");
  const watchAttachments = watch("attachments");

  const handleMessageReply: SubmitHandler<SubmitData> = async (data) => {
    try {
      clearErrors();
      setLoading(true);
      const formData = new FormData();
      formData.append("message", data.message);
      data.attachments?.forEach((file) =>
        formData.append("attachments[]", file)
      );

      const res = await axios.post<{ ticket: SupportTicket; message: string }>(
        MESSAGE_REPLY_SUPPORT_TICKET_ROUTE(ticketId),
        formData,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${user.access_token}`,
          },
        }
      );

      if (res.status === 200 || res.status === 201) {
        addToast({ color: "success", description: res.data.message });
        reset();
      } else {
        addToast({ color: "danger", description: res.data.message });
        setError("root", { type: "manual", message: res.data.message });
      }
    } catch (error) {
      const errorMessage =
        error instanceof AxiosError
          ? error.response
            ? error.response.data.message
            : error.message
          : "Something Went Wrong";
      addToast({ color: "danger", description: errorMessage });
      setError("root", { type: "manual", message: errorMessage });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseChat = async () => {
    try {
      setIsChatClosing(true);

      const res = await axios.post<{ message: string }>(
        CLOSE_SUPPORT_TICKETS_ROUTE(ticketId),
        {},
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${user.access_token}`,
          },
        }
      );

      if (res.status === 200 || res.status === 201) {
        addToast({ color: "success", description: res.data.message });
        dispatch(closeChat());

        reset();
      } else {
        addToast({ color: "danger", description: res.data.message });
        setError("root", { type: "manual", message: res.data.message });
      }
    } catch (error) {
      const errorMessage =
        error instanceof AxiosError
          ? error.response
            ? error.response.data.message
            : error.message
          : "Something Went Wrong";
      addToast({ color: "danger", description: errorMessage });
      setError("root", { type: "manual", message: errorMessage });
    } finally {
      setIsChatClosing(false);
    }
  };

  useEffect(() => setFocus("message"), [setFocus]);

  return (
    <div className="w-full h-96 flex flex-col">
      <div className="p-2 text-sm flex items-center">
        <div className="flex-1 flex flex-col gap-2 px-2">
          <div>
            Subject:{" "}
            <span className="capitalize text-default-500">
              {ticket?.subject}
            </span>
          </div>
          <div>
            Priority:{" "}
            <span
              className={cn(
                "capitalize",
                ticket?.priority === "low"
                  ? "text-success-500"
                  : ticket?.priority === "medium"
                    ? "text-warning-500"
                    : ticket?.priority === "high"
                      ? "text-danger-500"
                      : ""
              )}
            >
              {ticket?.priority}
            </span>
          </div>
        </div>

        {ticket && ticket.status === "open" && (
          <Button
            size="sm"
            color="danger"
            isLoading={isChatClosing}
            onPress={handleCloseChat}
          >
            {isChatClosing ? "Closing..." : "Close Chat"}
          </Button>
        )}
      </div>
      <Divider />
      <div className="w-full h-[calc(100%-4.5rem)] overflow-y-auto px-4 pt-6">
        {isTicketLoading && <Spinner className="w-full h-full" />}

        {ticket?.messages?.map((message, index) => (
          <div
            key={index}
            className={cn(
              "flex flex-col gap-2 mb-4",
              !!message.is_admin ? "items-end" : "items-start"
            )}
          >
            <div
              className={cn(
                "px-4 py-2 rounded-lg max-w-xs",
                !!message.is_admin
                  ? "bg-gray-200 text-black"
                  : "bg-primary text-white"
              )}
            >
              {message.message}
            </div>
            <span className="text-xs text-gray-500">
              {new Date(message.created_at).toLocaleString()}
            </span>
          </div>
        ))}
      </div>

      {errors.root && <Alert color="danger" title={errors.root.message} />}
      <Divider />

      {ticket && ticket.status === "open" ? (
        <form
          onSubmit={handleSubmit(handleMessageReply)}
          className="w-full flex items-center gap-2 px-4 py-2"
        >
          <input
            id="attachments"
            type="file"
            className="hidden"
            {...register("attachments")}
            multiple
          />

          <Input
            placeholder="Message Type Here..."
            type="text"
            size="md"
            radius="full"
            endContent={
              <label
                htmlFor="attachments"
                className="text-primary hover:opacity-70 active:opacity-50 pointer-events-auto cursor-pointer"
              >
                <FileArrowUpIcon />
              </label>
            }
            errorMessage={errors.message?.message}
            {...register("message", {
              required: {
                value: true,
                message: "Type here...",
              },
            })}
          />

          <Button
            isIconOnly
            isLoading={isLoading}
            type="submit"
            color="primary"
            variant="shadow"
            radius="full"
            isDisabled={!watchMessage.trim() && !watchAttachments?.length}
          >
            <PaperPlaneIcon size={16} />
          </Button>
        </form>
      ) : (
        <span className="w-full text-danger-500 py-4 px-6 text-md font-semibold mx-auto bg-danger-100 rounded-b-2xl">
          Chat Closed
        </span>
      )}
    </div>
  );
};

const Chat: FC<ButtonProps> = ({ className, ...props }) => {
  const dispatch = useDispatch();
  const { currentSupportTicketId, isChatDialogOpen } = useAppState();
  return (
    <div>
      <Popover
        placement="top-end"
        showArrow
        isOpen={isChatDialogOpen}
        onOpenChange={(isOpen) => dispatch(setIsChatDialogOpen(isOpen))}
      >
        <PopoverTrigger>
          <Button
            isIconOnly
            variant="shadow"
            color="primary"
            radius="full"
            className={cn("size-20", className)}
            {...props}
          >
            <ChatIcon className="size-12" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-96">
          <div className="w-full text-white bg-primary px-6 py-2 rounded-t-2xl flex items-center justify-between">
            <h3 className="text-xl">
              {!currentSupportTicketId
                ? "Create Ticket"
                : `Ticket # ${currentSupportTicketId}`}
            </h3>
            <Button
              isIconOnly
              variant="light"
              className="min-w-fit w-auto h-auto rounded-none"
            >
              <CloseIcon className="text-white" />
            </Button>
          </div>
          {!currentSupportTicketId ? (
            <CreateTicket />
          ) : (
            <ViewChat ticketId={currentSupportTicketId} />
          )}
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Chat;

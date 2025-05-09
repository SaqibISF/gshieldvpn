"use client";

import React, { FC } from "react";
import {
  Button,
  getKeyValue,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";
import { GET_SUPPORT_TICKETS_ROUTE } from "@/lib/constants";
import useSWR from "swr";
import { SupportTicket } from "@/types";
import { useUserCookie } from "@/hooks/use-cookies";
import { MessagesIcon } from "@/icons";
import { useDispatch } from "react-redux";
import { setCurrentSupportTicketId } from "@/store/app.slice";

const ViewChat: FC<{ supportTicketId: number }> = ({ supportTicketId }) => {
  const dispatch = useDispatch();
  return (
    <Button
      size="sm"
      color="primary"
      variant="shadow"
      startContent={<MessagesIcon />}
      onPress={() => dispatch(setCurrentSupportTicketId(supportTicketId))}
    >
      View Chat
    </Button>
  );
};

const SupportTicketsTable: FC = () => {
  const { user } = useUserCookie();

  const fetcher = (url: string) =>
    fetch(url, {
      headers: {
        Authorization: `Bearer ${user.access_token}`,
      },
    }).then((res) => res.json());

  const {
    data: supportTickets,
    isLoading,
    error,
  } = useSWR<{
    tickets: SupportTicket[];
  }>(GET_SUPPORT_TICKETS_ROUTE, fetcher, {
    keepPreviousData: true,
  });

  const loadingState = isLoading ? "loading" : "idle";

  return (
    <Table
      aria-label="Support Tickets"
      className="max-w-[calc(100vw-3rem)]"
      classNames={{
        th: "text-white bg-primary",
        wrapper: "bg-opacity-60",
      }}
    >
      <TableHeader>
        <TableColumn key="id">Ticket #</TableColumn>
        <TableColumn key="subject">Subject</TableColumn>
        <TableColumn key="priority">Priority Level</TableColumn>
        <TableColumn key="status">Status</TableColumn>
        <TableColumn key="created_at">Date & Time</TableColumn>
        <TableColumn key="view">View Chat</TableColumn>
      </TableHeader>
      <TableBody
        items={supportTickets?.tickets ?? []}
        loadingContent={<Spinner />}
        loadingState={loadingState}
        emptyContent={error ? error.message : "No Support Tickets Found"}
      >
        {(item) => (
          <TableRow key={item?.id}>
            {(columnKey) => (
              <TableCell className="capitalize">
                {columnKey === "id" ? (
                  `#${item.id}`
                ) : columnKey === "priority" ? (
                  <span
                    className={
                      item.priority === "high"
                        ? "text-danger-500"
                        : item.priority === "medium"
                        ? "text-warning-500"
                        : item.priority === "low"
                        ? "text-success-500"
                        : ""
                    }
                  >
                    {item.priority}
                  </span>
                ) : columnKey === "status" ? (
                  <span
                    className={item.status === "open" ? "text-primary" : ""}
                  >
                    {item.status}
                  </span>
                ) : columnKey === "view" ? (
                  <ViewChat supportTicketId={item.id} />
                ) : (
                  getKeyValue(item, columnKey)
                )}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default SupportTicketsTable;

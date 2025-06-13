import { useEffect, useState } from "react";
import { SupportTicket } from "@/types";
import axios, { AxiosError } from "axios";
import { addToast } from "@heroui/react";
import { VIEW_SUPPORT_TICKET_ROUTE } from "@/lib/constants";
import { useSession } from "next-auth/react";

export const useViewTicket = (ticketId: number, status: string) => {
  const { data: session } = useSession();
  const [ticket, setTicket] = useState<SupportTicket>();
  const [isTicketLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchViewTickets = async () => {
      try {
        const response = await axios.get<{ ticket: SupportTicket }>(
          VIEW_SUPPORT_TICKET_ROUTE(ticketId),
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${session?.user.access_token}`,
            },
          }
        );

        if (response.status === 200 || response.status === 201) {
          setTicket(response.data.ticket);
        }
      } catch (error) {
        const errorMessage =
          error instanceof AxiosError
            ? error.response
              ? error.response.data.message
              : error.message
            : "Failed to Load Ticket";
        addToast({ color: "danger", description: errorMessage });
      } finally {
        setLoading(false);
      }
    };

    let timerId = null;

    if (status === "open") {
      timerId = setInterval(fetchViewTickets, 1000);
    } else {
      fetchViewTickets();
    }

    return () => {
      if (timerId) clearInterval(timerId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isTicketLoading, ticket, setTicket } as const;
};

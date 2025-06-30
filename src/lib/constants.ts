export const IP_INFO_TOKEN = process.env.NEXT_PUBLIC_IP_INFO_TOKEN!;

export const AUTH_GOOGLE_ID = process.env.AUTH_GOOGLE_ID!;
export const AUTH_GOOGLE_SECRET = process.env.AUTH_GOOGLE_SECRET!;

export const AUTH_APPLE_ID = process.env.AUTH_APPLE_ID!;
export const AUTH_APPLE_TEAM_ID = process.env.AUTH_APPLE_TEAM_ID!;
export const AUTH_APPLE_KEY_ID = process.env.AUTH_APPLE_KEY_ID!;
export const AUTH_APPLE_SECRET = process.env.AUTH_APPLE_SECRET!;

export const STRIPE_PUBLISHABLE_KEY =
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!;
export const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY!;

export const REST_API_BASE_URL = process.env.NEXT_PUBLIC_REST_API_BASE_URL!;

export const GET_SERVERS_ROUTE = (page: number) =>
  `${REST_API_BASE_URL}/web/servers?page=${page}`;

export const LOGIN_ROUTE = REST_API_BASE_URL + "/login";
export const SIGNUP_ROUTE = REST_API_BASE_URL + "/signup";
export const LOGOUT_ROUTE = REST_API_BASE_URL + "/logout";
export const FORGOT_PASSWORD_ROUTE = REST_API_BASE_URL + "/forgot-password";
export const RESET_PASSWORD_ROUTE = REST_API_BASE_URL + "/reset-password";
export const LOGIN_WITH_GOOGLE_ROUTE = REST_API_BASE_URL + "/login/google";
export const LOGIN_WITH_APPLE_ROUTE = REST_API_BASE_URL + "/login/apple";

export const EMAIL_VERIFICATION_ROUTE = (id: number | string, hash: string) =>
  REST_API_BASE_URL + "/email/verify/" + id + "/" + hash;

export const RESENT_EMAIL_VERIFICATION_ROUTE =
  REST_API_BASE_URL + "/email/resend-verification";

export const GET_PLANS_ROUTE = REST_API_BASE_URL + "/plans";
export const GET_LEGAL_NOTES_ROUTE = REST_API_BASE_URL + "/options";

export const CHECK_SETUP_INTENT_IS_USED_ROUTE =
  REST_API_BASE_URL + "/purchase/stripe-session";
export const ADD_PURCHASE_PLAN_ROUTE = REST_API_BASE_URL + "/purchase/add";
export const GET_PURCHASE_ACTIVE_PLAN_ROUTE =
  REST_API_BASE_URL + "/purchase/active";
export const GET_PURCHASE_PLAN_ROUTE = (purchaseId: number | string) =>
  `${REST_API_BASE_URL}/purchase/${purchaseId}`;
export const GET_PURCHASE_HISTORY_ROUTE = (page: number) =>
  `${REST_API_BASE_URL}/purchase/history?page=${page}`;

export const UPDATE_USER_INFO_ROUTE = REST_API_BASE_URL + "/user/update";
export const UPDATE_USER_PASSWORD_ROUTE =
  REST_API_BASE_URL + "/user/update-password";
export const DELETE_USER_ACCOUNT_ROUTE = REST_API_BASE_URL + "/user/delete";

export const GET_BILLING_ADDRESS_ROUTE = REST_API_BASE_URL + "/billing-address";
export const UPDATE_BILLING_ADDRESS_ROUTE =
  REST_API_BASE_URL + "/billing-address/store";

export const SEND_FEEDBACK_ROUTE = REST_API_BASE_URL + "/feedback/store";

export const GET_SUPPORT_TICKETS_ROUTE = REST_API_BASE_URL + "/tickets";

export const CREATE_SUPPORT_TICKETS_ROUTE =
  REST_API_BASE_URL + "/ticket/create";

export const CLOSE_SUPPORT_TICKETS_ROUTE = (ticketId: number) =>
  `${REST_API_BASE_URL}/ticket/${ticketId}/close`;

export const VIEW_SUPPORT_TICKET_ROUTE = (ticketId: number) =>
  `${REST_API_BASE_URL}/ticket/${ticketId}`;

export const MESSAGE_REPLY_SUPPORT_TICKET_ROUTE = (ticketId: number) =>
  `${REST_API_BASE_URL}/ticket/${ticketId}/reply`;

export const MESSAGE_BROADCASTING_ROUTE =
  REST_API_BASE_URL + "/broadcasting/auth";

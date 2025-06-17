import NextAuth, { JWT, User } from "next-auth";
import Google from "next-auth/providers/google";
import Apple from "next-auth/providers/apple";
import Credentials from "next-auth/providers/credentials";
import {
  AUTH_APPLE_ID,
  AUTH_APPLE_SECRET,
  AUTH_GOOGLE_ID,
  AUTH_GOOGLE_SECRET,
  LOGIN_WITH_APPLE_ROUTE,
  LOGIN_WITH_GOOGLE_ROUTE,
} from "./lib/constants";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({ clientId: AUTH_GOOGLE_ID, clientSecret: AUTH_GOOGLE_SECRET }),
    Apple({ clientId: AUTH_APPLE_ID, clientSecret: AUTH_APPLE_SECRET }),
    Credentials({
      name: "Credentials",
      type: "credentials",

      authorize: async (credentials) => {
        return {
          id: credentials.id,
          email: credentials.email,
          name: credentials.name,
          slug: credentials.slug,
          access_token: credentials.access_token,
        } as User;
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log("CallBack User:", user);
      console.log("CallBack Account:", account);
      console.log("CallBack Profile:", profile);
      console.log("CallBack Email:", email);
      console.log("CallBack Credentials:", credentials);

      if (credentials) {
        return true;
      }

      if (account) {
        if (account.provider === "google" || account.provider === "apple") {
          try {
            const res = await fetch(
              account.provider === "google"
                ? LOGIN_WITH_GOOGLE_ROUTE
                : LOGIN_WITH_APPLE_ROUTE,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body:
                  account.provider === "google"
                    ? JSON.stringify({ token: account.access_token })
                    : JSON.stringify({ id_token: account.id_token }),
              }
            ).then((res) => res.json());

            if (res.status) {
              user.id = res.user.id;
              user.email = res.user.email;
              user.name = res.user.name;
              user.slug = res.user.slug;
              user.access_token = res.access_token;
              return true;
            } else return `/auth/error?error=${res.message}`;
          } catch (error) {
            return `/auth/error?error=${
              error instanceof Error ? error.message : "Failed to login"
            }`;
          }
        }
      }
      return false;
    },

    async jwt({ token, user, account, profile, trigger, isNewUser, session }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.slug = user.slug;
        token.access_token = user.access_token;
      }

      console.log("JWT Token:", token);
      console.log("JWT User:", user);
      console.log("JWT Account:", account);
      console.log("JWT Profile:", profile);
      console.log("JWT Trigger:", trigger);
      console.log("JWT IsNewUser:", isNewUser);
      console.log("JWT Session:", session);
      return token;
    },

    async session({ session, token }) {
      if (token) {
        const jwt = token as unknown as JWT;
        session.user.id = jwt.id as string;
        session.user.email = jwt.email;
        session.user.name = jwt.name;
        session.user.access_token = jwt.access_token;
        session.user.slug = jwt.slug;
      }

      console.log("Session:", session);
      console.log("Session Token:", token);

      return session;
    },
  },
});

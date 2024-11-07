import NextAuth from "next-auth";
import Discord from "next-auth/providers/discord";
import Google from "next-auth/providers/google";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "~/server/db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [Discord, Google],
  callbacks: {
    session({ session, user }) {
      session.user.id = user.id;
      return session;
    },
  },
  session: {
    strategy: "database",
  },
});

// add middleware if needed at root
/* TODO: if you wanna get the id thing to work, some combo
of auth.js/typescript and auth.js/extending the session
will be good resources */

import NextAuth from "next-auth";
import Discord from "next-auth/providers/discord";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Discord, Google],
  callbacks: {
    // session({ session, token }) {
    //   if (session.user) {
    //     session.user.id = token.sub!;
    //   }
    //   return session;
    // },
  },
  session: {
    strategy: "jwt",
  },
});

// add middleware if needed at root
/* TODO: if you wanna get the id thing to work, some combo
of auth.js/typescript and auth.js/extending the session
will be good resources */

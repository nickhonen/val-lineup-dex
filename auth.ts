import NextAuth from "next-auth";
import Discord from "next-auth/providers/discord"
import Google from "next-auth/providers/google"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Discord,
    Google,
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) { // User is available during sign-in
        token.id = user.id
      }
      return token
    },
    session({ session, token }) {
      if (token?.id) {
        session.user.id = token.id
      }
      return session
    },
  }
})

// add middleware if needed at root
/* TODO: if you wanna get the id thing to work, some combo
of auth.js/typescript and auth.js/extending the session
will be good resources */

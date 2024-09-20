import NextAuth, { type DefaultSession } from "next-auth"
import Discord from "next-auth/providers/discord"
import Google from "next-auth/providers/google"

// typescript module stuff to include id in session for uploadthing
// declare module "next-auth" {
//   interface Session {
//     user: {
//       id: string;
//     } & DefaultSession["user"]
//   }
// }
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
    session({ session, user }) {
      session.user.id = user.id
      return session
    },
  },
})

// add middleware if needed at root


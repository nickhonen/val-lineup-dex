import NextAuth, { type DefaultSession } from "next-auth";
// import "next-auth/jwt";

// declare module "next-auth/jwt" {
//   interface JWT {
//     id?: string;
//   }
// }

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      // email: string;
      // name: string;
      // image: string;
    } & DefaultSession["user"];
  }
}

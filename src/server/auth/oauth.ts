import { Google } from "arctic";
import { env } from "~/env";

export const google = new Google(
  env.AUTH_GOOGLE_ID ?? "",
  env.AUTH_GOOGLE_SECRET ?? "",
  "https://val-lineup-dex.vercel.app/api/auth/google/callback",
);

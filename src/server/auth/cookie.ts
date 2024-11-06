import { cookies } from "next/headers";

// WHEN UPDATING TO NEXT 15, SEE LUCIA COOKIES EXAMPLE
// NEED TO ADD AWAIT AND SWITCH FUNCTION RETURN TO PROMISE<void.

export function setSessionTokenCookie(token: string, expiresAt: Date): void {
  const cookieStore = cookies();
  cookieStore.set("session", token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    expires: expiresAt,
    maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 year
    path: "/",
  });
}

export function deleteSessionTokenCookie(): void {
  const cookieStore = cookies();
  cookieStore.set("session", "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 0,
    path: "/",
  });
}

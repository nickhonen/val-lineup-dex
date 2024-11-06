import type { User, Session } from "../db/schema";
import { users, sessions } from "../db/schema";
import { db } from "../db/index";
import { eq } from "drizzle-orm";
import {
  encodeBase32LowerCaseNoPadding,
  encodeHexLowerCase,
} from "@oslojs/encoding";
import { sha256 } from "@oslojs/crypto/sha2";
import { cache } from "react";
import { cookies } from "next/headers";

// copied from example github proj, add await here after migrating
// caching to use multiple times
export const getCurrentSession = cache(
  async (): Promise<SessionValidationResult> => {
    const token = cookies().get("session")?.value ?? null;
    if (token === null) {
      // could add like a getAuthOrRedirect and go to login screen/display some error.
      return { session: null, user: null };
    }
    const result = await validateSessionToken(token);
    return result;
  },
);

// basic structure from lucia-auth

const SESSION_REFRESH_INTERVAL_MS = 1000 * 60 * 60 * 24 * 15; // 15 days
const SESSION_MAX_DURATION_MS = SESSION_REFRESH_INTERVAL_MS * 2; // 30 days

export function generateRandomSessionToken(): string {
  const bytes = new Uint8Array(20);
  crypto.getRandomValues(bytes);
  const token = encodeBase32LowerCaseNoPadding(bytes);
  return token;
}

export async function createSession(
  token: string,
  userId: number,
): Promise<Session> {
  //
  const sessionId = encodeHexLowerCase(sha256(new TextEncoder().encode(token)));
  const session: Session = {
    id: sessionId,
    userId,
    expiresAt: new Date(Date.now() + SESSION_REFRESH_INTERVAL_MS),
  };
  await db.insert(sessions).values(session);
  return session;
}

export async function validateSessionToken(
  token: string,
): Promise<SessionValidationResult> {
  // convert session token to session id
  const sessionId = encodeHexLowerCase(sha256(new TextEncoder().encode(token)));
  // make call to db to see if session exists in db.
  const result = await db
    .select({ user: users, session: sessions })
    .from(sessions)
    .innerJoin(users, eq(sessions.userId, users.id))
    .where(eq(sessions.id, sessionId));

  // valiate result
  if (result.length < 1 || !result[0]) {
    return { session: null, user: null };
  }
  const { user, session } = result[0];
  // check if session is expired. If so, delete session.
  if (Date.now() >= session.expiresAt.getTime()) {
    await db.delete(sessions).where(eq(sessions.id, session.id));
    return { session: null, user: null };
  }
  // If session is less than 15 days old, extend it.
  if (Date.now() >= session.expiresAt.getTime() - SESSION_REFRESH_INTERVAL_MS) {
    // refresh with new 30 day session
    session.expiresAt = new Date(Date.now() + SESSION_MAX_DURATION_MS);
    await db
      .update(sessions)
      .set({
        expiresAt: session.expiresAt,
      })
      .where(eq(sessions.id, session.id));
  }
  // return validated session and user
  return { session, user };
}

export async function invalidateSession(sessionId: string): Promise<void> {
  await db.delete(sessions).where(eq(sessions.id, sessionId));
}

export type SessionValidationResult =
  | { session: Session; user: User }
  | { session: null; user: null };

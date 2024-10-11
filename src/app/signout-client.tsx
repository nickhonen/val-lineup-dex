"use client";
import { signOut } from "auth";

export default function SignOutClient() {
  return (
    <button
      onClick={() => signOut()}
      className="hover: rounded bg-blue-500 px-4 py-2 text-white"
    >
      Sign Out
    </button>
  );
}

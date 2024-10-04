"use client"
import { signOut } from "next-auth/react"
 
export default function SignOutClient() {
    return (
        <button 
          onClick={() => signOut()}
          className="hover: rounded bg-blue-500 bg-blue-700 px-4 py-2 text-white"
        >
          Sign Out
        </button>
      )
}
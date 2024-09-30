"use client"
import { signIn } from "next-auth/react"
 
export default function SignInClient() {
  return (
    <button 
      onClick={() => signIn()}
      className="hover: rounded bg-blue-500 bg-blue-700 px-4 py-2 text-white"
    >
      Sign In
    </button>
  )
}
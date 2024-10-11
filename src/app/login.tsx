import { signIn, signOut } from "auth";

export function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn();
      }}
    >
      <button
        type="submit"
        className="hover: rounded bg-blue-500 px-4 py-2 text-white"
      >
        Sign in
      </button>
    </form>
  );
}

export function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button
        type="submit"
        className="hover: rounded bg-blue-500 px-4 py-2 text-white"
      >
        Sign out
      </button>
    </form>
  );
}

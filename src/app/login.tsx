
import { signIn } from "auth";

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn();
      }}
    >
      <button
        type="submit"
        className="hover: rounded bg-blue-500 bg-blue-700 px-4 py-2 text-white"
      >
        Sign in
      </button>
    </form>
  );
}

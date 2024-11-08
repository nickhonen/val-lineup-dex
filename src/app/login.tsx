import { signIn, signOut } from "auth";
import { Button } from "~/shadcn/components/ui/button";

export function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn();
      }}
    >
      <Button type="submit" className="rounded">
        Login
      </Button>
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
      <Button type="submit" className="rounded">
        Sign out
      </Button>
    </form>
  );
}

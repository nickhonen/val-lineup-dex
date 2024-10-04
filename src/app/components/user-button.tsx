import { auth } from "auth";
import SignInClient  from "../signin-client";
import SignOutClient from "../signout-client";
// import { SignIn, SignOut } from "../login";

export default async function UserButton() {
  const session = await auth();

  if (session?.user) {
    return (
      <div className="flex items-center gap-2">
        <SignOutClient />
        <div className="text-muted-foreground text-xs font-normal">{session.user.email}</div>
      </div>
    );
  } else {
    return <SignInClient />;
  }
}
import { auth } from "auth";
import { SignIn, SignOut } from "../login";

export default async function UserButton() {
  const session = await auth();

  if (!session?.user) return <SignIn />;
  return (
    <div className="flex items-center gap-2">
      <SignOut />
      <span className="text-muted-foreground text-xs font-normal">
        {session.user.email}
      </span>
    </div>
  );
}

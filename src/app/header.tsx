import UserButton from "./components/user-button";
import { TopNav } from "./_components/topnav";

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <div className="mx-auto flex h-16 w-full max-w-3xl items-center justify-between px-4 sm:px-6">
        <TopNav />
        <UserButton />
      </div>
    </header>
  );
}

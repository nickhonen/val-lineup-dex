import SignIn from "../login"

export const TopNav = () => {
    return (
      <nav className="flex w-full items-center justify-between border-b p-4 text-xl 
      font-semibold">
        <div>Lineups</div>
        <SignIn />
      </nav>
    )
  }
import { UploadButton } from "~/utils/uploadthing";
import SignIn from "../login";
// import { auth } from "auth";

export const TopNav = async () => {

  // const session = await auth()
  
  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl 
    font-semibold">
      <div>Lineups</div>
      <SignIn />
      <UploadButton endpoint="imageUploader" />
    </nav>
  )
}
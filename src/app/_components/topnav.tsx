'use client';

import { UploadButton } from "~/utils/uploadthing";
import UserButton from "../components/user-button"
import { useRouter } from "next/navigation";


export const TopNav = () => {

  const router = useRouter();

  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl 
    font-semibold">
      <div>Lineups</div>
      <UserButton />
      <UploadButton 
        endpoint="imageUploader"
        onClientUploadComplete={() => {
          router.refresh();
        }}
      />
    </nav>
  )
}
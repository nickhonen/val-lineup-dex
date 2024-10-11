"use client";

import { UploadButton } from "~/utils/uploadthing";
import { useRouter } from "next/navigation";

export const TopNav = () => {
  const router = useRouter();

  return (
    <nav className="flex items-center gap-4">
      <div>Lineups</div>
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          console.log(res);
          router.refresh();
        }}
      />
    </nav>
  );
};

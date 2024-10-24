"use client";

import { UploadButton } from "~/utils/uploadthing";
import { SimpleUploadButton } from "./simple-upload-button";

export const TopNav = () => {
  return (
    <nav className="flex items-center gap-4">
      <div>Lineups</div>
      <SimpleUploadButton />
    </nav>
  );
};

import FullPageImageView from "~/app/blah/full-page-image";
import { Modal } from "./modal";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  return (
    <Modal>
      <FullPageImageView photoId={photoId} />
    </Modal>
  );
}

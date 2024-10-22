// import { Modal } from "./modal";
import { getImage } from "~/server/queries";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  // getting from url so need to convert to number
  const idToNumber = Number(photoId)
  if (Number.isNaN(idToNumber)) throw new Error("Invalid photoId")

  const image = await getImage(idToNumber)
  return <div>Photo {photoId}</div>;
}

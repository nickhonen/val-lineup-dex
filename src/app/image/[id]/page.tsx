import FullPageImageView from "~/app/components/full-page-image";

export default async function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  // getting from url so need to convert to number
  const idToNumber = Number(photoId);
  if (Number.isNaN(idToNumber)) throw new Error("Invalid photoId");

  return (
    <div className="h-full">
      <FullPageImageView photoId={idToNumber} />;
    </div>
  );
}

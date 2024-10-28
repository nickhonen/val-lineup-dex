import FullPageImageView from "~/app/components/full-page-image";

export default async function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  return (
    <div className="h-full">
      <FullPageImageView photoId={photoId} />;
    </div>
  );
}

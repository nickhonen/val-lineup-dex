import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { photoId: number }) {
  const image = await getImage(props.photoId);
  return (
    <div className="flex h-full w-full min-w-0 bg-red-500">
      <div className="flex-shrink">
        <img src={image.url} className="w-96 object-contain" alt={image.name} />
      </div>

      <div className="flex w-48 flex-shrink-0 flex-col">
        <div className="text-xl font-bold">{image.name}</div>
      </div>
    </div>
  );
}

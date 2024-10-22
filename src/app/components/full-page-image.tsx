import { getImage } from "~/server/queries";
import { auth } from "auth";

export default async function FullPageImageView(props: { photoId: number }) {
  const session = await auth();
  const image = await getImage(props.photoId);

  return (
    <div className="flex h-full w-full min-w-0">
      <div className="flex-shrink">
        <img
          src={image.url}
          className="flex-shrink object-contain"
          alt={image.name}
        />
      </div>

      <div className="border-1 flex w-48 flex-shrink-0 flex-col">
        <div className="border-b p-2 text-center text-xl font-bold">
          {image.name}
        </div>

        <div className="flex flex-col p-2">
          <span>Uploaded by:</span>
          <span>{session?.user.name}</span>
        </div>
      </div>
    </div>
  );
}

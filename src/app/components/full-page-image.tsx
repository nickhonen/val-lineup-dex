import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { photoId: number }) {
  const image = await getImage(props.photoId);
  return <img src={image.url} className="w-96" alt={image.name} />;
}

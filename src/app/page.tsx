import Link from "next/link";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

export default async function Images() {
  const images = await getMyImages();

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {images.map((image, index) => (
          <div key={index} className="flex w-48 flex-col gap-2">
            <img src={image.url} alt="text" />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}

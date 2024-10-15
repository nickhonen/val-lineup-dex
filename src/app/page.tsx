import Image from "next/image";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

export default async function Images() {
  const images = await getMyImages();

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {images.map((image, index) => (
          <div key={index} className="flex h-48 w-48 flex-col gap-2">
            <Image
              src={image.url}
              alt={image.name}
              style={{ objectFit: "contain" }}
              width={480}
              height={480}
            />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}

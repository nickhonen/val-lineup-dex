import Image from "next/image";
import Link from "next/link";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

export default async function Images() {
  const images = await getMyImages();

  return (
    <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {images.map((image) => (
        <div key={image.id} className="aspect-w-1 aspect-h-1">
          <Link href={`/image/${image.id}`}>
            <Image
              src={image.url}
              alt={image.name}
              style={{ objectFit: "cover" }}
              width={480}
              height={480}
            />
          </Link>
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
}

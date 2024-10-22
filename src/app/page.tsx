import Image from "next/image";
import Link from "next/link";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

export default async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap p-4">
      {images.map((image) => (
        <div key={image.id} className="flex h-48 w-48 flex-col gap-2">
          <Link href={`/image/${image.id}`}>
            <Image
              src={image.url}
              alt={image.name}
              style={{ objectFit: "contain" }}
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

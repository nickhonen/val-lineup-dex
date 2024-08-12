import Link from "next/link";
import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/e1890d0e-aa07-4fed-a8b3-eff65cca462b-ft6l7l.png",
  "https://utfs.io/f/0f66ec3b-f788-4931-ba0b-1bf09f30af86-qcuqdj.jpeg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id} className="w-48">
            {post.name}
          </div>
        ))}
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="text"/>
          </div>
        ))}
      </div>
    </main>
  );
}

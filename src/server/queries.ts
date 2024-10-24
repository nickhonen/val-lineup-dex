import "server-only";
import { db } from "./db";
import { auth } from "auth";

// read the next.js blog post about data access layer
// apparently I dont need to get user from db, but maybe I should make
// data access layer and DTO? See next js authorization docs for example

export async function getMyImages() {
  const session = await auth();

  if (!session?.user) return [];
  if (!session.user.email) throw new Error("Unauthorized");

  const images = await db.query.images.findMany({
    where: (images, { eq }) => eq(images.email, session.user.email),
    // I think this orders images by newest images first? Right?
    orderBy: (images, { desc }) => desc(images.id),
  });
  return images;
}

export async function getImage(id: number) {
  const session = await auth();

  if (!session?.user) throw new Error("Unauthorized");

  const image = await db.query.images.findFirst({
    where: (images, { eq }) => eq(images.id, id),
  });

  if (!image) throw new Error("Image not found");

  return image;
}

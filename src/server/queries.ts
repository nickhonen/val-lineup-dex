import "server-only";
import { db } from "./db";
import { auth } from "auth";
import { images, authImages } from "./db/schema";
import { and, eq } from "drizzle-orm";
import { cache } from "react";

// read the next.js blog post about data access layer
// apparently I dont need to get user from db, but maybe I should make
// data access layer and DTO? See next js authorization docs for example

export async function getMyImages() {
  const session = await auth();

  if (session.user) return [];
  if (!session.user.id) throw new Error("Unauthorized");

  const images = await db.query.authImages.findMany({
    where: (table, { eq }) => eq(table.userId, session.user.id),
    // I think this orders images by newest images first? Right?
    orderBy: (table, { desc }) => desc(table.id),
  });
  return images;
}

export const getImage = cache(async (id: number) => {
  const session = await auth();

  if (!session?.user) throw new Error("Unauthorized");

  const image = await db.query.images.findFirst({
    where: (images, { eq }) => eq(images.id, id),
  });

  if (!image) throw new Error("Image not found");

  return image;
});

export async function deleteImage(id: number) {
  const session = await auth();

  if (!session?.user) throw new Error("Unauthorized");

  await db
    .delete(images)
    .where(and(eq(images.email, session.user.email), eq(images.id, id)));
}

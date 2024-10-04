import "server-only";
import { db } from "./db";
import { auth } from "auth";

// read the next.js blog post about data access layer
// apparently I dont need to get user from db, but maybe I should make
// data access layer and DTO? See next js authorization docs for example

export async function getMyImages() {

    const session = await auth();

    if (!session?.user.id) throw new Error("Unauthorized");

    const images = await db.query.images.findMany({
        where: (images, { eq }) => eq(images.userId, session.user.id),
        // I think this orders images by newest images first? Right?
        orderBy: (images, { desc }) => desc(images.id),
    });
    return images;
}
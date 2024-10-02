// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  index,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
  text,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `val-lineup-dex_${name}`);

export const images = createTable(
  "images_table",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }).notNull(),
    url: varchar("url", { length: 1024 }).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    userId: varchar("userId", { length: 256 }).notNull(),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.name),
  })
);

// export const users = createTable(
//   "users_table",
//   {
//     id: serial("id").primaryKey(),
//     name: varchar("name", { length: 256 }),
//     email: text("email").notNull().unique(),
//   }
// );



/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  index,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
  pgPolicy,
} from "drizzle-orm/pg-core";
import { anonRole, authenticatedRole } from "drizzle-orm/supabase";

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
    email: varchar("email", { length: 256 }).notNull(),
  },
  (example) => [
    index("name_idx").on(example.name),
    pgPolicy("Enable select for authneticated users", {
      as: "permissive",
      to: authenticatedRole,
      for: "select",
      withCheck: sql`true`,
    }),
  ],
);

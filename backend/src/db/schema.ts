import type { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { boolean, date, integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import type {AnyPgColumn} from "drizzle-orm/pg-core"

export const usersTable = pgTable("users", {
	id: serial().primaryKey(),
	username: text().notNull().unique(),
	displayname: text().notNull(),
	avatar: text(),
	createdAt: date().defaultNow()
})

export const postsTable = pgTable("posts", {
	id: serial().primaryKey(),
	title:text().notNull(),
	media: text(),
	description:text(),
	postedAt:timestamp().defaultNow().notNull(),
	postedBy: integer().references(()=>usersTable.id),
})

export const repliesTable = pgTable("replies",{
  id: serial().primaryKey(),
  postedBy:serial().references(()=>usersTable.id),
  postedUnder: integer().references(()=>postsTable.id ),
  isSubReplyFor:integer().references(():AnyPgColumn=>repliesTable.id),  
  isSubReply:boolean().default(false),
  reply: text().notNull(),
  likes: integer().default(0),
  dislikes:integer().default(0)
})

export const userActions = pgTable("actions",{
  
})




export type User = InferSelectModel<typeof usersTable>
export type Post = InferSelectModel<typeof postsTable>
export type NewUser = InferInsertModel<typeof postsTable>
export type NewPost = InferInsertModel<typeof postsTable>
export type Reply = InferSelectModel<typeof repliesTable>
export type NewReply = typeof repliesTable.$inferInsert;

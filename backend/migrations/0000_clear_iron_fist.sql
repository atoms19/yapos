CREATE TABLE "posts" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"media" text,
	"description" text,
	"postedAt" timestamp DEFAULT now() NOT NULL,
	"postedBy" integer
);
--> statement-breakpoint
CREATE TABLE "replies" (
	"id" serial PRIMARY KEY NOT NULL,
	"postedBy" serial NOT NULL,
	"postedUnder" integer,
	"isSubReplyFor" integer,
	"isSubReply" boolean DEFAULT false,
	"reply" text NOT NULL,
	"likes" integer DEFAULT 0,
	"dislikes" integer DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE "actions" (

);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" text NOT NULL,
	"displayname" text NOT NULL,
	"avatar" text,
	"createdAt" date DEFAULT now(),
	CONSTRAINT "users_username_unique" UNIQUE("username")
);
--> statement-breakpoint
ALTER TABLE "posts" ADD CONSTRAINT "posts_postedBy_users_id_fk" FOREIGN KEY ("postedBy") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "replies" ADD CONSTRAINT "replies_postedBy_users_id_fk" FOREIGN KEY ("postedBy") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "replies" ADD CONSTRAINT "replies_postedUnder_posts_id_fk" FOREIGN KEY ("postedUnder") REFERENCES "public"."posts"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "replies" ADD CONSTRAINT "replies_isSubReplyFor_replies_id_fk" FOREIGN KEY ("isSubReplyFor") REFERENCES "public"."replies"("id") ON DELETE no action ON UPDATE no action;
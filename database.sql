CREATE TABLE "task list" (
"id" serial primary key,
"task" varchar(120),
"completed" boolean default false
);

INSERT INTO "task list" ("task")
VALUES ('Cut grass'),
	   ('Purchase modem'),
		('Create file directory');	
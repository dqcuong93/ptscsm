CREATE TABLE "user_session" (
  "sid" varchar NOT NULL COLLATE "default",
	"sess" json NOT NULL,
	"expire" timestamp(6) NOT NULL
)
ALTER TABLE "user_session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;

#######################################################################################################################
CREATE TABLE stockholder
(
    id bigserial NOT NULL,
    stocknumber text,
    personalpassportid text,
    name text ,
    CONSTRAINT stockholder_pkey PRIMARY KEY (id)
)

#######################################################################################################################
CREATE TABLE user_
(
    id bigserial NOT NULL,
    email text,
    password text,
    name text,
    CONSTRAINT user_pkey PRIMARY KEY (id)
)
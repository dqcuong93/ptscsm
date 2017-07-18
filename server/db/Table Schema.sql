CREATE TABLE user_session
(
    sid character varying NOT NULL,
    sess json NOT NULL,
    expire timestamp(6) without time zone NOT NULL,
    CONSTRAINT session_pkey PRIMARY KEY (sid)
);

CREATE TABLE public.stockholder
(
    id bigserial NOT NULL,
    stocknumber text,
    personalpassportid text,
    name text,
    CONSTRAINT stockholder_pkey PRIMARY KEY (id)
);

CREATE TABLE user_
(
    id bigserial NOT NULL,
    email text,
    password text,
    name text,
    CONSTRAINT user_pkey PRIMARY KEY (id)
);

ALTER TABLE user_ OWNER to postgres;
ALTER TABLE stockholder OWNER to postgres;
ALTER TABLE user_session OWNER to postgres;
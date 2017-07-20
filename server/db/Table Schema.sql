DROP TABLE account_session;
DROP TABLE account;
DROP TABLE stockholder;

CREATE TABLE account_session
(
    sid character varying NOT NULL,
    sess json NOT NULL,
    expire timestamp(6) without time zone NOT NULL,
    CONSTRAINT session_pkey PRIMARY KEY (sid)
);

CREATE TABLE stockholder
(
    id bigserial NOT NULL,
    stocknumber text,
    personalpassportid text,
    name text,
    CONSTRAINT stockholder_pkey PRIMARY KEY (id)
);

CREATE TABLE account
(
    id bigserial NOT NULL,
    email text,
    password text,
    name text,
    CONSTRAINT user_pkey PRIMARY KEY (id)
);

ALTER TABLE account OWNER to postgres;
ALTER TABLE stockholder OWNER to postgres;
ALTER TABLE account_session OWNER to postgres;
DROP TABLE IF EXISTS 
	players, fireteams, players_fireteams;

CREATE TABLE fireteams (
	id serial,
	title VARCHAR (255) NOT NULL,
	CONSTRAINT fireteams_pkey PRIMARY KEY (id),
	CONSTRAINT fireteams_title_ukey UNIQUE (title)
);

CREATE TABLE players (
	id serial,
	mail VARCHAR(255) NOT NULL,
	"password" CHAR(60) NOT NULL,
	pseudo VARCHAR(50) NOT NULL,
	CONSTRAINT players_pkey PRIMARY KEY (id),
	CONSTRAINT players_mail_unique UNIQUE (mail)
);

CREATE TABLE players_fireteams (
	id serial,
	player_id int NOT NULL,
	fireteam_id int NOT NULL,
	start_time time NOT NULL ,
	end_time time NOT NULL ,
	CONSTRAINT players_fireteams_pkey PRIMARY KEY (id),
	CONSTRAINT players_fireteams_player_fireteam_ukey UNIQUE (player_id, fireteam_id),
	CONSTRAINT players_fireteams_player_fkey
		FOREIGN KEY (player_id)
		REFERENCES players (id),
	CONSTRAINT players_fireteams_fireteam_fkey
		FOREIGN KEY (fireteam_id)
		REFERENCES fireteams (id)
);

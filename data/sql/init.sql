DROP TABLE IF EXISTS 
	players, fireteams, clans, activities, fireteams_clans, players_activities, players_fireteams, fireteams_activities;

CREATE TABLE fireteams (
	id serial,
	title varchar (255) NOT NULL,
	CONSTRAINT fireteams_pkey PRIMARY KEY (id),
	CONSTRAINT fireteams_title_ukey UNIQUE (title)
);

CREATE TABLE activities (
	id serial, 
	name varchar(255) NOT NULL,
	CONSTRAINT activities_pkey PRIMARY KEY (id),
	CONSTRAINT activities_name_ukey UNIQUE (name)
);

CREATE TABLE clans (
	id serial,
	name varchar(255) NOT NULL,
	activity_id int NOT NULL,
	CONSTRAINT clans_pkey PRIMARY KEY (id),
	CONSTRAINT clans_name_ukey UNIQUE (name),
	CONSTRAINT clans_activities_fkey
		FOREIGN KEY (activity_id)
		REFERENCES activities (id)
);

CREATE TABLE players (
	id serial,
	mail varchar(255) NOT NULL,
	"password" char(60) NOT NULL,
	pseudo varchar(50) NOT NULL,
	clan_id int NOT NULL,
	CONSTRAINT players_pkey PRIMARY KEY (id),
	CONSTRAINT players_mail_ukey UNIQUE (mail),
	CONSTRAINT players_clans_fkey
		FOREIGN KEY (clan_id)
		REFERENCES clans (id)
);


CREATE TABLE fireteams_clans(
	id serial,
	fireteam_id int NOT NULL,
	clan_id int NOT NULL,
	CONSTRAINT fireteams_clans_pkey PRIMARY KEY (id),
	CONSTRAINT fireteams_clans_clan_fireteam_ukey UNIQUE (clan_id, fireteam_id),
	CONSTRAINT fireteams_clans_clan_fkey
			FOREIGN KEY (clan_id)
			REFERENCES clans (id),
	CONSTRAINT fireteams_clans_fireteam_fkey
			FOREIGN KEY (fireteam_id)
			REFERENCES fireteams (id)
);

CREATE TABLE players_activities (
	id serial,
	player_id int NOT NULL,
	activity_id int NOT NULL,
	start_time time NOT NULL ,
	end_time time NOT NULL ,
	CONSTRAINT players_activities_pkey PRIMARY KEY (id),
	CONSTRAINT players_activities_player_activity_ukey UNIQUE (player_id, activity_id),
	CONSTRAINT players_activities_player_fkey
		FOREIGN KEY (player_id)
		REFERENCES players (id),
	CONSTRAINT players_activities_activity_fkey
		FOREIGN KEY (activity_id)
		REFERENCES activities (id)
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

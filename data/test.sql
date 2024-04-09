-- Delete existing data from tables if needed
DELETE FROM players;
DELETE FROM clans;
DELETE FROM fireteams;

-- Insert test data into the 'players' table with realistic email addresses and hashed passwords
INSERT INTO players (mail, password, pseudo, clan_id)
VALUES 
  ('player1@example.com', '$2a$12$jZZ8yNRAdSd7ISeySRHUMuysFup0q.nsvt2rG94tV/NgMD9DP8nuK', 'Player1', 1),
  ('player2@example.com', '$2a$12$z4mv1XrcsfCNktuxJop9XecB9weyUqKQgCnPN7dJfX9O1TgskGgK2', 'Player2', 2),
  ('player3@example.com', '$2a$12$6mJzFABw10.8zZ26ZiydMeiMJ0/Jsf5bBkeb9g3bAhtJNOSLErR9K', 'Player3', 1),
  ('player4@example.com', '$2a$12$muFh1b.VQbG9nN9Y4LVQWuX0MZHjFSC7QmtoHXlZJzjF/q3CO0DXm', 'Player4', 2);


INSERT INTO clans (name, activity_id)
VALUES 
  ('Clan1', 1),
  ('Clan2', 2);


INSERT INTO fireteams (title)
VALUES 
  ('Fireteam1'),
  ('Fireteam2'),
  ('Fireteam3');

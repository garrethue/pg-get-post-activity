CREATE DATABASE bookstoredb;

CREATE TABLE books (
	id SERIAL PRIMARY KEY,
	title VARCHAR(250) NOT NULL DEFAULT 'The man',
	author VARCHAR(100) NOT NULL DEFAULT 'Garret Larson', 
	published DATE NOT NULL DEFAULT '7/21/1992',
	read boolean	
);
INSERT INTO books (title, author, published) 
VALUES ('The Hearts Invisible Furies', 'John Boyne', '8/22/2017');
INSERT INTO books (title, author, published) 
VALUES ('The Man', 'Garret Larson', '07/21/1992');
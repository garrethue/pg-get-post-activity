CREATE DATABASE bookstoredb;

CREATE TABLE books (
	id SERIAL PRIMARY KEY,
	title VARCHAR(250) NOT NULL DEFAULT 'Adele',
	author VARCHAR(100) NOT NULL,
	published DATE	
);
INSERT INTO books (title, author, published) 
VALUES ('The Hearts Invisible Furies', 'John Boyne', '8/22/2017');
INSERT INTO books (title, author, published) 
VALUES ('The Man', 'Garret Larson', '07/21/1992');
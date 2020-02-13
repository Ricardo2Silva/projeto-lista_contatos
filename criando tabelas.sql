USE contatos;

CREATE TABLE tipo_contato(
id int (11) AUTO_INCREMENT NOT NULL PRIMARY KEY,
descricao varchar(100) not null
);

CREATE TABLE contato (

id INT(11)	AUTO_INCREMENT NOT NULL PRIMARY KEY,
valor VARCHAR(100) NOT NULL,
nome  VARCHAR(100) NOT NULL,
id_tipo_contato int not null
	
);


-- CONSTRAINTS

ALTER TABLE  contato ADD FOREIGN KEY (id_tipo_contato) REFERENCES tipo_contato(id);
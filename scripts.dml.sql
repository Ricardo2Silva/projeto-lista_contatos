INSERT INTO contato (valor,nome,id_tipo_contato) VALUES ('(11)2638-4398','RICARDO JONAS DA SILVA ',4);
insert into tipo_contato(descricao) values ('telefone comercial');
select * from contato;
SELECT * FROM tipo_contato;

insert into tipo_contato(descricao) values ('celular');

select  * from contato c inner join tipo_contato tc on(c.id_tipo_contato =tc.id) where descricao = 'telefone comercial';


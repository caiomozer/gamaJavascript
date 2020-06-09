CREATE TABLE cidades (
    id int not null,
    nome varchar(255),
    estado varchar(255),
    PRIMARY KEY (id)
    );
    
CREATE TABLE Pessoas (
id int not null,
nome varchar(255),
cidade int,
primary key (id),
foreign key (cidade) references cidades(id)
);

insert into cidades (id, nome, estado)
values (1, 'Santos', 'São Paulo');

insert into cidades
values (2, 'São Paulo', 'São Paulo');

INSERT INTO pessoas
VALUES (1, 'JC', 1);

INSERT INTO pessoas
VALUES (2, 'Luciana', 2);

INSERT INTO pessoas
VALUES (3, 'Paulo', 2);

select * from cidades;
select * from pessoas;

select p.id, p.nome, c.nome AS cidade, c.estado from pessoas p
inner join cidades c on p.cidade = c.id;









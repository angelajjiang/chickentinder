DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS groups;

CREATE TABLE users (
    UserName varchar(255), 
    GroupPassword varchar(255), 
    LocationPreference varchar(255)
)

CREATE TABLE groups (
    GroupPassword varchar(255), 
    [Sliver Pizzeria] int,
    [Berkeley Thai House] int,
    [Italian Homemade] int,
    Manpuku int,
    Sweetgreen int,
    Toss int,
    Mezzo int,
    Ippudo int,
    [Berkeley Scial Club] int,
    Cheeseboard int,
    [Thai Basil] int,
    [Gypse's] int,
    [La Note] int,
    Agrodolce int,
    [Artichoke's] int, 
    [La Val's] int, 
    [Celia's Mexican Restaurant] int,
    [Tacos Sinaloa] int,
    PRIMARY KEY (GroupPassword), 
);
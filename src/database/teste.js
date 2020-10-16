const Database = require("./db");

Database.then(function (db) {
  //inserir dados na tabela
  db.run(`
    INSERT INTO orfanatos (
lat, 
lng, 
name,
about,
 wpp,
 images,
 instructions,
 hours,
 open_weekends)
 VALUES (
"-8.7716113",
"-63.8972206",
"Casa Familia Rosetta",
"Presta assistência a crianças 6 a 18 anos - Feminino 6 a 18 anos - Masculino, que se encontre em situação de risco e/ou vulnerabilidade social.",

"https://images.unsplash.com/photo-1599988288485-534984f5cd21?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

"Venha como se sentir a vontade e traga muito amor e paciência para dar.",
"Horario de visitas das 8h as 18h",
 "1"
)
`);
  //conultar dados
});

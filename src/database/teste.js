const Database = require("./db")
const saveOrfanatos = require("./saveOrfanatos");


Database.then(async db => {
  //inserir dados na tabela

 /*await saveOrfanatos(db, {
    lat: "-8.7685893",
    lng: "-63.9007017",
    name: "Casa das meninas",
    about: "Presta assistência a crianças 6 a 18 anos - Feminino",
    wpp: "6933265541",
    images: [
      "https://images.unsplash.com/photo-1599988288485-534984f5cd21?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
     
    ].toString(),
    instructions: "Venha como se sentir a vontade e traga muito amor.",
    hours: "Horario de visitas das 7h as 18h",
    open_weekends: "0"

  })*/

  //conSultar dados


 const orfanatos = await db.all('delete from orfanato where id between 9 and 10')
  //const orfanatos = await db.all('select * from orfanato')
  console.log(orfanatos);

  
});

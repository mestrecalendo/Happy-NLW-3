//importar dependencia
const express = require("express");
const path = require("path");
const pages = require("./pages.js");



//iniciando o express
const server = express();

server
  //utilizando arquivos estaticos
    .use(express.static("public"))
  //utilizar body do req
  .use(express.urlencoded({extended: true}))
  

  //conf template engine
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "hbs")

  //criar rotas
  .get("/cadastrar_orfanato", pages.cadastrarOrfanato)
  .get("/localizar_orfanatos", pages.localizarOrfanatos)
  .get("/orfanatos", pages.orfanatos)
  .get("/", pages.index)
  .post("/save-orfanatos", pages.saveOrfanatos);

//ligar o servidor
server.listen(5500);

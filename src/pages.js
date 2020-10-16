const orfanato = require("./database/fakedata.js");

module.exports = {
  index(req, res) {
    return res.render("index");
  },

  orfanatos(req, res) {
    return res.render("orfanatos", );
  },

  localizarOrfanatos(req, res) {
    return res.render("localizar_orfanatos",{ orfanato });
  },

  cadastrarOrfanato(req, res) {
    return res.render("cadastrar_orfanato");
  },
};

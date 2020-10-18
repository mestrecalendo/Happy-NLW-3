const Database = require("./database/db");
const saveOrfanatos = require("./database/saveOrfanatos");

module.exports = {
  index(req, res) {
    return res.render("index");
  },

  async orfanatos(req, res) {
    const id = req.query.id;
    try {
      const db = await Database;
      const results = await db.all(`select * from orfanato where id="${id}"`);
      const orfanato = results[0];

      orfanato.images = orfanato.images.split(",");
      orfanato.firstImage = orfanato.images[0];

      if (orfanato.open_weekends == "0") {
        orfanato.open_weekends = false;
      } else {
        orfanato.open_weekends = true;
      }

      return res.render("orfanatos", { orfanato });
    } catch (error) {
      console.log(error);
      return res.send("Erro no Banco de dados");
    }
  },

  async localizarOrfanatos(req, res) {
    try {
      const db = await Database;
      const orfanato = await db.all("select * from orfanato");
      return res.render("localizar_orfanatos", { orfanato });
    } catch {
      console.log(error);
      return res.send("Erro no Banco de dados1");
    }
  },

  cadastrarOrfanato(req, res) {
    return res.render("cadastrar_orfanato");
  },

  async saveOrfanatos(req, res) {
    const fields = req.body;

    //validar se todos os campos estão preenchidos
    if (Object.values(fields).includes("") == true) {
      return res.send("Todos os campos devem ser preenchidos")
    }
    try {
      //salvar um orfanato
      const db = await Database
      await saveOrfanatos(db, {
        lat: fields.lat,
        lng: fields.lng,
        name: fields.name,
        about: fields.about,
        wpp: fields.wpp,
        images: fields.images.toString(),
        instructions: fields.instructions,
        hours: fields.hours,
        open_weekends: fields.open_weekends
      }
);

      return res.redirect("/localizar_orfanatos")
    } catch (error) {
      console.log(error);
      return res.send("Erro no banco de dados!");
    }
  },
};

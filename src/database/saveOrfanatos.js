function saveOrfanatos(db, orfanato) {
  return db.run(`
    INSERT INTO orfanato (
        lat,
        lng,
        name,
        about,
        wpp,
        images,
        instructions,
        hours,
        open_weekends)
        VALUES
        (
        "${orfanato.lat}",
        "${orfanato.lng}",
        "${orfanato.name}",
        "${orfanato.about}",
        "${orfanato.wpp}",
        "${orfanato.images}",
        "${orfanato.instructions}",
        "${orfanato.hours}",
        "${orfanato.open_weekends}");

`);
}

module.exports = saveOrfanatos;

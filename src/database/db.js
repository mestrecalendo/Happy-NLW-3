const Database = require("sqlite-async");


function execute(db) {
    
  return db.exec(`
    CREATE TABLE IF NOT EXISTS orfanato (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        lat TEXT,
        lng TEXT,
        name TEXT,
        about TEXT,
        wpp TEXT,
        images TEXT,
        instructions TEXT,
        hours TEXT,
        open_weekends TEXT    
       );`
    )
}

module.exports = Database.open(__dirname + "/database.sqlite").then(execute)
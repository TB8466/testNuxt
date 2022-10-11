/* import sqlite3 from "sqlite3"

let db = new sqlite3.Database('blogs.db');

db.serialize(() => {
    db.run('DROP TABLE IF EXISTS blogs')
    db.run('CREATE TABLE blogs(name text, preview text, author text, img text, date date, url text)');
})

db.close(); */
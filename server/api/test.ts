import sqlite3 from "sqlite3"

export default defineEventHandler((event) => {
let db = new sqlite3.Database('blogs.db');

const date = new Date();

const today = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();

const test = year+"-"+month+"-"+today

//db.run('CREATE TABLE blogs(name text, url text, img text, author text, date date, preview text)');

db.run(`INSERT INTO blogs(name,url,img,author,date,preview) VALUES(?,?,?,?,?,?)`, ['Fordele og ulemper med something','/blogs/2022/1_Jan_Fordele-Og-Ulemper-Varmepumpe-Med-Solceller','/assets/img/LandingPage1.webp','Rasmus',test,'LOREM IPSUM DKGJSLDKGJSÆLDGJÆLDKGJÆLKDSJ LDKSGJ DLSGKJ DSLKGJ DSLGÆJ SDLKG JDSLGJ SDLÆGJ SLÆDJG LSÆDJG LSDKJG ÆSLDJGDLS ÆJLGK LKJ'], function(err) {
    if (err) {
      return console.log(err.message);
    }
    // get the last insert id
    console.log(`A row has been inserted with rowid ${this.lastID}`);
  });

db.close();
    return {
      api: 'works'
    }
  })
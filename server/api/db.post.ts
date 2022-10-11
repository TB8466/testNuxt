import sqlite3 from "sqlite3"
import { open } from "sqlite"

const date = new Date();
const today = date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate();

export default defineEventHandler(async (event) => {
    
    const body = await useBody(event)

    return {msg : await open({
        filename: 'blogs.db',
        driver: sqlite3.Database
    }).then(async(db) => {
        const result = await db.run('INSERT INTO blogs(name, preview, author, img, date, url) VALUES(?,?,?,?,?,?)',
        [body.name || 'N/A', body.preview || 'N/A', body.author || 'N/A', '/assets/img/blogs/' + body.img || 'N/A', today, body.url || 'N/A'],
        (err) => {
            if(err){
                throw err
            }
            
        })
        return result
    })}

  })
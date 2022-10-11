import sqlite3 from "sqlite3"
import { open } from "sqlite"

export default async function getAll() {
    return await open({
        filename: 'blogs.db',
        driver: sqlite3.Database
    }).then(async(db) => {
        const result = await db.all('SELECT * FROM blogs')
        return result
    })
}
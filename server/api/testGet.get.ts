import sqlite3 from "sqlite3"
import { open } from "sqlite"

export default async function test() {
    return {blogs : await open({
        filename: './blogs.db',
        driver: sqlite3.Database
    }).then(async(db) => {
        const result = await db.all('SELECT * FROM blogs')
        console.log(result);

        return result
    })}
}
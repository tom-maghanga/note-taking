import fs from "node:fs/promises"


const DB_PATH = new URL('../db.json', import.meta.url).pathname.substring(1);

export const getDB = async () =>{
 
    try {
        const db = await fs.readFile(DB_PATH, 'utf-8');
        // console.log(2);
        return JSON.parse(db);
      } catch (error) {
        console.error('Error reading database:', error);
        throw error; // Propagate the error to the caller
      }
}

export const saveDB = async(db) =>{
    await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2))
    return db
}

export const insertDB = async (note) =>{
    const db = await getDB();
    db.notes.push(note);
    await saveDB(db);
    return note
}
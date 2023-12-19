import { insertDB, getDB, saveDB } from "./db";

export const newNote  = async (note) =>{
    const newNote = {
        tags,
        id : Date.now(),
        content : note,
    }

    await insertDB(note);
    return newNote;
}

export const getAllNotes = async () =>{
    const  {notes} = getDB();
    return notes;
}
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

export const findNotes = async (filter) =>{
    const {notes} = getDB();
    return notes.filter(note => note.content.toLowerCase().includes(filter.toLowerCase()));
}

export const removeNote = async (id) =>{
    const {notes} = await getDB();
    const match = notes.find(note => note.id == id);

    if(match){
        const newNotes = notes.filter(note => note.id !== id);
        await saveDB({notes: newNotes});
        return id
    }
}

export const removeNotes = async () =>{
    await saveDB({notes: []})
}
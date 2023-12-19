import { insertDB, getDB, saveDB } from "./db.js";

export const newNote  = async (note, tags) =>{
    const newNote = {
        tags,
        id : Date.now(),
        content : note,
    }

    await insertDB(newNote);
    return newNote;
}

export const getAllNotes = async () =>{
    try {
        const { notes } = await getDB(); // Assuming getDB is an asynchronous function
        return notes;
      } catch (error) {
        console.error('Error fetching notes:', error);
        throw error; // Propagate the error to the caller
      }
}

export const findNotes = async (filter) =>{
    // console.log(filter);
    const {notes} = await getDB();
    // console.log(notes);
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
import { NoteForm, TNote } from "./types"

export const createNote = async (note: NoteForm) => {
    const apiURL = 'http://127.0.0.1:8090/api/collections/notes/records'

    try {
        const resp = await fetch(apiURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: note.title,
                content: note.content
            })
        })

        const data = await resp.json()
        
        return data

    } catch (error: any) {
        throw new Error('Note not created')
    }
}

export const getAllNotes = async (): Promise<TNote[] | string> => {

    try {
        const apiURL = 'http://127.0.0.1:8090/api/collections/notes/records'
        const resp = await fetch(apiURL, {cache: 'no-store'})
        .then(data => data.json())
        .then(error => error)
        
        if(resp.code === 404) return 'There was an error'
        
        return resp.items
    } catch (error) {
        throw new Error('Error getting all notes')
    }
}

export const deleteNote = async (id: string) => {
    try {
        const apiURL = `http://127.0.0.1:8090/api/collections/notes/records/${id}`
        const resp = await fetch(apiURL, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        })
        
        return resp
    } catch (error) {
        throw new Error('Error deleting note')
    }
}
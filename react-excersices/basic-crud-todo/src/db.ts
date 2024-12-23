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

export const getAllNotes = async (): Promise<TNote[]> => {

    try {
        const apiURL = 'http://127.0.0.1:8090/api/collections/notes/records'
        const resp = await fetch(apiURL, {cache: 'no-store'})
        .then(data => data.json())
        .then(error => error)
        
        if(resp.code === 404) throw new Error('Error getting all notes')
        
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

export const getNote = async (id: string): Promise<TNote> => {
    try {
        const url = `http://127.0.0.1:8090/api/collections/notes/records/${id}`

        const resp = await fetch(url)
                                .then(data => data.json())

        return resp
    } catch (error) {
        throw new Error('Error getting note by ID')
    }
}

interface EditData {
    id: string
    title: string
    content: string
}
export const editNote = async ({id, title, content}: EditData): Promise<TNote> => {
    try {
        const url = `http://127.0.0.1:8090/api/collections/notes/records/${id}`
        const resp = await fetch(url, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title,
                content 
            })
        })

        const data = resp.json()

        return data
        
    } catch (error) {
        throw new Error('Error editing note')
    }
}
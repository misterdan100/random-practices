import { NoteForm, TNote } from "./types"

export const createNote = async (note: NoteForm) => {
    const apiURL = 'http://127.0.0.1:8090/api/collections/notes/records'

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

    return resp
}

export const getAllNotes = async (): Promise<TNote[] | string> => {

    const apiURL = 'http://127.0.0.1:8090/api/collecns/notes/records'
    const resp = await fetch(apiURL)
                        .then(data => data.json())
                        .then(error => error)

    if(resp.code === 404) return 'There was an error'

    return resp.items
}
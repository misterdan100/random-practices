export type TNote = {
    id: string
    title: string
    content: string
    created: string
}

export type NoteForm = Pick<TNote, 'title' | 'content'>
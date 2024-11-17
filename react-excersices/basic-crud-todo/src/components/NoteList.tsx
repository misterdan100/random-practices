import { useEffect, useState } from "react"
import { getAllNotes } from "../db"
import { TNote } from "../types"
import { NotePreview } from "./NotePreview"

export const NoteList = () => {
    const [notes, setNotes] = useState([] as TNote[])

    useEffect(() => {
        const notesFromDB = async () => {
            const notesdb = await getAllNotes()
            
            setNotes(notesdb)
        }

        notesFromDB()
    }, [])

  return (
    <div className="my-4 bg-gray-100 rounded-xl max-w-[700px]">
        {notes.length ? (
            <h3 className="font-bold text-gray-700">Notes list:</h3>
        ) : (
            <h3 className="font-bold text-gray-700">There are not notes to show.</h3>
        )}

        <div className="flex flex-col gap-2">

            {notes.length && (
                notes.map(note => (
                    <NotePreview 
                    key={note.id}
                    note={note}
                    />
                ))
            )}
        </div>
    </div>
  )
}

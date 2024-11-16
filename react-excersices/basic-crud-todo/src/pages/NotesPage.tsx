import { useEffect, useState } from "react";
import CreateFormNote from "../components/CreateFormNote";
import NoteCard from "../components/NoteCard";
import { TNote } from "../types";
import { deleteNote, getAllNotes } from "../db";
import { toast } from "react-toastify";

export default function NotesPage() {
  const [notes, setNotes] = useState<TNote[]>([])

  useEffect(() => {
    const notes = async () => {
      const notesFromDB = await getAllNotes()
      if(typeof(notesFromDB) === 'string') {
        toast.error(notesFromDB)
        return
      }

      setNotes(notesFromDB)
    }

    notes()
  }, [])

  const handleDelete = async (id: string) => {
    await deleteNote(id)

    const updatedNotes = notes.filter( note => note.id !== id)
    setNotes(updatedNotes)
    toast.success('Note deleted')
  }

  return (
    <div
        className="flex flex-wrap gap-4 px-4"
    >
      <CreateFormNote 
        setNotes={setNotes}
      />

      {notes.length === 0 ? (<p>There are not notes to show.</p>) : (
        notes.map( note => (
          <NoteCard 
            key={note.id}
            note={note}
            handleDelete={handleDelete}
          />
        ))
      )}
    </div>
  )
}
'use client'

import { TNote } from "@/interfaces";
import Note from "./Note";
import DeleteModal from '../../components/DeleteModal'
import { useState } from "react";
import { deleteNote } from "@/db";
import { useRouter } from "next/navigation";


export default function NoteSection({notes}: {notes: TNote[]}) {
    const [showModal, setShowModal] = useState(false)
    const [activeNote, setActiveNote] = useState<TNote>({} as TNote)

    const router = useRouter();

    const handleDelete = async (id: string) => {
      await deleteNote(id);
      router.refresh();
    };

  return (
    <div>
        {notes?.map( note => (
        <Note 
          key={note.id}
          note={note}
          setShowModal={setShowModal}
          setActiveNote={setActiveNote}
        />
      ))}

      <DeleteModal 
        showModal={showModal}
        setShowModal={setShowModal}
        id={activeNote.id}
        noteName={activeNote.title}
        handleDelete={handleDelete}
      />
    </div>
  )
}

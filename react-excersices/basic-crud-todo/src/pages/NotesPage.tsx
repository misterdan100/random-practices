import { useEffect } from "react";
import CreateFormNote from "../components/CreateFormNote";
import NoteCard from "../components/NoteCard";

export default async function NotesPage() {

  useEffect(() => {

  }, [])


  return (
    <div
        className="px-4 flex flex-wrap gap-4"
    >
      <CreateFormNote />
      <NoteCard />
    </div>
  )
}
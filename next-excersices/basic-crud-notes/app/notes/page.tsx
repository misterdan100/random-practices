import FormNote from "./FormNote";
import { getNotes } from "@/db";
import NoteSection from "./NoteSection";

export default async function NotesPage() {
  const notes = await getNotes()

  return (
    <div 
        className="flex flex-wrap w-full gap-4"
    >
      <FormNote />
      <NoteSection notes={notes}/>

    </div>
  )
}
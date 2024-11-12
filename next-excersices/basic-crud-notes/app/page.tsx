import { getNotes } from "@/db";
import Link from "next/link";
import PreviewNote from "./PreviewNote";

export default async function Home() {
  const notes = await getNotes()

  return (
    <div className="flex flex-col gap-2">
      <h1>You can, you are walking the path</h1>

      <div className="flex flex-col gap-1 mt-8">
        <p className="text-sm text-slate-500">Total notes: {notes.length}</p>
        {notes.map( note => <PreviewNote key={note.id} note={note} />)}
      </div>
      
      <Link 
        href={'/notes'} 
        className="w-fit mt-4 px-4 py-1 border border-yellow-400 rounded-lg hover:bg-yellow-500 hover:text-white transition duration-200 ease-in-out focus:outline-none"
      >See Notes</Link>
    </div>
  );
}

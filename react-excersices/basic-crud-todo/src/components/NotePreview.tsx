import { Link } from "react-router-dom"
import { TNote } from "../types"

export const NotePreview = ({note}: {note: TNote}) => {
  return (
    <Link 
        to={`/notes/${note.id}`}
        className="flex flex-wrap items-center justify-between w-full p-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-200"
    >
        <p>{note.title}</p>
        <p className="text-sm italic text-gray-500">{note.created.slice(0, 10)}</p>
    </Link>
  )
}

import { Link } from "react-router-dom";
import { TNote } from "../types";


export default function NoteCard({note, handleDelete}: {note: TNote, handleDelete: (id: string) => Promise<void>}) {
  const { id, title, content, created} = note

  
  return (
    <div className="relative flex flex-col gap-2 p-4 transition-colors bg-slate-100 rounded-xl max-w-56 hover:bg-slate-200">
      <Link to={`/notes/${id}`} className="text-lg font-bold">
        {title}
      </Link>
      <p>{content}</p>
      <div className="flex flex-1"></div>
      <p className="text-sm italic text-slate-400">{created.slice(0, 10)}</p>

      <div onClick={() => handleDelete(id)}>
        <img
          className="absolute w-6 h-6 transition cursor-pointer text-slate-400 opacity-30 hover:opacity-75 right-2 bottom-2"
          src={"./trashIcon.svg"}
          alt="trash icon"
        />
      </div>
    </div>
  )
}
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { deleteNote, getNote } from "../db"
import { TNote } from "../types"
import { toast } from "react-toastify"

export default function NotePage() {
  const navigate = useNavigate()
  const params = useParams()
  const [note, setNote] = useState<TNote>({} as TNote)
  const [notFound, setNotFound] = useState(true)
  
  useEffect(() => {

    const gettingNote = async () => {

      if(!params.id) {
        return setNotFound(true)
      }
      
      const note = await getNote(params.id!)

      if(!note.id) {
        setNotFound(true)
        return
      }
            
      if(note) {
        setNote(note)
        setNotFound(false)
        return
      }
      
    }

    gettingNote()
  }, [])

  const handleDelete = async () => {
    await deleteNote(note.id)
    toast.success('Note deleted')
    navigate('/notes')
  }

  if(notFound) {
    return (
      <p>Note not found by ID</p>
    )
  }
  
  return (
    <div className="rounded-xl p-4 min-w-56 max-w-[500px] flex flex-col gap-4">
      <div>
        <Link
          to={`/notes/${note.id}`}
          className="text-xl font-bold transition-colors hover:text-yellow-600"
        >
          {note.title}
        </Link>
        <p className="text-sm text-slate-600">ID: {note.id}</p>
      </div>
      <p className="p-4 bg-slate-100">{note.content}</p>
      <div className="flex flex-1"></div>
      <p className="text-sm italic text-slate-400">{note.created.slice(0, 10)}</p>

      <div className="flex w-full gap-4">
        <Link
          to={`/notes/${note.id}/edit`}
          className="px-4 py-1 transition duration-200 ease-in-out border border-yellow-400 rounded-lg hover:bg-yellow-500 hover:text-white focus:outline-none"
        >
          Edit
        </Link>

        <button
          type="button"
          className="px-4 py-1 transition duration-200 ease-in-out border border-red-400 rounded-lg hover:bg-red-500 hover:text-white focus:outline-none"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  )
}
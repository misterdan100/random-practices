import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { editNote, getNote } from "../db"
import { TNote } from "../types"
import { toast } from "react-toastify"

export default function EditNotePage() {
  const navigate = useNavigate()
  const id = useParams().id
  const [note, setNote] = useState({} as TNote)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [isError, setIsError] = useState(true)

  useEffect(() => {
    const gettingNote = async () => {
      if(!id) {
        return 
      }

      const note = await getNote(id)

      if(note.id) {
        setNote(note)
        setTitle(note.title)
        setContent(note.content)
        return setIsError(false)
      }
    }

    gettingNote()
  }, [])

  const handleEdit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = {
      id: id!,
      title,
      content
    }

    const resp = await editNote(data)

    if(resp.id) {
      toast.success('Noted edited')
      navigate(`/notes/${id}`, {replace: true})
      return
    }

    toast.error('Error editing note')

  }
  
  if(isError) return <p>Note not found by ID</p>
  
  return (
    <form 
        onSubmit={handleEdit}
        className="rounded-xl p-4 min-w-56 max-w-[500px] flex flex-col gap-4"
    >
      <div className="w-full">
        <input
            type="text"
            className="w-full pl-2 text-xl font-bold transition-colors border-0 rounded-lg hover:text-yellow-600 ring-1 ring-inset ring-gray-300"
            value={title}
            onChange={e => setTitle(e.target.value)}
        />

        <p className="text-sm text-slate-600">ID: {id}</p>
      </div>
      <textarea 
        className="p-4 rounded-lg bg-slate-100 ring-1 ring-inset ring-gray-300" 
        value={content}
        onChange={e => setContent(e.target.value)}
      />
      <div className="flex flex-1"></div>
      <p className="text-sm italic text-slate-400">Created at: {note.created.slice(0, 10)}</p>

        <button
            type="submit"
            className="px-4 py-1 transition duration-200 ease-in-out border border-yellow-400 rounded-lg hover:bg-yellow-500 hover:text-white focus:outline-none"
        >
            Save changes
        </button>
        <button
            type="button"
            onClick={() => navigate(`/notes/${id}`)}
            className="px-4 py-1 transition duration-200 ease-in-out border border-gray-400 rounded-lg hover:bg-gray-500 hover:text-white focus:outline-none"
        >
            Cancel
        </button>
    </form>
  )
}
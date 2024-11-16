import { useState } from "react";
import { toast } from "react-toastify";
import { createNote } from "../db";
import { useNavigate } from "react-router-dom";
import { TNote } from "../types";

export default function CreateFormNote({setNotes}: {setNotes: (value: React.SetStateAction<TNote[]>) => void}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Validate inputs
    if([ title.trim() , content.trim()].includes('')) {
        toast.error('Title and content are required.')
        return
    }

    const resp = await createNote({
        title,
        content
    })

    // Handle errors
    if(!resp.title) {
        toast.error('Note not created, try again.')
        return
    }

    setNotes(prev => [...prev, resp])
    toast.success('Note created correctly.')

    setTitle('')
    setContent('')
    navigate('/notes')
    
  }
  return (
    <form 
        onSubmit={handleSubmit}
        className="p-4 bg-slate-200 rounded-xl max-w-56"
    >
      <h3 className="mb-2 text-lg font-bold">Create Note</h3>
      <div
        className="flex flex-col w-full gap-2"
      >
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="px-2 py-1 font-semibold rounded-lg outline-none"
        />
        <textarea
          placeholder="Content..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="px-2 py-1 font-semibold rounded-lg outline-none"
        />

        <button
          type="submit"
          className="px-4 py-1 transition duration-200 ease-in-out border border-gray-400 rounded-lg hover:bg-yellow-500 hover:text-white focus:outline-none"
        >
          Create
        </button>
      </div>
    </form>
  );
}

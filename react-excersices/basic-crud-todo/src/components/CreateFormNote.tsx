import { useState } from "react";
import { toast } from "react-toastify";
import { createNote } from "../db";

export default function CreateFormNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if([ title.trim() , content.trim()].includes('')) {
        toast.error('Title and content are required.')
        return
    }

    const resp = await createNote({
        title,
        content
    })

    if(!resp.ok) {
        toast.error('Note not created, try again.')
        return
    }

    toast.success('Note created correctly.')

  }
  return (
    <form 
        onSubmit={handleSubmit}
        className="bg-slate-200 rounded-xl p-4 max-w-56"
    >
      <h3 className="font-bold text-lg mb-2">Create Note</h3>
      <div
        className="flex flex-col gap-2 w-full"
      >
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="outline-none rounded-lg py-1 px-2 font-semibold"
        />
        <textarea
          placeholder="Content..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="outline-none rounded-lg py-1 px-2 font-semibold"
        />

        <button
          type="submit"
          className=" px-4 py-1 border border-gray-400 rounded-lg hover:bg-yellow-500 hover:text-white transition duration-200 ease-in-out focus:outline-none"
        >
          Create
        </button>
      </div>
    </form>
  );
}

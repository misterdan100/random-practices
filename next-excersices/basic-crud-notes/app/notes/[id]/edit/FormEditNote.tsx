'use client'

import { updateNote } from "@/db"
import { TNote } from "@/interfaces"
import { revalidatePath } from "next/cache"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"

export default function FormEditNote({note}: {note: TNote}) {
    const router = useRouter()
    const { id, title, content, created } = note

    const [newTitle, setNewTitle] = useState(title)
    const [newContent, setNewContent] = useState(content)

  const handleEdit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await updateNote({...note, title: newTitle, content: newContent})
    console.log('edited')

    // router.refresh()
    router.push(`/notes/${id}`)
    // revalidatePath(`/notes/${id}`)
    // return (<Link href={`/notes/${id}`}/>)
  }
  
  return (
    <form 
        onSubmit={handleEdit}
        className="rounded-xl p-4 min-w-56 max-w-[500px] flex flex-col gap-4"
    >
      <div className="w-full">
        <input
            type="text"
            className="font-bold text-xl hover:text-yellow-600 transition-colors w-full border-0 ring-1 ring-inset ring-gray-300 rounded-lg pl-2"
            value={newTitle}
            onChange={e => setNewTitle(e.target.value)}
        />

        <p className="text-sm text-slate-600">ID: {id}</p>
      </div>
      <textarea 
        className="bg-slate-100 p-4 rounded-lg ring-1 ring-inset ring-gray-300" 
        value={newContent}
        onChange={e => setNewContent(e.target.value)}
      />
      <div className="flex flex-1"></div>
      <p className="text-slate-400 text-sm italic">Created at: {created.slice(0, 10)}</p>

        <button
            type="submit"
            className=" px-4 py-1 border border-yellow-400 rounded-lg hover:bg-yellow-500 hover:text-white transition duration-200 ease-in-out focus:outline-none"
        >
            Save changes
        </button>
        <button
            type="button"
            onClick={() => router.push(`/notes/${id}`)}
            className=" px-4 py-1 border border-gray-400 rounded-lg hover:bg-gray-500 hover:text-white transition duration-200 ease-in-out focus:outline-none"
        >
            Cancel
        </button>
    </form>
  )
}
'use client'

import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"

export default  function FormNote() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const router = useRouter()
  
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const apiURL = 'http://127.0.0.1:8090/api/collections/notes/records'
        await fetch(apiURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title,
                content
            })
            }
        ).then(() => {
            setTitle('')
            setContent('')
            router.refresh()

        })
        .catch(error => {
            console.log('[ERROR: HANDLESUBMIT]')
            console.log(error)
        })


    }
  
  return (
    <div
        className="bg-slate-200 rounded-xl p-4 max-w-56"
    >
        <h3 className="font-bold text-lg mb-2">Create Note</h3>
        <form 
            onSubmit={handleSubmit}
            className="flex flex-col gap-2 w-full"
        >   
            <input 
                type="text" 
                placeholder="Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
                className="outline-none rounded-lg py-1 px-2 font-semibold"
            />
            <textarea 
                placeholder="Content..."
                value={content}
                onChange={e => setContent(e.target.value)}
                className="outline-none rounded-lg py-1 px-2 max-h-24 overflow-y-auto"
            />

            <button
                type="submit" 
                className=" px-4 py-1 border border-gray-400 rounded-lg hover:bg-yellow-500 hover:text-white transition duration-200 ease-in-out focus:outline-none"
            >Create</button>

        </form>
    </div>
  )
}
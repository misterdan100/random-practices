export const dynamic = 'force-dynamic'
export const revalidate = 0

import { getNote } from "@/db"
import { Metadata } from "next"
import Link from "next/link"



export async function generateMetadata({ params }: {
  params: { id: string }
}) {
  const idParam = params.id
  const note = await getNote(idParam)
  const { title, content } = note

  return {
    title: `Next Note - ${title}`,
    description: content
  } as Metadata
}

export default async function Page({ params }: {
  params: { id: string }
}) {
  const idParam = params.id
  const note = await getNote(idParam)

  

  const { title, content, created, id } = note

  return (
    <div className="rounded-xl p-4 min-w-56 max-w-[500px] flex flex-col gap-4">
      <div>
        <Link
          href={`/notes/${id}`}
          className="font-bold text-xl hover:text-yellow-600 transition-colors"
        >
          {title}
        </Link>
        <p className="text-sm text-slate-600">ID: {id}</p>
      </div>
      <p className="bg-slate-100 p-4">{content}</p>
      <div className="flex flex-1"></div>
      <p className="text-slate-400 text-sm italic">{created.slice(0, 10)}</p>

      <div className="flex w-full gap-4">
        <Link
          href={`/notes/${id}/edit`}
          className=" px-4 py-1 border border-yellow-400 rounded-lg hover:bg-yellow-500 hover:text-white transition duration-200 ease-in-out focus:outline-none"
        >
          Edit
        </Link>

        <button
          type="submit"
          className=" px-4 py-1 border border-red-400 rounded-lg hover:bg-red-500 hover:text-white transition duration-200 ease-in-out focus:outline-none"
        >
          Delete
        </button>
      </div>
    </div>
  )
}
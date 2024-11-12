import { getNote } from "@/db"
import { Metadata } from "next"
import FormEditNote from "./FormEditNote"

export async function generateMetadata({params} : {
  params: Promise<{ id: string }>
}) {
  const idParam = (await params).id
  const note = await getNote(idParam)
  const {title, content} = note

  return {
    title: `Next Note - ${title}`,
    description: content
  } as Metadata
}

export default async function page({params} : {
  params: Promise<{ id: string }>
}) {
  const idParam = (await params).id
  const note = await getNote(idParam)

  return (
    <>
      <FormEditNote note={note} />
    </>
  );
}
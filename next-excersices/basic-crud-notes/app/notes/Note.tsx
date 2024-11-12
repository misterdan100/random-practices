"use client";

import { deleteNote } from "@/db";
import { TNote } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

type NoteProps = {
  note: TNote;
  setShowModal: Dispatch<SetStateAction<boolean>>
  setActiveNote: Dispatch<SetStateAction<TNote>>
};

export default function Note({ note, setShowModal, setActiveNote }: NoteProps) {
  const { title, content, created, id } = note;


  const handleDelete = () => {
    setShowModal(true)
    setActiveNote(note)
  }
  
  return (
    <div className="bg-slate-100 rounded-xl p-4 max-w-56 flex flex-col gap-2 hover:bg-slate-200 transition-colors relative">
      <Link href={`/notes/${id}`} className="font-bold text-lg">
        {title}
      </Link>
      <p>{content}</p>
      <div className="flex flex-1"></div>
      <p className="text-slate-400 text-sm italic">{created.slice(0, 10)}</p>

      <div onClick={handleDelete}>
        <Image
          className="text-slate-400 opacity-30 hover:opacity-75 transition absolute right-2 bottom-2 cursor-pointer"
          src={"./trashIcon.svg"}
          width={20}
          height={20}
          alt="trash icon"
        />
      </div>
    </div>
  );
}

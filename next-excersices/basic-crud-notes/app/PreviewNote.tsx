import { TNote } from "@/interfaces";
import Link from "next/link";

export default function PreviewNote({ note }: { note: TNote }) {
  const { title, created, id } = note;

  return (
    <Link href={`/notes/${id}`}>
      <div className="py-2 px-4 bg-slate-50 hover:bg-slate-200 rounded-lg  flex justify-between items-center">
        <h4>{title}</h4>

        <p className="text-xs text-slate-700">{created.slice(0, 10)}</p>
      </div>
    </Link>
  );
}
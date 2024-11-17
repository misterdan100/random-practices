import { Link } from "react-router-dom";
import { NoteList } from "../components/NoteList";

export default function DashboardPage() {
  
  
  return (
    <div
      className="flex flex-col w-full h-full gap-4 px-4"
    >
      <h3>You can, you are walking the path</h3>

      <NoteList />

      <Link
        to={'/notes'}
       className="px-4 py-1 mt-4 transition duration-200 ease-in-out border border-yellow-400 rounded-lg w-fit hover:bg-yellow-500 hover:text-white focus:outline-none"
      >
        See Notes
      </Link>
    </div>
  )
}
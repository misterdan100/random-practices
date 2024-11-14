import { Link } from "react-router-dom";

export default function DashboardPage() {
  
  
  return (
    <div
      className="px-4 w-full h-full flex flex-col gap-4"
    >
      <h3>You can, you are walking the path</h3>

      <Link
        to={'/notes'}
       className="w-fit mt-4 px-4 py-1 border border-yellow-400 rounded-lg hover:bg-yellow-500 hover:text-white transition duration-200 ease-in-out focus:outline-none"
      >
        See Notes
      </Link>
    </div>
  )
}
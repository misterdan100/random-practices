'use client'

import { deleteTodo, switchCompleteTask } from "@/actions";
import { formatDate } from "@/utils";
import { Todo } from "@prisma/client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoCheckmarkCircle, IoEllipseOutline, IoFlag, IoTrashBin } from "react-icons/io5";
import { toast } from "react-toastify";

interface Props {
    todo: Todo
}

const statusDictionary = {
    "notStarted": <IoEllipseOutline size={24}/>,
    "inProgress": <IoEllipseOutline size={24}/>,
    "paused":<IoEllipseOutline size={24}/>,
    "done": <IoCheckmarkCircle size={24}/>
}

const priorityDictionary = {
    "low": <IoFlag size={24} className="text-gray-500"/>,
    "medium": <IoFlag size={24} className="text-orange-500"/>,
    "high": <IoFlag size={24} className="text-red-500"/>
}

export const TodoCart = ({todo}: Props) => {
    const router = useRouter()
    const { title, id, status, dueDate, priority } = todo

    const handleSwitchStatus = async() => {
        const status = await switchCompleteTask(id)

        if(status === null) {
            toast.error('Todo not updated')
            return
        }

        toast.success('Todo updated')
        router.refresh()
    }

    const handleDeleteTodo = async () => {
        const confirm = window.confirm('Are you sure to delete this Todo?')

        if(!confirm) return

        const resp = await deleteTodo(id)

        if(!resp || resp === 'Todo not found') {
            toast.error('Todo not deleted')
            return 
        }

        toast.success(resp)
        router.refresh()

    }

  return (
    <li className="py-3 sm:py-4 hover:bg-gray-100 transition-colors rounded-lg">
      <div className="flex items-center space-x-4">
        <div 
            className="flex-shrink-0 cursor-pointer hover:text-green-500 hover:scale-110 transition-all"
            onClick={handleSwitchStatus}
        >
            {statusDictionary[status]}
        </div>
        <Link 
            href={`/todo/${id}`}
            className="flex-1 min-w-0"
        >
          <p className="text-md font-semibold text-gray-900 truncate">
            {title}
          </p>
          <p className="text-sm text-gray-500 truncate">
              {dueDate ? formatDate(dueDate) : ''}
          </p>
        </Link>
        <div className="flex gap-4 items-center text-gray-600">
          {priorityDictionary[priority]}
          <div
            onClick={handleDeleteTodo}
          >
            <IoTrashBin size={24} className="hover:text-red-600 transition-colors cursor-pointer"/>
          </div>
        </div>
      </div>
    </li>
  );
};

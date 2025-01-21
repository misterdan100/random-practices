"use client";

import { changeTodoDate, changeTodoPriority } from "@/actions";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { formatDate } from "@/utils";
import clsx from "clsx";
import { Todo } from "@prisma/client";
import { IoAddCircle } from "react-icons/io5";
import { toast } from "react-toastify";
import { Project } from "@/interfaces/todo.interface";

interface Props {
  className?: string;
  todo: Todo;
  projectDB: {
    id: string,
    name: string,
    todos: []
  }[] | undefined
}

export default function TodoDetails({ className, todo, projectDB }: Props) {
  const router = useRouter();
  const { id: TodoID, dueDate, status, projectId } = todo;
  const stringDate = dueDate ? dueDate?.toISOString().split("T")[0] : "";
  const projectsReduced = projectDB?.reduce( ( obj, proj) => ({...obj, [proj.name]: [proj.id]}), {} as Record<string, string>)

  const [tempDate, setTempDate] = useState<string>(stringDate);
  const [ projectSelected, setProjectSelected ] = useState<string>(

  )

  //Get and Change Project


  // Change Date
  const handleChangeDate = async () => {
    const resp = await changeTodoDate({ id: TodoID, newDueDate: tempDate });

    if (!resp) {
      toast.error("Error updating todo");
      return;
    }

    router.refresh();
  };

  // Change Priority
  const handleChangePriority = async (newPriority: Todo["priority"]) => {
    const resp = await changeTodoPriority({
      id: TodoID,
      priority: newPriority,
    });

    if (!resp) {
      toast.error("Error updating");
      return;
    }

    toast.success("Todo updated");
    router.refresh();
  };

  return (
    <div className={`${className} flex flex-col gap-4 md:ml-4`}>
      {/* Status Select */}

      <div>
        <h4 className="font-semibold text-gray-600">Project</h4>
        <select
          name="status"
          id="status"
          className="focus:outline-none  items-center px-3 py-1 bg-gray-50 text-sm font-semibold flex justify-between w-fit border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-100 transition text-gray-500"
          value={status}
          // onChange={(e) => setFormData({...formData, status: e.target.value as Status})}
          onChange={() => {}}
        >
          <option className="font-bold text-gray-500" value="notStarted">
            Not started
          </option>
          <option className="font-bold text-yellow-500" value="inProgress">
            In progress
          </option>
          <option className="font-bold text-red-500" value="paused">
            Paused
          </option>
          <option className="font-bold text-green-500" value="done">
            Done
          </option>
        </select>
      </div>

      <div>
        <h4 className="font-semibold text-gray-600">Priority</h4>
        <div
          className="items-center p-1 bg-white flex flex-wrap gap-1 w-fit border border-gray-200 rounded-xl text-gray-500 transition"
        >
          <div>
          <label 
            htmlFor="pLow"
            className="focus:outline-none  items-center px-3  bg-gray-50 text-sm font-semibold flex justify-between w-fit border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-100 hover:border-sky-500 transition text-gray-500"
          >Low</label>
          <input 
            id="pLow"
            className="hidden"
            value="notStarted"
            type="radio"
            name="priority"
            />
          </div>
          <div>
          <label 
            htmlFor="pMedium"
            className={clsx(
              "focus:outline-none  items-center px-3  bg-gray-50 text-sm font-semibold flex justify-between w-fit border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-100 hover:border-yellow-500 transition text-gray-500",
              {
                "bg-yellow-50 border-yellow-500": true
              }
              
            )}

          >Medium</label>
          <input 
            id="pMedium"
            className="hidden"
            value="notStarted"
            type="radio"
            name="priority"
            />
          </div>
          <div>
          <label 
            htmlFor="phigh"
            className="focus:outline-none  items-center px-3  bg-gray-50 text-sm font-semibold flex justify-between w-fit border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-100 hover:border-red-500 transition text-gray-500"

          >High</label>
          <input 
            id="phigh"
            className="hidden"
            value="notStarted"
            type="radio"
            name="priority"
            />
          </div>
        </div>
      </div>

      <div>
        <h4 className="font-semibold text-gray-600">Status</h4>
        <select
          name="status"
          id="status"
          className={clsx(
            "focus:outline-none  items-center px-3 py-1 bg-gray-50 text-sm font-semibold flex justify-between w-fit border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-100 transition ",
            {
              "text-gray-500": status === "notStarted",
              "text-yellow-500": status === "inProgress",
              "text-red-500": status === "paused",
              "text-green-500": status === "done",
            }
          )}
          value={status}
          // onChange={(e) => setFormData({...formData, status: e.target.value as Status})}
          onChange={() => {}}
        >
          <option className="font-bold text-gray-500" value="notStarted">
            Not started
          </option>
          <option className="font-bold text-yellow-500" value="inProgress">
            In progress
          </option>
          <option className="font-bold text-red-500" value="paused">
            Paused
          </option>
          <option className="font-bold text-green-500" value="done">
            Done
          </option>
        </select>
      </div>

      <div>
        <h4 className="font-semibold text-gray-600">Due Date</h4>

        <input
          type="date"
          value={tempDate}
          // onChange={e => handleChangeDate(e.target.value)}
          onChange={(e) => setTempDate(e.target.value)}
          onBlur={handleChangeDate}
          className="focus:outline-none px-3 py-1 text-gray-600 bg-gray-50 text-sm font-semibold border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-100 transition"
        />
      </div>

      <div>
        <h4 className="font-semibold text-gray-600">Tags:</h4>
        <div
          className="items-center p-1 bg-white flex flex-wrap gap-1 w-fit border border-gray-200 rounded-xl text-gray-500 transition"
        >
          <p
            className="focus:outline-none  items-center px-2  bg-gray-50 text-sm font-semibold flex justify-between w-fit border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-100 transition text-gray-500"
          >Drive</p>
                    <p
            className="focus:outline-none  items-center px-2  bg-gray-50 text-sm font-semibold flex justify-between w-fit border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-100 transition text-gray-500"
          >Drive</p>
                   <p
            className="focus:outline-none  items-center px-2  bg-gray-50 text-sm font-semibold flex justify-between w-fit border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-100 transition text-gray-500"
          >Drive</p>
          <div
            className="focus:outline-none  items-center px-2 bg-gray-50 text-sm w-32 font-semibold flex justify-between border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-100 transition text-gray-500"
          >

            <input
              className="w-full bg-gray-50 focus:outline-none"
              placeholder="add..."
              />
              <IoAddCircle size={18}/> 
          </div>

        </div>

      </div>


      <div>
        <p className="text-sm italic font-normal text-gray-400 ">
          Created at: {formatDate(todo.createdAt)}
        </p>
        <p className="text-sm italic font-normal text-gray-400 mb-4">
          Updated at: {formatDate(todo.updatedAt)}
        </p>
      </div>
    </div>
  );
}

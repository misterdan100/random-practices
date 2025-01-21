import { getProjects, getTodoById } from "@/actions";
import TaskGrid from "@/components/task/TaskGrid";
import TodoDetails from "@/components/todo/TodoDetails";
import { Project } from "@/interfaces/todo.interface";
import clsx from "clsx";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

export default async function TodoPage({ params }: Props) {
  const { id } = params;
  const projectDB = await getProjects()
  console.log(projectDB)
  const todo = await getTodoById(id);

  if (!todo) {
    notFound();
  }

  const { id: TodoID, title, description, dueDate, status, priority } = todo;

  return (
    <div className="bg-white grid shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2 grid-cols-1 md:grid-cols-3">
      <div className=" md:col-span-2">
        {/* Title and Status */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex-shrink-0">
            <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
              {title}
            </span>
            <p className="text-sm italic font-normal text-gray-400 mb-4">
              Todo ID: {id}
            </p>
          </div>
        </div>

        <h3 className="text-base font-normal text-gray-500">{description}</h3>

        <TodoDetails 
          projectDB={projectDB}
          className={"md:col-span-1 md:hidden"}
          todo={todo}
        />

        {/* Tasks ------------------- */}

        <TaskGrid />

        {/* Close Tasks section */}
      </div>

      <TodoDetails 
        projectDB={projectDB}
        className={"md:col-span-1 hidden md:flex"}
        todo={todo}
      />
    </div>
  );
}

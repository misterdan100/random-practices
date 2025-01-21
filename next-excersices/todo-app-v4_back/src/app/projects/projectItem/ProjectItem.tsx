import { Priority, Status } from "@/interfaces/todo.interface";
import { capitalizeText } from "@/utils";
import { Project, Todo } from "@prisma/client";

interface Props {
  project: {
    id: string;
    name: string;
    todos: {
      id: string;
      title: string;
      description: string | null;
      createdAt: Date;
      updatedAt: Date;
      dueDate: Date | null;
      status: Status;
      priority: Priority;
      projectId: string | null;
    }[];
  };
}

export const ProjectItem = ({project}: Props) => {
  const { id, name, todos } = project
  return (
    <tr className="hover:bg-gray-50">
      <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
        {capitalizeText(name)}
      </td>
      <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-600">
        {todos.length === 1 ? `${todos.length} Todo` : `${todos.length} Todos`} 
      </td>
    </tr>
  );
};

import { Todo } from "@prisma/client";
import { TodoCart } from "./TodoCart";

interface Props {
  todos: Todo[];
}

export const TodoGrid = ({ todos }: Props) => {
  return (
    <div className="bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold leading-none text-gray-900">
          Todo list
        </h3>

        <a
          href="#"
          className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg inline-flex items-center p-2"
        >
          View all
        </a>
      </div>
      <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200">
          {todos.map((todo) => (
            <TodoCart key={todo.id} todo={todo} />
          ))}
        </ul>
      </div>
    </div>
  );
};

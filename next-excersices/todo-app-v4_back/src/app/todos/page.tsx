import { GetTodos } from "@/actions"
import { TodoCart, TodoGrid } from "@/components"

export default async function TodosPage() {

  const todos = await GetTodos()

  if(!todos ) return <p>There are not Todos to show.</p>
  
  
  
  return (
    <div>
      <TodoGrid 
        todos={todos}
      />
    </div>
  )
}
import prisma from "../lib/prisma";
import type { Priority, Status, Todo } from "../interfaces/todo.interface"
import { initialData } from "./seed";
import { convertDate } from '../utils/index'


async function main() {
    await prisma.tag.deleteMany()
    await prisma.project.deleteMany()
    await prisma.todo.deleteMany()

    const { projects, tags, todos } = initialData

    // 1. create tags

    await prisma.tag.createMany({data: tags.map( item => ({name: item}))})

    // 2. create projects
    await prisma.project.createMany({data: projects.map( item => ({name: item}))})

    // 3. create todos
    // 3.1 search tags ids
    const tagsFromDb = await prisma.tag.findMany()
    const projectsFromDb = await prisma.project.findMany()
    
    // 3.2 search project id
    const projectObject = projectsFromDb.reduce( ( total, item ) => ({...total, [item.name]: item.id}), {} as Record<string, string>)

    const todosMapped = todos.map( item => {
        const {project, tags: tagsProject, dueDate, ...testTodo} = item
        const projectId = projectObject[project]
    
        const tagsToNewTodo = tagsFromDb.reduce( (arr, item) => {
            if(tagsProject.includes(item.name)) {
                return [...arr, item.id]
            }
            return arr
        }, [] as string[])

        return {
            ...testTodo, 
            status: testTodo.status as Status,
            priority: testTodo.priority as Priority,
            projectId,
            dueDate: (new Date(convertDate(dueDate))),
            tags: tagsToNewTodo
           }
    })
    

    
    // 3.3 create todo
    await prisma.todo.createMany({ data: todosMapped.map( todo => todo) })

    console.log('Seed success!')
}

(() => {
    if(process.env.NODE_ENV === 'production') return;
    main()
})();
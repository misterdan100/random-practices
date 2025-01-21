'use server'

import prisma from "@/lib/prisma"
import { Todo } from "@prisma/client"

interface Props {
    id: Todo['id']
    newDueDate: string
}

export const changeTodoDate = async ({id, newDueDate}: Props) => {
    try {
        const todo = await prisma.todo.findUnique({where: {id}})

        if(!todo) return null

        todo.dueDate = new Date(newDueDate)

        await prisma.todo.update({
            where: {id},
            data: todo
        })

        return 'Updated'
        
    } catch (error) {
        console.log('[Error changeTodoDate]')
        console.log(error)
        return null
    }
}
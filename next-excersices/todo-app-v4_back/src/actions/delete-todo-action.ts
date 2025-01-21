'use server'

import prisma from "@/lib/prisma"
import { Todo } from "@prisma/client"

export const deleteTodo = async (id: Todo['id']) => {

    try {
        const todoToDelete = await prisma.todo.findUnique({where: {id}})

        if(!todoToDelete) return 'Todo not found'

        await prisma.todo.delete({where: {id}})
        
        return 'Todo deleted'
    } catch (error) {
        console.log('[Error Delete Note]')
        console.log(error)
        return null
    }
}
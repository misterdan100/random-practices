'use server'

import prisma from "@/lib/prisma"
import { Todo } from "@prisma/client"

export const getTodoById = async (id: Todo['id']): Promise<Todo | null> => {

    try {

        const todo = await prisma.todo.findUnique({where: {id}})
        
        if( !todo ) return null

        return todo
    } catch (error) {
        console.log('[Error getTodoById]')
        console.log(error)
        return null
    }
}
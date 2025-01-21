'use server'

import prisma from "@/lib/prisma"

export const GetTodos = async () => {
    try {
        const todos = await prisma.todo.findMany()

        return todos

        
    } catch (error) {
        console.log('[Error-GetTodos]')
        console.log(error)

        return null
    }
}
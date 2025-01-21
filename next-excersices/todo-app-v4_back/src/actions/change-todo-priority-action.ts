'use server'

import prisma from "@/lib/prisma"
import { Todo } from "@prisma/client"

interface Props {
    id: Todo['id']
    priority: Todo['priority']
}

export const changeTodoPriority = async ({ id, priority }: Props) => {
    try {

        const todo = await prisma.todo.findUnique({where: {id}})

        if(!todo) return null

        todo.priority = priority

        await prisma.todo.update({
            where: {id},
            data: todo
        })

        return 'updated'
    } catch (error) {
        console.log('[Error changeTodoPriority]')
        console.log(error)
        return null
    }
}
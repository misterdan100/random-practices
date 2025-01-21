'use server'

import prisma from "@/lib/prisma"
import { Todo } from "@prisma/client"

export const switchCompleteTask = async (id: Todo['id']) => {
    console.log('updated')

    try {
        const todo = await prisma.todo.findUnique({where: {id: id}})

        if(!todo) return null

        if(todo.status !== 'done') {
            todo.status = 'done'
        } else {
            todo.status = 'notStarted'
        }

        await prisma.todo.update({
            where: {id: todo.id},
            data: todo
        })


        return 'Todo updated'
        
    } catch (error) {
        console.log('[Error switchCompleteTask]')
        console.log(error)
        return null
    }


}
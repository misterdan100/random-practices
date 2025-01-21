'use server'

import { FormData } from "@/interfaces/todo.interface"
import prisma from "@/lib/prisma"

export const createTodo = async (formData: FormData) => {
    try {
        
        // Validate title 
        if(formData.title.trim() === '') {
            return null
        }

        // Validate and convert date
        if(formData.dueDate && formData.dueDate !== '') {
            formData.dueDate = new Date(formData.dueDate)
        }

        // Validate project
        if(formData.projectId !== undefined || formData.projectId === '') {
            delete formData.projectId
        }

        const newTodo = await prisma.todo.create({data: formData})

        return true

    } catch (error) {
        console.log('[CreateTodo]')
        console.log(error)
        return null
    }
}
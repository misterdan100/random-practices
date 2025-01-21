'use server'

import prisma from "@/lib/prisma"

export const getProjects = async () => {
    try {
        const projects = await prisma.project.findMany({
            include: {todos: true},
            orderBy: {
                // order by array length
                todos: {
                    _count: 'desc'
                }
            }
        })

        return projects
        
    } catch (error) {
        console.log('[ERROR GETPROJECT]')
        console.log(error)
    }
}
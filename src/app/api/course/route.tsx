import prisma from "@/lib/prismaClient"
import { auth } from "@clerk/nextjs/server"
import { NextResponse } from 'next/server'
export const revalidate = 0

export async function GET(req: Request) {
    try {
        const { userId } = auth()
        var coursesAll = await prisma.courses.findMany({
            include: {
                progress: { orderBy: { dataconclusao: 'desc' }, where: { userid: userId } },
                lessons: { orderBy: { orderlesson: 'asc' } }
            },
            orderBy: { ordercourse: 'asc' }
        })
        return NextResponse.json(coursesAll, { status: 200 })
    } catch (error) {
        console.log("[COURSE]", error)
        return new NextResponse('Erro ao buscar os cursos', { status: 500 })
    } finally {
        await prisma.$disconnect()
    }
}


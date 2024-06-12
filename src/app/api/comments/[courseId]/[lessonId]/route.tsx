import prisma from "@/lib/prismaClient"
import { NextResponse } from 'next/server'

export async function GET(req: Request, { params: { courseId, lessonId } }: { params: { courseId: string, lessonId: string } }) {
    try {
        var commentsAll = await prisma.comments.findMany({
            where: { lessonid: Number(lessonId), courseid: Number(courseId)  },
        })
        return NextResponse.json(commentsAll, { status: 200 })
    } catch (error) {
        console.log("[COURSE]", error)
        return new NextResponse('Erro ao buscar os cursos', { status: 500 })
    } finally {
        await prisma.$disconnect()
    }
}


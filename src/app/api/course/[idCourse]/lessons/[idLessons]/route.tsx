import prisma from "@/lib/prismaClient"
import { NextResponse } from 'next/server'

export async function GET(req: Request, { params: { idCourse, idLessons } }: { params: { idCourse: string, idLessons: string } }) {
    try {
        var coursesAll = await prisma.lessons.findUnique({
            where: { lessonid: Number(idLessons) },
            include: {
                reactions: { where: { userid: 'user_2e64NDbrFEdVY4IlfJxmyjmZzqZ', lessonid: Number(idLessons) } },
                progress: {  where: { userid: 'user_2e64NDbrFEdVY4IlfJxmyjmZzqZ', courseid: Number(idCourse), lessonid: Number(idLessons) } },
                courses: { where: { courseid: Number(idCourse) }, include: { lessons: true }  }
            }
        })
        return NextResponse.json(coursesAll, { status: 200 })
    } catch (error) {
        console.log("[COURSE]", error)
        return new NextResponse('Erro ao buscar os cursos', { status: 500 })
    } finally {
        await prisma.$disconnect()
    }
}


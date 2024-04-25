import prisma from "@/lib/prismaClient"
import { auth } from "@clerk/nextjs/server"
import { NextResponse } from 'next/server'

export async function GET(req: Request, { params: { idCourse, idLessons } }: { params: { idCourse: string, idLessons: string } }) {
    try {
        const aut = auth()
        console.log(aut)
        console.log('userId', idCourse, idLessons)
        var coursesAll = await prisma.lessons.findUnique({
            where: { lessonid: Number(idLessons) },
            include: {
                reactions: { where: { userid: 'userId', lessonid: Number(idLessons) } },
                progress: {  where: { userid: 'userId', courseid: Number(idCourse), lessonid: Number(idLessons) } },
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


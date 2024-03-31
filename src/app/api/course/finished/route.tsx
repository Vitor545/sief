import prisma from "@/lib/prismaClient"
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
    try {
        var coursesBlocked = await prisma.courses.findMany({
            include: {
                progress: { orderBy: { dataconclusao: 'desc' }, where: { userid: 'user_2e64NDbrFEdVY4IlfJxmyjmZzqZ' } },
                lessons: { orderBy: { orderlesson: 'asc' } }
            },
            orderBy: { ordercourse: 'asc' }
        })
        return NextResponse.json(coursesBlocked.filter(course => course.progress.length === course.lessons.length), { status: 200 })
    } catch (error) {
        console.log("[COURSE]", error)
        return new NextResponse('Erro ao buscar os cursos', { status: 500 })
    } finally {
        await prisma.$disconnect()
    }
}


export async function POST(req: Request) {
    try {
        const { lessonid, courseid, userid }: { lessonid: number, courseid: number, userid: string } = await req.json();
        if (!userid || !lessonid || !courseid) {
            return new NextResponse("Algum dado é faltando para criar a reação", { status: 400 })
        }
        await prisma.progress.create({
            data: {
                userid: userid,
                lessonid: lessonid,
                completed: true,
                courseid: courseid
            }
        })
        return NextResponse.json('Progresso criado', { status: 200 })
    } catch (error) {
        console.log("[COURSE]", error)
        return new NextResponse('Erro ao buscar os cursos', { status: 500 })
    } finally {
        await prisma.$disconnect()
    }
}

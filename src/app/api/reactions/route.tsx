import { Reaction } from "@/interfaces/LessonDto";
import prisma from "@/lib/prismaClient"
import { NextResponse } from 'next/server'
export const revalidate = 0

export async function POST(req: Request) {
    try {
        const { lessonid, reactiontype, userid }: { lessonid: number, reactiontype: Reaction['reactiontype'], userid: string } = await req.json();
        if (!userid || !lessonid || !reactiontype) {
            return new NextResponse("Algum dado é faltando para criar a reação", { status: 400 })
        }
        var findReaction = await prisma.reactions.findFirst({
            where: { userid: userid, lessonid: lessonid }
        })
        if (!findReaction) {
            await prisma.reactions.create({
                data: {
                    userid: userid,
                    lessonid: lessonid,
                    reactiontype: reactiontype
                }
            })
        } else {
            await prisma.reactions.update({
                where: { reactionid: findReaction.reactionid },
                data: { reactiontype: reactiontype }
            })
        }
        return NextResponse.json('Reação criada/atualizada com sucesso', { status: 200 })
    } catch (error) {
        console.log("[COURSE]", error)
        return new NextResponse('Erro ao buscar os cursos', { status: 500 })
    } finally {
        await prisma.$disconnect()
    }
}


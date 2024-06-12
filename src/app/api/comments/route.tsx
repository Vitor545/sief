import prisma from "@/lib/prismaClient"
import { checkRole } from "@/lib/roles"
import { NextResponse } from 'next/server'
export const revalidate = 0
type ResponseData = {
    message: string
}

export async function GET(req: Request) {
    try {
    if(checkRole("teacher")) {
        return new NextResponse(JSON.stringify("É professor"), { status: 200 })
    }
    return new NextResponse(JSON.stringify("Não é professor"), { status: 200 })
    } catch (error) {
        console.log("[COMMENT]", error)
        return new NextResponse('Internal server error', { status: 500 })
    }
}



export async function POST(req: Request) {
    try {
        const {  lessonid, courseid, comment, fullName, imageUrl, userid }: { lessonid: number, courseid: number, comment: string , fullName: string , imageUrl: string, userid: string } = await req.json();
        if (!userid) {
            return new NextResponse("Unauthorized", { status: 400 })
        }
        await prisma.comments.create({
            data: {
                lessonid: lessonid,
                courseid: courseid,
                commenttext: comment,
                nameuser: fullName,
                imageurl: imageUrl,
                commentdate: new Date(),
                userid: userid
            }
        })
        return NextResponse.json('Reação criada/atualizada com sucesso', { status: 200 })
    } catch (error) {
        console.log("[COURSE]", error)
        return new NextResponse('Erro ao buscar os cursos', { status: 500 })
    } finally {
        await prisma.$disconnect()
    }
}


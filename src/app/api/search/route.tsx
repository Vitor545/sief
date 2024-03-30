import { checkRole } from "@/lib/roles"
import { NextResponse } from 'next/server'

type ResponseData = {
    message: string
}

export async function GET(req: Request) {
    try {
        const { userid, lessonid, reactiontype } = await req.json();
        if(!userid || !lessonid || !reactiontype) {
            return new NextResponse(JSON.stringify("Algum dado é faltando para criar a reação"), { status: 400 })
        }
        const insertCommand = "INSERT INTO reactions(userid, lessonid, reactiontype) VALUES($1, $2, $3)"
        return new NextResponse(JSON.stringify("Reação criada com sucesso"), { status: 200 })
    } catch (error) {
        console.log("[REACTION]", error)
        return new NextResponse('Internal server error', { status: 500 })
    }
}


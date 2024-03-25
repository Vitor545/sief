import { checkRole } from "@/lib/roles"
import { NextResponse } from 'next/server'

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
        console.log("[COURSE]", error)
        return new NextResponse('Internal server error', { status: 500 })
    }
}


import { NextResponse } from 'next/server'

type ResponseData = {
    message: string
}

export async function GET(req: Request, { params: { idCourse } }: { params: { idCourse: string } }) {
    try {
        console.log(idCourse)
        return new NextResponse(JSON.stringify("Não é professor"), { status: 200 })
    } catch (error) {
        console.log("[COURSE-ID]", error)
        return new NextResponse('Internal server error', { status: 500 })
    }
}


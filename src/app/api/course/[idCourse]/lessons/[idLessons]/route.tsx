import { NextResponse } from 'next/server'

type ResponseData = {
    message: string
}

export async function GET(req: Request, { params: { idLessons, idCourse } }: { params: { idLessons: string, idCourse: string } }) {
    try {
        console.log(idLessons, idCourse)
        return new NextResponse(JSON.stringify("Não é professor"), { status: 200 })
    } catch (error) {
        console.log("[COURSE-ID-LESSONS-ID]", error)
        return new NextResponse('Internal server error', { status: 500 })
    }
}


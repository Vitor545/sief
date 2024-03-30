import { CourseDto } from "@/interfaces/CourseDto"
import conn from "@/lib/db"
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
    const client = await conn.connect()
    try {
        const selectAllCourses = "SELECT courses.courseid, courses.coursename, courses.courseimage, users.username AS creator, COUNT(lessons), courseprogress.completedlessons, courseprogress.courseblocked FROM courses LEFT JOIN lessons ON lessons.courseid = courses.courseid LEFT JOIN users ON users.userid = courses.creatorid LEFT JOIN courseprogress ON courseprogress.courseid = courses.courseid  GROUP BY courses.courseid, users.userid, courseprogress.courseblocked, courseprogress.completedlessons HAVING  COUNT(lessons) = courseprogress.completedlessons ORDER BY courses.courseid"
        var { rows } = await client.query<CourseDto>(selectAllCourses)
        return NextResponse.json(rows, { status: 200 })
    } catch (error) {
        console.log("[COURSE]", error)
        return new NextResponse('Erro ao buscar os cursos', { status: 500 })
    }
    finally {
        client.release()
    }
}


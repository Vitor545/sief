import Card from "@/components/card";
import SearchNotFound from "@/components/search_notfound";
import prisma from "@/lib/prismaClient";
import { auth } from "@clerk/nextjs/server";
import { notFound } from "next/navigation";


export default async function Search({ searchParams }: { searchParams: { name: string } }) {
    const { userId } = auth()
    if (!searchParams?.name) {
        return notFound();
    }
    const findCourses = await prisma.courses.findMany({
        include: {
            progress: { orderBy: { dataconclusao: 'desc' }, where: { userid: userId } },
            lessons: { orderBy: { orderlesson: 'asc' } }
        },
        where: { coursename: { contains: searchParams?.name } },
        orderBy: { ordercourse: 'asc' }
    })
    return (
        <main className="container sm:px-16 text-center p-8 pt-28 flex flex-col gap-6">
            <h3 className="font-medium text-center mb-8">Pesquisa para {'"' + searchParams?.name + '"'}</h3>
            {findCourses.length > 0 ?
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {findCourses?.map(({ courseid, descriptioncourse, coursename,
                        courseimage, progress, lessons, blocked }) => (
                        <Card
                            key={courseid}
                            name={coursename}
                            img={courseimage}
                            blocked={blocked}
                            descriptioncourse={descriptioncourse}
                            progress={(progress.length * 100) / lessons.length}
                            courseid={courseid}
                            lessonid={progress[0]?.lessonid || lessons[0]?.lessonid}
                        />

                    ))} </div> :
                <SearchNotFound />}
        </main>
    );
}

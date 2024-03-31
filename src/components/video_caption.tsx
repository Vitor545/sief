'use client';
import {
    Card as ShadCard,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "./ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import VideoAula from "./video_aula";
import { Lesson } from "@/interfaces/CourseDto";
import { useRouter } from "next/navigation";

export interface IVideoCaptionProps {
    lessons: Lesson[]
    idChapter: string
    courseId: string
    findLast: number
    findNext: number
}

export default function VideoCaption({ lessons, idChapter, courseId, findLast, findNext }: IVideoCaptionProps) {
    const router = useRouter();
    return (
        <ShadCard>
            <CardHeader className="flex justify-between items-center flex-row">
                <CardTitle>Conteúdos</CardTitle>
                <div className="flex items-center gap-2">
                    <Button onClick={() => router.push(`/course/${courseId}/chapter/${findLast}`)} variant={"outline"}><ArrowLeftIcon /></Button>
                    <Button onClick={() => router.push(`/course/${courseId}/chapter/${findNext}`)} variant={"outline"}><ArrowRightIcon /></Button>
                </div>
            </CardHeader>
            <CardContent className="flex flex-col  p-0">
                {lessons.map((lesson) => <VideoAula courseId={courseId} key={lesson.lessonid} lesson={lesson} lessonActive={idChapter} />)}
            </CardContent>
        </ShadCard>
    );
}

import { Lesson } from '@/interfaces/CourseDto';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import * as React from 'react';

export interface IVideoAuloProps {
  lesson: Lesson
  lessonActive: string
  courseId: string
}

export default function VideoAula({ lesson, courseId, lessonActive }: IVideoAuloProps) {
  const router = useRouter();
  return (
    <div onClick={() => router.push(`/course/${courseId}/chapter/${lesson.lessonid}`)} className={cn("p-4 flex items-center gap-4 cursor-pointer hover:bg-primary/10", lessonActive === String(lesson.lessonid) ? "bg-primary/10" : "")}>
      <Image src={lesson.lessonimage}
        alt="video aula image"
        width={86}
        height={16}
        className="rounded-lg"
      />
      <p className="max-w-[250px] w-full">{lesson.lessontitle}</p>
    </div>
  );
}

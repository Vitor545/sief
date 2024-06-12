import Comments from "@/components/comments";
import VideoPlayer from "@/components/video";
import VideoCaption from "@/components/video_caption";
import { Lesson } from "@/interfaces/CourseDto";
import { useCourseStore } from "@/store/courseStore";

export default async function Course({ params: { idCourse, idChapter } }: { params: { idCourse: string, idChapter: string } }) {
  await useCourseStore.getState().actions.getLesson(idCourse, idChapter)
  const data = useCourseStore.getState().state.lesson;
  const findNext = data.courses.lessons[data.courses.lessons.findIndex((lesson: Lesson) => String(lesson.lessonid) === idChapter) + 1] ?? data.courses.lessons[0]
  const findLast = data.courses.lessons[data.courses.lessons.findIndex((lesson: Lesson) => String(lesson.lessonid) === idChapter) - 1] ?? data.courses.lessons[data.courses.lessons.length - 1]
  return (
    <main className="container p-16 pt-28 flex gap-6 max-[1180px]:flex-col max-[1180px]:px-8 max-[430px]:px-4">
      <div className="flex-1 items-end gap-6  flex-col flex max-[1180px]:items-center">
        <VideoPlayer courseId={idCourse} findNext={findNext.lessonid} findLast={findLast.lessonid} courseName={data.courses.coursename} vimeoid={data.vimeoid} lessonName={data.lessontitle} lessonDescription={data.lessondescription} />
        <Comments courseid={data.courses.courseid} lessonid={data.lessonid} progress={data.progress[0]} reactions={data.reactions[0]} />
      </div>
      <div className="min-w-[300px] max-[1180px]:hidden">
        <VideoCaption findNext={findNext.lessonid} findLast={findLast.lessonid} courseId={idCourse} lessons={data.courses.lessons} idChapter={idChapter} />
      </div>
    </main>
  );
}

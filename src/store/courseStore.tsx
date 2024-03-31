import { CourseDto } from '@/interfaces/CourseDto'
import { LessonDto } from '@/interfaces/LessonDto'
import { api } from '@/lib/axios'
import { create } from 'zustand'

interface CourseState {
    state: {
        course: CourseDto[]
        lesson: LessonDto
    },
    actions: {
        setCourse: (course: CourseDto[]) => void
        getAllCourses: () => Promise<void>
        getCoursesBlocked: () => Promise<void>
        getCoursesFinished: () => Promise<void>
        getLesson: (idCourse: string, idChapter: string) => Promise<void>
    }
}

export const useCourseStore = create<CourseState>((set) => ({
    state: {
        course: [],
        lesson: { lessonid: 0, courseid: 0, lessontitle: '', vimeoid: '', lessonimage: '', orderlesson: 0, lessondescription: '', courses: { courseid: 0, coursename: '', courseimage: '', creatorid: '', ordercourse: 0, blocked: false, descriptioncourse: '', lessons: [] }, reactions: [], progress: [] }
    },
    actions: {
        setCourse: (course: CourseDto[]) => set((state) => ({ state: { ...state.state, course } })),
        getAllCourses: async () => {
            const { data: course } = await api.get('/course') as { data: CourseDto[] | null };
            set((state) => ({ state: { ...state.state, course: course || [] } }))
        },
        getLesson: async (idCourse: string, idChapter: string) => {
            const { data } = await api.get(`course/${idCourse}/lessons/${idChapter}`)
            set((state) => ({ state: { ...state.state, lesson: data || {} } }))
        },
        getCoursesBlocked: async () => {
            const { data: course } = await api.get('/course/blocked') as { data: CourseDto[] | null };
            set((state) => ({ state: { ...state.state, course: course || [] } }))
        },
        getCoursesFinished: async () => {
            const { data: course } = await api.get('/course/finished') as { data: CourseDto[] | null };
            set((state) => ({ state: { ...state.state, course: course || [] } }))
        },
    }
}))
import { CourseDto } from '@/interfaces/CourseDto'
import { api } from '@/lib/axios'
import { create } from 'zustand'

interface CourseState {
    state: {
        course: CourseDto[]
    },
    actions: {
        setCourse: (course: CourseDto[]) => void
        getAllCourses: () => Promise<void>
        getCoursesBlocked: () => Promise<void>
        getCoursesFinished: () => Promise<void>
    }
}

export const useCourseStore = create<CourseState>((set) => ({
    state: {
        course: [],
    },
    actions: {
        setCourse: (course: CourseDto[]) => set({ state: { course } }),
        getAllCourses: async () => {
            const { data: course } = await api.get('/course') as { data: CourseDto[] | null };
            set({ state: { course: course || [] } })
        },
        getCoursesBlocked: async () => {
            const { data: course } = await api.get('/course/blocked') as { data: CourseDto[] | null };
            set({ state: { course: course || [] } })
        },
        getCoursesFinished: async () => {
            const { data: course } = await api.get('/course/finished') as { data: CourseDto[] | null };
            set({ state: { course: course || [] } })
        },
    }
}))
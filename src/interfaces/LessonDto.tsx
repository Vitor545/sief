export interface LessonDto {
    lessonid: number;
    courseid: number;
    lessontitle: string;
    vimeoid: string;
    lessonimage: string;
    orderlesson: number;
    lessondescription: string;
    reactions: Reaction[];
    progress: Progress[];
    courses: Courses;
  }
  interface Courses {
    courseid: number;
    coursename: string;
    courseimage: string;
    creatorid: string;
    ordercourse: number;
    blocked: boolean;
    descriptioncourse: string;
    lessons: Lesson[];
  }
   interface Lesson {
    lessonid: number;
    courseid: number;
    lessontitle: string;
    vimeoid: string;
    lessonimage: string;
    orderlesson: number;
    lessondescription: string;
  }
  interface Progress {
    lessonprogressid: number;
    userid: string;
    completed: boolean;
    lessonid: number;
    dataconclusao: string;
    courseid: number;
  }
  export interface Reaction {
    reactionid: number;
    userid: string;
    lessonid: number;
    reactiontype: string;
  }
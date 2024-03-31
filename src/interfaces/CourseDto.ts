export interface CourseDto {
  courseid: number;
  coursename: string;
  courseimage: string;
  creatorid: string;
  ordercourse: number;
  descriptioncourse: string;
  blocked: boolean;
  progress: Progress[];
  lessons: Lesson[];
}
export interface Lesson {
  lessonid: number;
  courseid: number;
  lessontitle: string;
  vimeoid: string;
  lessondescription: string;
  lessonimage: string;
  orderlesson: number;
}
export interface Progress {
  lessonprogressid: number;
  userid: string;
  completed: boolean;
  lessonid: number;
  dataconclusao: string;
  courseid: number;
}

 interface Reaction {
  reactionid: number;
  userid: string;
  lessonid: number;
  reactiontype: 'Muito_ruim' | 'Ruim' | 'Razo_vel' | 'Muito_bom' | 'Excelente';
}
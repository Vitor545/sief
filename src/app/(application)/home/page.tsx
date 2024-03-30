'use client'
import Card from "@/components/card";
import GroupButtons from "@/components/group_buttons";
import { useCourseStore } from "@/store/courseStore";
import { useEffect } from "react";

export default function Home() {
  const getAllCourses = useCourseStore(state => state.actions.getAllCourses);

  useEffect(() => {
    getAllCourses();
  }, [getAllCourses])

  const courses = useCourseStore(state => state.state.course);

  return (
    <main className="container sm:px-16 p-8 pt-28 flex flex-col gap-6">
      <GroupButtons />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {courses?.map(({ courseid, coursename, courseimage, courseblocked, count, completedlessons }) => (
          <Card key={courseid} name={coursename} img={courseimage} completedlessons={completedlessons} courseblocked={courseblocked} count={count} />
        ))}
      </div>
    </main>
  );
}

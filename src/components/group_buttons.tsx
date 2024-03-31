import { Button } from "@/components/ui/button";
import { useCourseStore } from "@/store/courseStore";
import { useState } from "react";

export default function GroupButtons() {
  const [buttonActive, setButtonActive] = useState(0);
  const getAllCourses = useCourseStore(state => state.actions.getAllCourses)
  const getCoursesBlocked = useCourseStore(state => state.actions.getCoursesBlocked)
  const getCoursesFinished = useCourseStore(state => state.actions.getCoursesFinished)
  const buttons = [
    {
      onclick: () => {
        setButtonActive(0)
        getAllCourses()
      },
      text: "Disponíveis",
      id: 0
    },
    {
      onclick: () => {
        setButtonActive(1)
        getCoursesBlocked()
      },
      text: "Bloqueados",
      id: 1
    },
    {
      onclick: () => {
        setButtonActive(2)
        getCoursesFinished()
      },
      text: "Concluídos",
      id: 2
    }
  ]
  return (
    <div className="flex items-center gap-2 max-[430px]:gap-1 flex-wrap">
      {buttons.map(({ onclick, text, id }) => (
        <Button key={id} className="max-[430px]:text-xs max-[430px]:w-full" onClick={onclick} variant={buttonActive === id ? "default" : "outline"}>{text}</Button>
      ))}
    </div>
  );
}

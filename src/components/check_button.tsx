"use client";
import { Progress as ShadProgress } from "@/components/ui/progress";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Button } from "./ui/button";
import { Progress } from "@/interfaces/CourseDto";
import { useState } from "react";
import { api } from "@/lib/axios";
import { useAuth, useUser } from "@clerk/nextjs";
import { Reaction } from "@/interfaces/LessonDto";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { toastConfig } from "@/utils/toast";

export interface ICheckButtonProps {
  progress: Progress;
  reactions: Reaction;
  lessonid: number;
  courseid: number;
}

const reactionEmoji = [
  {
    value: "Muito_ruim",
    emoji: "😡",
  },
  {
    value: "Ruim",
    emoji: "🙁",
  },
  {
    value: "Razo_vel",
    emoji: "😑",
  },
  {
    value: "Muito_bom",
    emoji: "🙂",
  },
  {
    value: "Excelente",
    emoji: "😀",
  },
] as const;

export default function CheckButton({
  progress,
  reactions,
  lessonid,
  courseid,
}: ICheckButtonProps) {
  const { userId, ...rest } = useAuth();
  const { user } = useUser();
  console.log()
  console.log()
  const route = useRouter();
  const [react, setReact] = useState<Reaction["reactiontype"]>(
    reactions?.reactiontype ?? null
  );
  const [finished, setFinished] = useState(progress?.completed);

  const requestReaction = async (label: Reaction["reactiontype"]) => {
    await api.post("/reactions", {
      lessonid: lessonid,
      userid: userId,
      reactiontype: label,
    });
  };

  const requestFinish = async () => {
    await api.post("/course/finished", {
      lessonid: lessonid,
      userid: userId,
      courseid: courseid,
      imageUrl: user?.imageUrl,
      fullName: user?.fullName,
    });
  };

  return (
    <div className="flex flex-col gap-4 w-72">
      <ToggleGroup value={react} type="single">
        {reactionEmoji.map(({ value, emoji }) => (
          <ToggleGroupItem
            onClick={() => {
              setReact(value);
              requestReaction(value);
              route.refresh();
            }}
            key={value}
            className="text-xl cursor-pointer"
            value={value}
          >
            {emoji}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <Button
        onClick={() => {
          if (!finished) {
            setFinished(!finished);
            toast.success('Você ganhou 500XP!', toastConfig.success);
            requestFinish();
            route.refresh();
          }
        }}
        variant={finished ? "default" : "outline"}
      >
        {finished ? "Concluído" : "Marcar como concluído"}
      </Button>
      <div className="flex items-center gap-2">
        <ShadProgress value={finished ? 100 : 0} />
        <p className="text-neutral-400 text-sm">{finished ? "100%" : "0%"}</p>
      </div>
    </div>
  );
}

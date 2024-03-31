"use client";
import {
  Card as ShadCard,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Breadcrump from "./breadcrumb";
import Vimeo from "@u-wave/react-vimeo";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export interface IVideoProps {
  lessonName: string;
  vimeoid: string;
  lessonDescription: string;
  findLast: number
  findNext: number
  courseName: string;
  courseId: string
}

export default function Video({ lessonName, lessonDescription, vimeoid, courseName, findLast, findNext, courseId }: IVideoProps) {
  const [loadingVideo, setLoadingVideo] = useState(true);
  const router = useRouter();
  return (
    <ShadCard className="w-full relative">
      <CardHeader>
        <Skeleton
          className={cn(
            "pt-[56.25%] relative rounded-sm",
            !loadingVideo && "animate-none bg-transparent"
          )}
        >
          <Vimeo
            video={vimeoid}
            responsive
            color="#fff"
            showPortrait={false}
            showByline={false}
            transparent={false}
            className="absolute top-0 left-0 right-0 bottom-0 w-full h-full"
            showTitle={false}
            onReady={(e) => {
              setLoadingVideo(false);
            }}
          />
        </Skeleton>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Breadcrump courseName={courseName} />
        <CardTitle>{lessonName}</CardTitle>
        <CardDescription>{lessonDescription}</CardDescription>
        <div className="flex items-center gap-2 min-[1180px]:hidden">
          <Button onClick={() => router.push(`/course/${courseId}/chapter/${findLast}`)} variant={"outline"}><ArrowLeftIcon /></Button>
          <Button onClick={() => router.push(`/course/${courseId}/chapter/${findNext}`)} variant={"outline"}><ArrowRightIcon /></Button>
        </div>
      </CardContent>
    </ShadCard>
  );
}

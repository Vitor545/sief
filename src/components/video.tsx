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

export interface IVideoProps { }

export default function Video(props: IVideoProps) {
  const [loadingVideo, setLoadingVideo] = useState(true);
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
            video="76979871"
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
        <Breadcrump />
        <CardTitle>Análise do fechamento mensal de resultados</CardTitle>
        <CardDescription>
          Elaboração na prática de como construir uma análise robusta de
          fechamento de DRE, Balanço e Fluxo de Caixa.
        </CardDescription>
        <div className="flex items-center gap-2 min-[1180px]:hidden">
          <Button variant={"outline"}><ArrowLeftIcon /></Button>
          <Button variant={"outline"}><ArrowRightIcon /></Button>
        </div>
      </CardContent>
    </ShadCard>
  );
}

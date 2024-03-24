"use client";
import {
  Card as ShadCard,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Breadcrump from "./breadcrumb";
import Vimeo from "@u-wave/react-vimeo";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense, useState } from "react";
import { cn } from "@/lib/utils";

export interface IVideoProps {}

export default function Video(props: IVideoProps) {
  const [loadingVideo, setLoadingVideo] = useState(true);
  console.log(loadingVideo);
  return (
    <ShadCard className="w-full relative">
      <CardHeader>
        {/* <iframe
          src="https://player.vimeo.com/video/739081605?h=1d38369c58"
          width="100%"
          height="428px"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        ></iframe> */}
        <Skeleton
          className={cn(
            "w-full h-[458px] rounded-sm",
            !loadingVideo && "animate-none"
          )}
        >
          {/* <Vimeo
            video="739081605"
            responsive
            showTitle={false}
            onReady={(e) => {
              setLoadingVideo(false);
            }}
          /> */}
        </Skeleton>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Breadcrump />
        <CardTitle>Análise do fechamento mensal de resultados</CardTitle>
        <CardDescription>
          Elaboração na prática de como construir uma análise robusta de
          fechamento de DRE, Balanço e Fluxo de Caixa.
        </CardDescription>
      </CardContent>
    </ShadCard>
  );
}

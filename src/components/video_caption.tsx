import {
    Card as ShadCard,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "./ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import VideoAula from "./video_aula";

export interface IVideoCaptionProps {
}

export default function VideoCaption(props: IVideoCaptionProps) {
    return (
        <ShadCard>
            <CardHeader className="flex justify-between items-center flex-row">
                <CardTitle>Conteúdos</CardTitle>
                <div className="flex items-center gap-2">
                    <Button variant={"outline"}><ArrowLeftIcon /></Button>
                    <Button variant={"outline"}><ArrowRightIcon /></Button>
                </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 p-0">
                <VideoAula />
                <VideoAula />
                <VideoAula />
                <VideoAula />
                <VideoAula />
            </CardContent>
        </ShadCard>
    );
}

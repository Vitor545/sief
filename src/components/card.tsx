import {
    Card as ShadCard,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { toastConfig } from "@/utils/toast";
import { LockOpen1Icon } from "@radix-ui/react-icons";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";


export interface ICardProps {
    name: string;
    img: string;
    blocked: boolean;
    progress: number;
    courseid?: number;
    lessonid?: number;
    descriptioncourse?: string;
}

export default function Card({ name, img, blocked, progress, lessonid, courseid, descriptioncourse }: ICardProps) {
    const router = useRouter();
    return (
        <ShadCard className="max-w-96 w-full cursor-pointer" onClick={() => {
            if (blocked) return toast.error('O curso ainda está bloqueado!', toastConfig.error);
            router.push(`/course/${courseid}/chapter/${lessonid}`)
        }}>
            <CardHeader>
                <div className="relative">
                    <Image src={img}
                        alt="sief logo"
                        width={100}
                        height={100}
                        className="w-full rounded-xl h-full object-cover max-h-56 min-h-56"
                    />
                    {blocked && (
                        <div className="bg-background p-2 rounded-full absolute top-3 right-3">
                            <LockOpen1Icon className="w-4 h-4" />
                        </div>
                    )}
                </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                <CardTitle>{name}</CardTitle>
                <CardDescription className="max-h-32 min-h-32 h-full text-ellipsis overflow-hidden">{descriptioncourse}</CardDescription>
            </CardContent>
            <CardFooter>
                <Progress value={progress} />
            </CardFooter>
        </ShadCard>
    );
}

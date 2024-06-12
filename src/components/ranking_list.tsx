import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export interface IRankingListProps {
    pontos: number;
    imageurl: string;
    position: number;
    nameuser: string;
}

export default function RankingList({ pontos, imageurl, nameuser, position }: IRankingListProps) {
    return (
        <li className="list-none py-4 px-8 border-b-[1px] border-foreground/10 flex items-center justify-between">
            <div className="flex gap-4 items-center">
                <p className="font-medium">{position + 1}</p>
                <Avatar className="max-[500px]:w-6 max-[500px]:h-6 max-[900px]:w-8 max-[900px]:h-8 w-12 h-12">
                    <AvatarImage src={imageurl} />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p className="font-medium text-ellipsis max-w-96 overflow-hidden text-nowrap">{nameuser}</p>
            </div>
            <p className="font-medium">{pontos} <span className="text-neutral-500">XP</span></p>
        </li>
    );
}

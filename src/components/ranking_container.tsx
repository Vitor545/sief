import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export interface IRankingListProps {
    children: React.ReactNode;
}

export default function RankingContainer({ children }: IRankingListProps) {
    return (
        <ul className="bg-foreground/5 rounded-t-lg max-w-2xl mx-auto mt-9 w-full">
            {children}
        </ul>
    );
}

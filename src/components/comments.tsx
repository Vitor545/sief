import { Textarea } from "@/components/ui/textarea"
import CheckButton from "@/components/check_button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "./ui/button";
import Comment from "./comment";


export interface ICommentsProps {
}

export default function Comments(props: ICommentsProps) {
    return (
        <div className="flex gap-8 item w-full justify-between">
            <div className="flex flex-col w-full">
                <h4 className="font-semibold mb-4">7 Comentários</h4>
                <div className="flex items-start gap-4 mb-8">
                    <Avatar className="w-12 h-12">
                        <AvatarImage src="https://github.com/vitor545.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col items-end w-full gap-4">
                        <Textarea placeholder="Escreva um comentário..." className="w-full" />
                        <Button>Publicar</Button>
                    </div>
                </div>
                <Comment />
                <Comment />
                <Comment />
            </div>
            <CheckButton />
        </div>
    );
}

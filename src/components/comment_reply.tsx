import { ResetIcon } from '@radix-ui/react-icons';
import * as React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export interface ICommentReplyProps {
}

export default function CommentReply(props: ICommentReplyProps) {
    return (
        <div className="flex gap-4 items-start p-4 border-l-[1px] border-blend-darken">
            <Avatar className="w-12 h-12">
                <AvatarImage src="https://github.com/vitor545.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                    <p className="font-semibold whitespace-nowrap">Vitor Souza da Silva</p>
                    <p className="text-sm whitespace-nowrap">1 hora atrás</p>
                </div>
                <div className="w-full">
                    Um ponto de atenção, não sei se ainda está valendo:
                    Alguns meses atrás tentei usar Semáforo na empresa e não funcionou porque subíamos uma imagem Docker no Linux, e o Semáforo não tem suporte no Linux pro Dotnet Core.
                </div>
            </div>
        </div>
    );
}

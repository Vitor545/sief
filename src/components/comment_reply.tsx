import { ResetIcon } from '@radix-ui/react-icons';
import * as React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export interface ICommentReplyProps {
}

export default function CommentReply(props: ICommentReplyProps) {
    return (
        <div className="flex max-[600px]:gap-2 gap-4 items-start p-4 max-[600px]:p-2 border-l-[1px] border-blend-darken">
            <Avatar className="max-[500px]:w-6 max-[500px]:h-6 max-[900px]:w-8 max-[900px]:h-8 w-12 h-12">
                <AvatarImage src="https://github.com/vitor545.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                    <p className="font-semibold whitespace-nowrap max-[600px]:text-sm">Vitor Souza da Silva</p>
                    <p className="text-sm max-[600px]:text-xs whitespace-nowrap">1 hora atrás</p>
                </div>
                <p className="w-full text-sm max-[400px]:max-w-[250px] max-[600px]:text-sm">
                    Um ponto de atenção, não sei se ainda está valendo:
                    Alguns meses atrás tentei usar Semáforo na empresa e não funcionou porque subíamos uma imagem Docker no Linux, e o Semáforo não tem suporte no Linux pro Dotnet Core.
                </p>
            </div>
        </div>
    );
}

import * as React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import moment from 'moment';
import 'moment/locale/pt-br'


export interface ICommentProps {
    commenttext: string;
    commentdate: string;
    nameuser: string;
    imageurl: string;
}

export default function Comment({ commenttext, commentdate, nameuser, imageurl }: ICommentProps) {
    return (
        <div className="flex gap-4  max-[600px]:gap-2 items-start p-4 max-[600px]:p-2 border-l-[1px] border-blend-darken">
            <Avatar className="max-[500px]:w-6 max-[500px]:h-6 max-[900px]:w-8 max-[900px]:h-8 w-12 h-12">
                <AvatarImage src={imageurl} />
                <AvatarFallback>{nameuser?.toLocaleUpperCase()?.slice(0, 2)}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
                <div className="flex items-center gap-4 mb-2">
                    <p className="font-semibold whitespace-nowrap max-[600px]:text-sm">{nameuser}</p>
                    <p className="text-sm max-[600px]:text-xs whitespace-nowrap">{moment(commentdate).locale('pt-br').fromNow()}</p>
                </div>
                <p className="w-full mb-2  max-[400px]:max-w-[250px] max-[600px]:text-sm">
                    {commenttext}
                </p>
            </div>
        </div>
    );
}

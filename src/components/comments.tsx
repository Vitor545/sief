'use client';
import { Textarea } from "@/components/ui/textarea"
import CheckButton from "@/components/check_button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "./ui/button";
import Comment from "./comment";
import { Progress } from "@/interfaces/CourseDto";
import { Reaction } from "@/interfaces/LessonDto";
import { useUser } from "@clerk/nextjs";
import { api } from "@/lib/axios";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { toastConfig } from "@/utils/toast";
import { useRouter } from "next/navigation";


export interface ICommentsProps {
    progress: Progress
    reactions: Reaction
    lessonid: number
    courseid: number
}

export default function Comments({ progress, reactions, lessonid, courseid }: ICommentsProps) {
    const [comment, setComment] = useState<any>();
    const [commentList, setCommentList] = useState<any>([]);
    const { user } = useUser();
    const route = useRouter();
    const createComment = async () => {
        try {
            await api.post("/comments", {
                lessonid,
                courseid,
                comment,
                fullName: user?.fullName,
                imageUrl: user?.imageUrl,
                userid: user?.id
            })
            getComments()
            toast.success("Comentário criado com sucesso!", toastConfig.success)
        } catch (error) {
            toast.error("Erro ao criar comentário", toastConfig.error)
        }
    }

    const getComments = useCallback(async () => {
        try {
            const comments = await api.get(`/comments/${courseid}/${lessonid}`)
            setCommentList(comments?.data || [])
        } catch (error) {
            toast.error("Erro ao buscar comentários", toastConfig.error)
        }
    }, [courseid, lessonid])

    useEffect(() => {
        getComments()
    }, [getComments])

    return (
        <div className="flex gap-8  item w-full justify-between max-[1180px]:flex-col-reverse max-[1180px]:items-center">
            <div className="flex flex-col w-full">
                <h4 className="font-semibold mb-4 max-[500px]:text-base">{commentList?.length} Comentários</h4>
                <div className="flex items-start gap-4  mb-8">
                    <Avatar className="max-[500px]:w-6 max-[500px]:h-6 max-[900px]:w-8 max-[900px]:h-8 w-12 h-12">
                        <AvatarImage src={user?.imageUrl} />
                        <AvatarFallback>{user?.fullName?.toLocaleUpperCase()?.slice(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col items-end w-full gap-4">
                        <Textarea value={comment} onChange={(e: any) => setComment(e?.target?.value)} placeholder="Escreva um comentário..." className="w-full" />
                        <Button onClick={createComment}>Publicar</Button>
                    </div>
                </div>
                {commentList?.sort((a: { commentdate: string }, b: { commentdate: string }) => {
                    const dateA = new Date(a.commentdate)
                    const dateB = new Date(b.commentdate)
                    return dateA > dateB ? -1 : dateA < dateB ? 1 : 0
                })?.map((comment: any) => (
                    <Comment
                        key={comment?.commentid}
                        commenttext={comment?.commenttext}
                        imageurl={comment?.imageurl}
                        nameuser={comment?.nameuser}
                        commentdate={comment?.commentdate}
                    />))}
            </div>
            <CheckButton courseid={courseid} lessonid={lessonid} progress={progress} reactions={reactions} />
        </div>
    );
}

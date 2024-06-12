import prisma from "@/lib/prismaClient"
import { NextResponse } from 'next/server'
export const revalidate = 0

export async function GET(req: Request) {
    try {
        const findAllProgress = await prisma.progress.findMany({
            where: { completed: true },
        })
        const user_info = {} as { [key: string]: { pontos: number, imageurl: string, nameuser: string } };
        
        findAllProgress.forEach(registro => {
            const userid = registro?.userid as string;
            if (!user_info[userid]) {
                user_info[userid] = { pontos: 0, imageurl: registro?.imageurl as string, nameuser: registro?.nameuser as string };
            }
            if (registro?.completed) {
                user_info[userid].pontos += 500;
            }
        });
        return NextResponse.json(Object.values(user_info || {}), { status: 200 })
    } catch (error) {
        console.log("[COURSE]", error)
        return new NextResponse('Erro ao buscar os cursos', { status: 500 })
    } finally {
        await prisma.$disconnect()
    }
}


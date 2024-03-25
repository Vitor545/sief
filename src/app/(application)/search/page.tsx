'use client';

import { notFound } from "next/navigation";
import Lottie from "lottie-react";
import bear from "@/assets/bear.json";

export default function Search({ searchParams }: { searchParams: { name: string } }) {
    if (!searchParams?.name) {
        return notFound();
    }
    return (
        <main className="container sm:px-16 text-center p-8 pt-28 flex flex-col gap-6">
            <h3 className="font-medium">Pesquisa para {'"' + searchParams?.name + '"'}</h3>
            <div className="m-auto flex items-center flex-col mt-8">
                <Lottie className="w-96 " animationData={bear} loop={true} />
                <h4 className="text-center my-1 font-medium">Nenhum conteúdo correspondente</h4>
                <h5 className="text-center text-neutral-400">Verifique sua ortografia ou tente palavras-chave diferentes</h5>
            </div>
        </main>
    );
}

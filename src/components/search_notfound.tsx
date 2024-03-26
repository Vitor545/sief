'use client';
import Lottie from "lottie-react";
import bear from "@/assets/bear.json";

export interface ISearchNotFoundProps {
}

export default function SearchNotFound(props: ISearchNotFoundProps) {
    return (
        <div className="m-auto flex items-center flex-col ">
            <Lottie className="w-96 max-[500px]:w-60" animationData={bear} loop={true} />
            <h4 className="text-center my-1 font-medium">Nenhum conteúdo correspondente</h4>
            <h5 className="text-center text-neutral-400">Verifique sua ortografia ou tente palavras-chave diferentes</h5>
        </div>
    );
}

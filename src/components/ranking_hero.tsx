'use client';
import Lottie from "lottie-react";
import medal from "@/assets/medal2.json";

export interface IRankingHeroProps {
}

export default function RankingHero(props: IRankingHeroProps) {
    return (
        <div className="flex flex-col items-center">
            <Lottie className="w-60 max-[500px]:w-40" animationData={medal} loop={true} />
            <h3 className="font-medium text-center mb-2">Ranking</h3>
            <p className="text-neutral-400 max-w-2xl mx-auto">Maximize seus pontos de experiência através da participação ativa: envie comentários pertinentes, avalie as aulas e conclua todas elas. Mantenha-se dedicado até o final e conclua seu curso com o máximo aproveitamento possível.</p>
        </div>
    );
}

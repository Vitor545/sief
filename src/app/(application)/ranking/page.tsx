import RankingContainer from "@/components/ranking_container";
import RankingHero from "@/components/ranking_hero";
import RankingList from "@/components/ranking_list";
import { api } from "@/lib/axios";


export default async function Ranking() {
    const ranking = await api.get("/ranking");
    return (
        <main className="container sm:px-16 text-center p-8 pt-28 flex flex-col gap-6">
            <RankingHero />
            <RankingContainer>
                {
                    ranking?.data?.sort((el: any) => el?.pontos)?.map((el: any, index: number) => (
                        <RankingList key={el.imageurl} {...el} position={index} />
                    ))
                }
            </RankingContainer>
        </main>
    );
}

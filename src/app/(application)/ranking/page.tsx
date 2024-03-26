import RankingContainer from "@/components/ranking_container";
import RankingHero from "@/components/ranking_hero";
import RankingList from "@/components/ranking_list";


export default function Ranking() {
    return (
        <main className="container sm:px-16 text-center p-8 pt-28 flex flex-col gap-6">
            <RankingHero />
            <RankingContainer>
                <RankingList />
                <RankingList />
                <RankingList />
                <RankingList />
            </RankingContainer>
        </main>
    );
}

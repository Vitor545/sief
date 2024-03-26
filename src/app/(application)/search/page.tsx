import SearchNotFound from "@/components/search_notfound";
import { notFound } from "next/navigation";


export default function Search({ searchParams }: { searchParams: { name: string } }) {
    if (!searchParams?.name) {
        return notFound();
    }
    return (
        <main className="container sm:px-16 text-center p-8 pt-28 flex flex-col gap-6">
            <h3 className="font-medium text-center mb-8">Pesquisa para {'"' + searchParams?.name + '"'}</h3>
            <SearchNotFound />
        </main>
    );
}

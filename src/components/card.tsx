import {
    Card as ShadCard,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Image from "next/image";
import Link from "next/link";


export interface ICardProps {
}

export default function Card({ }: ICardProps) {
    return (
        <Link href={'/course/1'}>
            <ShadCard className="max-w-96 w-full">
                <CardHeader>
                    <Image src="https://media.istockphoto.com/id/1322173172/pt/foto/in-this-photo-illustration-being-displayed-one-hundred-and-two-hundred-reais-bills-and-a-one.jpg?s=612x612&w=0&k=20&c=-Qy3mAvDALkQsOjBDgIZY0I1QmLZrIM6w-wt3DR1cRo="
                        alt="sief logo"
                        width={100}
                        height={100}
                        className="w-full rounded-xl"
                    />
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                    <CardTitle>Análise do fechamento mensal de resultados</CardTitle>
                    <CardDescription>Elaboração na prática de como construir uma análise robusta de fechamento de DRE, Balanço e Fluxo de Caixa.</CardDescription>
                </CardContent>
                <CardFooter>
                    <Progress value={33} />
                </CardFooter>
            </ShadCard>
        </Link>
    );
}

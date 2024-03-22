import {
    Card as ShadCard,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image";
import Breadcrump from "./breadcrumb";


export interface IVideoProps {
}

export default function Video(props: IVideoProps) {
    return (
        <ShadCard className="w-full">
            <CardHeader>
                <Image src="https://media.istockphoto.com/id/1322173172/pt/foto/in-this-photo-illustration-being-displayed-one-hundred-and-two-hundred-reais-bills-and-a-one.jpg?s=612x612&w=0&k=20&c=-Qy3mAvDALkQsOjBDgIZY0I1QmLZrIM6w-wt3DR1cRo="
                    alt="sief logo"
                    width={518}
                    height={518}
                    className="h-[468px] w-full rounded-xl max-[800px]:h-[300px] max-[600px]:h-[200px]"
                />
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                <Breadcrump />
                <CardTitle>Análise do fechamento mensal de resultados</CardTitle>
                <CardDescription>Elaboração na prática de como construir uma análise robusta de fechamento de DRE, Balanço e Fluxo de Caixa.</CardDescription>
            </CardContent>
        </ShadCard>
    );
}

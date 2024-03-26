'use client'
import { Button } from "@/components/ui/button";
import Lottie from "lottie-react";
import main from "@/assets/main.json";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

export default function LandingPage() {
  const { userId } = useAuth()
  return (
    <main className="container p-16 pt-28 flex gap-6 max-[1180px]:flex-col">
      <div className="flex flex-col mt-16 w-full max-[1180px]:items-center">
        <h1 className="font-extrabold max-sm:text-4xl max-w-[600px] w-full text-start mb-6 max-[1180px]:text-center">O melhor jeito de <span className="text-emerald-500">aprender</span> sobre finanças</h1>
        <p className="text-neutral-400 max-sm:text-sm max-w-2xl mb-16 max-[1180px]:text-center">Bem-vindo à sua jornada rumo à liberdade financeira com a nossa plataforma educacional líder no mercado. Prepare-se para aprender e dominar as habilidades essenciais que o capacitarão a tomar as rédeas de suas finanças e a alcançar seus objetivos financeiros.</p>
        <div className="flex gap-4 items-center">
          <Link href={userId ? '/home' : "/sign-up"}><Button size={"lg"} className="w-fit py-6">Comece agora</Button></Link>
          <Link href={userId ? '/home' : "/sign-in"}><Button size={"lg"} variant={"outline"} className="w-fit py-6">Já tenho conta</Button></Link>
        </div>
      </div>
      <Lottie className="w-full mt-16" animationData={main} loop={true} />
    </main>
  );
}

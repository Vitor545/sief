"use client";
import { BarChartIcon, MagnifyingGlassIcon, StarFilledIcon } from "@radix-ui/react-icons";
import { NextPage } from "next";
import SidebarItem from "./sidebar-item";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { cn } from "@/lib/utils";

interface Props { }

const guestRoutes = [
    {
        icon: BarChartIcon,
        label: "Início",
        href: "/home",
    },
    {
        icon: StarFilledIcon,
        label: "Ranking",
        href: "/ranking",
    },
];


const SidebarRoutes: NextPage<Props> = ({ }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const pathname = usePathname();
    const routes = guestRoutes;
    const { userId } = useAuth();
    const router = useRouter();
    return (
        <div className="flex flex-col w-full">
            <div className="min-[950px]:hidden flex items-center gap-4 w-full p-6">
                <Input onChange={(e) => setSearchTerm(e.target.value)} onKeyDown={(e: any) => e.key === "Enter" && e.currentTarget.value && router.push('/search?name=' + e.currentTarget.value)} placeholder="Pesquisar" className={cn("w-full max-[370px]:hidden max-[500px]:max-w-24", (pathname === "/" || !userId) && "hidden")} />
                <Button className={cn("p-0 w-8 h-8 max-[370px]:hidden", (pathname === "/" || !userId) && "hidden")} size={"sm"} onClick={() => {
                    searchTerm && router.push('/search?name=' + searchTerm);
                }}>
                    <MagnifyingGlassIcon className="h-5 w-5" />
                </Button >
            </div>
            {routes.map((route) => (
                <SidebarItem
                    key={route.href}
                    icon={route.icon}
                    label={route.label}
                    href={route.href}
                />
            ))}
        </div>
    );
};

export default SidebarRoutes;

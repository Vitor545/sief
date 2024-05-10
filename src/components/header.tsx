'use client'
import * as React from "react";
import { HamburgerMenuIcon, MagnifyingGlassIcon, ReloadIcon } from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "./mode_toggle";
import { SignInButton, SignedIn, SignedOut, UserButton, useAuth } from "@clerk/nextjs";
import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";

import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";

export interface IHeaderProps { }

export default function Header(props: IHeaderProps) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const pathname = usePathname();
  const {userId} = useAuth();
  const router = useRouter();
  return (
    <header className="z-[9000] w-full  border-0 border-b-2 border-blend-darken fixed top-0 left-0 bg-background">
      <div className="px-6 flex h-20 w-full items-center justify-between">
        <div className="flex items-center">
          <HamburgerMenuIcon className="w-4 h-4 mr-4 cursor-pointer" />
          <Link href="/home">
           <Image src='/logo.png' alt="sief logo" width={100} height={100} />
          </Link>
        </div>
        <div className="flex items-center gap-4 w-full justify-end">
          <div className="flex items-center gap-4 w-full justify-end">
            <Input onChange={(e) => setSearchTerm(e.target.value)} onKeyDown={(e) => e.key === "Enter" && e.currentTarget.value && router.push('/search?name=' + e.currentTarget.value)} placeholder="Pesquisar" className={cn("max-w-48 md:max-w-sm w-full max-[370px]:hidden max-[500px]:max-w-24", (pathname === "/" || !userId) && "hidden")} />
            <Button className={cn("p-0 w-8 h-8 max-[370px]:hidden", (pathname === "/" || !userId) && "hidden")} size={"sm"} onClick={() => {
              searchTerm && router.push('/search?name=' + searchTerm);
            }}>
              <MagnifyingGlassIcon className="h-5 w-5" />
            </Button >
          </div>
          <ModeToggle />
          <ClerkLoading>
            <ReloadIcon className="h-5 w-5 text-muted-foreground animate-spin" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedIn>
              <UserButton afterSignOutUrl="/sign-in" />
            </SignedIn>
            <SignedOut>
              <SignInButton
                mode="redirect"
              >
                <Button size="lg">Entrar</Button>
              </SignInButton>
            </SignedOut>
          </ClerkLoaded>
        </div>
      </div>
    </header>
  );
}

import * as React from "react";
import { HamburgerMenuIcon, ReloadIcon } from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "./mode_toggle";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";

import Link from "next/link";
import { Button } from "./ui/button";

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  return (
    <header className="z-[9000] w-full  border-0 border-b-2 border-blend-darken fixed top-0 left-0 bg-background">
      <div className="px-6 flex h-20 w-full items-center justify-between">
        <div className="flex items-center w-full">
          <HamburgerMenuIcon className="w-4 h-4 mr-4 cursor-pointer" />
          <Link href="/home">
            <h5 className="font-semibold">SIEF</h5>
          </Link>
        </div>
        <div className="flex items-center gap-4 w-full justify-end">
          <Input placeholder="Pesquisar" className="max-w-96 w-full" />
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
                afterSignInUrl="/home"
                afterSignUpUrl="/home"
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

import * as React from 'react';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { Input } from "@/components/ui/input"
import { ModeToggle } from './mode_toggle';
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";

import Link from 'next/link';
import { Button } from './ui/button';


export interface IHeaderProps {
}

export default function Header(props: IHeaderProps) {
  return (
    <header className='w-full h-20 border-0 border-b-2 border-blend-darken fixed top-0 left-0 bg-background'>
      <div className='px-6 flex items-center h-full justify-between'>
        <div className='flex items-center'>
          <HamburgerMenuIcon className='w-4 h-4 mr-4 cursor-pointer' />
          <Link href={'/'}>
            <h5 className='font-semibold'>SIEF</h5>
          </Link>
        </div>
        <div className='flex items-center gap-4'>
          <Input placeholder="Pesquisar" />
          <ModeToggle />
          <ClerkLoading>
            <HamburgerMenuIcon className='h-5 w-5 text-muted-foreground animate-spin' />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton mode='redirect' afterSignInUrl='/home' afterSignUpUrl='/home'>
                <Button size='lg'>Entrar</Button>
              </SignInButton>
            </SignedOut>
          </ClerkLoaded>
        </div>
      </div>
    </header>
  );
}

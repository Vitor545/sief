import * as React from 'react';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { Input } from "@/components/ui/input"
import { ModeToggle } from './mode_toggle';
import Link from 'next/link';


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
        <div className='flex items-center gap-4 w-1/3'>
          <Input placeholder="Pesquisar" />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}

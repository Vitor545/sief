import Image from 'next/image';
import * as React from 'react';

export interface IVideoAuloProps {
}

export default function VideoAula(props: IVideoAuloProps) {
  return (
    <div className="p-4 flex items-center gap-4 cursor-pointer hover:bg-primary/10">
      <Image src="https://media.istockphoto.com/id/1322173172/pt/foto/in-this-photo-illustration-being-displayed-one-hundred-and-two-hundred-reais-bills-and-a-one.jpg?s=612x612&w=0&k=20&c=-Qy3mAvDALkQsOjBDgIZY0I1QmLZrIM6w-wt3DR1cRo="
        alt="sief logo"
        width={86}
        height={16}
        className="rounded-lg"
      />
      <p className="max-w-[250px] w-full">Delegates e Events, Async-Await, Semáforos e Locks, Coleções Concorrentes</p>
    </div>
  );
}

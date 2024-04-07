'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Logo from '@/components/animated-logo';
import { ArcanixButton } from '@/components/custom-button';

export default function Home() {
  return (
    <div className="relative inset-0 flex items-start justify-center w-full h-screen">
      <div className="mt-48 flex items-center justify-center flex-col gap-8">
        {/* <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-neutral-100 to-neutral-300">
          Innovative UI library for devepolers
        </h1>
        <p className="text-2xl text-muted-foreground text-center max-w-2xl">
          Arcanix UI is a modern UI library that helps developers build{' '}
          <span className="font-bold text-foreground">fast</span> and{' '}
          <span className="font-bold text-foreground">beautiful</span> web applications.
        </p>

        <div className="flex items-center justify-center gap-4">
          <ArcanixButton className="bg-highlight hover:bg-highlight/70">Get Started</ArcanixButton>
          <ArcanixButton variant="ghost">Read Docs</ArcanixButton>
        </div> */}
        <Logo/>
      </div>
    </div>
  );
}

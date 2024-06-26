'use client';
import Logo from '@/components/ui/logo';
import { ModeToggle } from './mode-toggle';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NavBar() {
  return (
    <header
      className={' flex items-center justify-center w-full h-16 fixed top-0 backdrop-blur-sm z-50'}
    >
      <nav className="flex items-center justify-between w-3/4 self-center h-16 relative top-0">
        <div className="flex items-center justify-center gap-10">
          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            transition={{ type: 'spring', stiffness: 200, damping: 10 }}
          >
            <Link href="/" className="flex items-center justify-center gap-2">
              <Logo className="w-8 h-8" />
              <h1 className="font-semibold leading-5 text-2xl">Arcanix UI</h1>
            </Link>
          </motion.div>

          <Link href="docs">
            <p className="text-md font-medium text-muted-foreground cursor-pointer duration-300 hover:text-muted-foregroundLight ">
              Docs
            </p>
          </Link>
          <Link href="components">
            <p className="text-md font-medium text-muted-foreground cursor-pointer duration-300 hover:text-muted-foregroundLight ">
              Components
            </p>{' '}
          </Link>
          <Link href="github">
            <p className="text-md font-medium text-muted-foreground cursor-pointer duration-300 hover:text-muted-foregroundLight ">
              GitHub
            </p>{' '}
          </Link>
        </div>
      </nav>
      <ModeToggle />
      <hr className="absolute bottom-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-200/30 to-neutral-200/0" />
    </header>
  );
}

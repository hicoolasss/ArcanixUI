import { animate, motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef, use } from 'react';
import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import {
  ArrowRightIcon,
  IconJarLogoIcon,
  InstagramLogoIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons';

export interface ButtonProps {
  content: string;
  asChild?: boolean;
  className?: string;
}

export const ButtonGooey = ({ content, className, asChild, ...props }: ButtonProps) => {
  const [isOpened, setIsOpened] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    setIsOpened(true);
  }, []);

  const firstBubbleVariants = {
    opened: {
      translateX: buttonRef.current ? `${(buttonRef.current as HTMLElement).offsetWidth / 2 + 45}px` : '0px',
      translateY: '90%',
      transition: {
        type: 'spring',
        damping: 10,
        mass: 0.75,
        stiffness: 100,
      },
    },
    closed: {
      translateX: '0px',
      translateY: '0%',
    },
  };

  const secondBubbleVariants = {
    opened: {
      translateX: buttonRef.current ? `${-(buttonRef.current as HTMLElement).offsetWidth / 2 - 45}px` : '0px',
      translateY: '90%',
      transition: {
        type: 'spring',
        damping: 10,
        mass: 0.75,
        stiffness: 100,
      },
    },
    closed: {
      translateX: '0px',
      translateY: '0%',
    },
  };

  const thirdBubbleVariants = {
    opened: {
      translateX: buttonRef.current ? `${-(buttonRef.current as HTMLElement).offsetWidth / 2 - 45}px` : '0px',
      translateY: '-90%',
      transition: {
        type: 'spring',
        damping: 10,
        mass: 0.75,
        stiffness: 100,
      },
    },
    closed: {
      translateX: '0px',
      translateY: '0%',
    },
  };

  const fourthBubbleVariants = {
    opened: {
      translateX: buttonRef.current ? `${(buttonRef.current as HTMLElement).offsetWidth / 2 + 45}px` : '0px',
      translateY: '-90%',
      transition: {
        type: 'spring',
        damping: 10,
        mass: 0.75,
        stiffness: 100,
      },
    },
    closed: {
      translateX: '0px',
      translateY: '0%',
    },
  };

  return (
    <>
      <AnimatePresence>
        <div
          className={cn([
            'wrapper',
            'relative',
            'flex',
            'flex-col',
            'items-center',
            'justify-center',
            className,
          ])}
        >
          <motion.div
            className="button rounded-3xl p-6 font-bold bg-white text-black inline-flex items-center justify-center cursor-pointer select-none"
            onClick={() => setIsOpened(!isOpened)}
            animate={isOpened ? 'opened' : 'closed'}
            ref={buttonRef}
          >
            {content}
            <motion.div
              className="bubble absolute rounded-3xl bg-highlight text-black -z-10 flex flex-col items-center justify-center w-16 h-16"
              variants={firstBubbleVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{
                type: 'spring',
                damping: 10,
                mass: 0.75,
                stiffness: 100,
              }}
            >
              <Link
                href="https://www.instagram.com/hicoolasss/"
                target="_blank"
                className="flex items-center justify-center w-full h-16"
              >
                <InstagramLogoIcon className="h-6 w-6 text-white" />
              </Link>
            </motion.div>
            <motion.div
              className="bubble absolute rounded-3xl bg-blue-500 text-black -z-10 flex flex-col items-center justify-center w-16 h-16"
              variants={secondBubbleVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{
                type: 'spring',
                damping: 10,
                mass: 0.75,
                stiffness: 100,
              }}
            >
              <Link
                href="https://t.me/hicoolasss"
                target="_blank"
                className="flex items-center justify-center w-full h-16"
              >
                <Telegram className="h-6 w-6 text-white" />
              </Link>
            </motion.div>
            <motion.div
              className="bubble absolute rounded-3xl bg-zinc-900 text-black -z-10 flex flex-col items-center justify-center w-16 h-16"
              variants={thirdBubbleVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{
                type: 'spring',
                damping: 10,
                mass: 0.75,
                stiffness: 100,
              }}
            >
              <Link
                href="https://github.com/hicoolasss"
                target="_blank"
                className="flex items-center justify-center w-full h-16"
              >
                <GitHubLogoIcon className="h-6 w-6 text-white" />
              </Link>
            </motion.div>
            <motion.div
              className="bubble absolute rounded-3xl bg-blue-400 text-black -z-10 flex flex-col items-center justify-center w-16 h-16"
              variants={fourthBubbleVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{
                type: 'spring',
                damping: 10,
                mass: 0.75,
                stiffness: 100,
              }}
            >
              <Link
                href="https://www.linkedin.com/in/ilya-serikov-1ab71a253/"
                target="_blank"
                className="flex items-center justify-center w-full h-16"
              >
                <LinkedInLogoIcon className="h-6 w-6 text-white" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </AnimatePresence>

      <svg
        className="absolute hidden"
        width="0"
        height="0"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>

      <style jsx>
        {`
          .wrapper {
            filter: url('#gooey');
          }

          .button {
            background: #fff;
            color: #000;
            font-size: 1.25rem;
            line-height: 1.25rem;
          }
        `}
      </style>
    </>
  );
};

function Telegram({ className }: { className: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="none"
      color="currentColor"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 5L2 12.5l7 1M21 5l-2.5 15L9 13.5M21 5L9 13.5m0 0V19l3.249-3.277"
      ></path>
    </svg>
  );
}

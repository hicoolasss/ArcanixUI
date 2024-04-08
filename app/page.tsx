'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Logo from '@/components/animated-logo';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArcanixButton } from '@/components/custom-button';
import { useEffect, useState, useRef } from 'react';
import { ButtonGooey } from '@/components/gooyeey-button';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const svgVariants = {
  animate: (i: number) => ({
    scale: [1.05, 1.15, 1.05],
    transition: {
      delay: i * 0.1,
      repeat: Infinity,
      repeatType: 'loop',
      duration: 2,
      ease: 'easeInOut',
      stiffness: 260,
      damping: 20,
    },
  }),
};

const circles = [
  { radius: 375, initialOpacity: 0.05 },
  { radius: 337.5, initialOpacity: 0.16 },
  { radius: 300, initialOpacity: 0.26 },
  { radius: 262.5, initialOpacity: 0.37 },
  { radius: 225, initialOpacity: 0.47 },
  { radius: 187.5, initialOpacity: 0.58 },
  { radius: 150, initialOpacity: 0.68 },
  { radius: 112.5, initialOpacity: 0.79 },
  { radius: 75, initialOpacity: 0.89 },
];

export default function Home() {
  const boxRef = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    // Анимация для плавного появления элемента
    gsap.to(boxRef.current, {
      onComplete: () => {
        // Добавляем задержку перед началом следования за курсором
        setTimeout(() => {
          const moveBox = (event: { clientX: any; clientY: any }) => {
            const { clientX, clientY } = event;
            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;
            const centerX = screenWidth / 2;
            const centerY = screenHeight / 2;
            const diffX = (clientX - centerX) / centerX;
            const diffY = (clientY - centerY) / centerY;
            const maxMove = 25;
            const moveX = diffX * maxMove;
            const moveY = diffY * maxMove;

            gsap.to(boxRef.current, {
              x: moveX,
              y: moveY,
              ease: 'power1.out',
              duration: 0.5,
            });
          };

          window.addEventListener('mousemove', moveBox);

          // Удаляем обработчик события при размонтировании компонента
          return () => {
            window.removeEventListener('mousemove', moveBox);
          };
        }, 500); // Задержка перед началом следования за курсором
      },
    });
  }, []);
  useEffect(() => {
    gsap.to(svgRef.current, {
      onComplete: () => {
        setTimeout(() => {
          const moveSVG = (event: { clientX: any; clientY: any; }) => {
            const { clientX, clientY } = event;
            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;
            const centerX = screenWidth / 2;
            const centerY = screenHeight / 2;
            const diffX = (clientX - centerX) / centerX;
            const diffY = (clientY - centerY) / centerY;
            const maxMove = 25; // Меньшее значение для более ненавязчивого эффекта
            const moveX = diffX * maxMove;
            const moveY = diffY * maxMove;
  
            gsap.to(svgRef.current, {
              x: moveX,
              y: moveY,
              ease: 'power1.out',
              duration: 0.5,
            });
          };
  
          window.addEventListener('mousemove', moveSVG);
  
          // Очистка
          return () => {
            window.removeEventListener('mousemove', moveSVG);
          };
        }, 500);
      },
    });
  }, []);

  return (
    <div className="relative inset-0 flex items-start justify-center w-full h-screen">
      <div className="mt-48 flex items-center justify-center flex-col gap-8 relative">
        <motion.div
          ref={boxRef}
          id="button"
          className="absolute -top-10 -left-10"
          initial={{ opacity: 0, y: -30, x: -30, rotate: 0 }}
          animate={{ opacity: 1, y: 0, x: 0, rotate: -15 }}
          transition={{
            type: 'spring',
            damping: 10,
            mass: 0.75,
            stiffness: 100,
          }}
        >
          <ButtonGooey content="Click Me!"></ButtonGooey>
        </motion.div>
        {/* <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="absolute -top-24 -right-24 w-48 h-48 z-0"
          viewBox="0 0 800 800"
          ref={svgRef}
          initial={{ opacity: 0, }}
          animate={{ opacity: 1, }}
          transition={{
            type: 'spring',
            damping: 10,
            mass: 0.75,
            stiffness: 100,
          }}
        >
          <defs>
            <radialGradient id="cccircular-grad" r="50%" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#c50054" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#ff0080" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#ff5daf" stopOpacity="0.5" />
            </radialGradient>
          </defs>
          <g fill="url(#cccircular-grad)">
            {circles.map((circle, index) => (
              <motion.circle
                key={circle.radius}
                r={circle.radius}
                cx={400}
                cy={400}
                variants={svgVariants}
                animate="animate"
                custom={index}
                opacity={circle.initialOpacity}
              />
            ))}
          </g>
        </motion.svg> */}
        
        <div className="flex items-center justify-center flex-col gap-2">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-7xl hover:scale-105 transition duration-200 ease-linear">
            Say hello
          </h1>
          <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-neutral-100 to-neutral-500 hover:scale-105 transition duration-200 ease-linear">
            to the new era of web development.
          </h2>
        </div>
        <p className="text-2xl text-muted-foreground text-center max-w-2xl">
          Arcanix UI is a modern UI library that helps developers build{' '}
          <span className="font-bold text-foreground">fast</span> and{' '}
          <span className="font-bold text-foreground">beautiful</span> web applications.
        </p>

        <div className="flex items-center justify-center gap-4">
          <ArcanixButton className="bg-highlight hover:bg-highlight/80 ">Get Started</ArcanixButton>
          <ArcanixButton variant="ghost">Read Docs</ArcanixButton>
        </div>
        <div></div>
      </div>
    </div>
  );
}

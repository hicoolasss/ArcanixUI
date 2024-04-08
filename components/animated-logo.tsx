import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

export default function Logo({ className }: { className?: string }) {
  const [isHovered, setIsHovered] = useState(false);
  gsap.registerPlugin(MotionPathPlugin);
  const timeline = gsap.timeline({ repeat: -1 });

  useGSAP(() => {
    if (isHovered) {
      timeline
        .fromTo(
          '#paint0_radial_10_2',
          { attr: { cx: -1.25, cy: -1.25 }, ease: 'power1.inOut', repeat: -1, duration: 3 },
          { attr: { cx: 2.5, cy: 2.5 }, ease: 'power1.inOut', repeat: -1, duration: 3 }
        )
        .fromTo(
          '#paint1_radial_10_2',
          { attr: { cx: -3, cy: -3 }, ease: 'power1.inOut', repeat: -1, duration: 3 },
          { attr: { cx: 3, cy: 3 }, ease: 'power1.inOut', repeat: -1, duration: 3 },
          '<'
        )
        .fromTo(
          '#paint2_radial_10_2',
          { attr: { cx: 1, cy: 1 }, ease: 'power1.inOut', repeat: -1, duration: 3 },
          { attr: { cx: -1, cy: -1 }, ease: 'power1.inOut', repeat: -1, duration: 3 },
          '<'
        )
        .fromTo(
          '#logo',
          { attr: { fill: 'white' }, ease: 'power1.inOut', duration: 1.5 },
          { attr: { fill: '#FF0080' }, ease: 'power1.inOut', duration: 1.5 },
          '<1'
        );
    } else {
      timeline.kill();
    }
  }, [isHovered]);

  return (
    <svg
      width="617"
      height="284"
      viewBox="0 0 417 184"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-48 "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <path
        id="logo"
        d="M242.367 165.312H196.287V153.92C196.287 153.92 200.767 155.328 205.759 155.328C211.519 155.328 216.382 154.176 220.607 151.744L219.199 149.312C215.487 151.488 211.007 152.64 205.759 152.64C190.143 152.64 183.871 138.432 183.871 132.544C183.871 128.064 184.639 121.28 188.607 115.264L186.303 113.856C182.079 120.384 181.183 127.68 181.183 132.544C181.183 133.184 181.183 133.696 181.311 134.336C176.319 133.824 172.735 130.624 170.687 126.784L195.903 80.448L242.367 165.312Z"
        fill="white"
      />
      <path d="M300 0V31.5H220V63.5H196V80" stroke="url(#paint0_radial_10_2)" strokeWidth={2} />
      <path
        d="M417 103H353.5V137.5H319.5V171.5H268.5C252.723 189.432 241.801 174.445 243 165"
        stroke="url(#paint1_radial_10_2)"
        strokeWidth={2}
      />
      <path
        d="M0 103H64.5V137.5H98.5V166H150C149.824 138.605 153 127 171 127"
        stroke="url(#paint2_radial_10_2)"
        strokeWidth={2}
      />
      <defs>
        <radialGradient
          id="paint0_radial_10_2"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(272 32) rotate(90) scale(47.5 53.2428)"
        >
          <stop stop-color="#FF0080" />
          <stop offset="1" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="paint2_radial_10_2"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(100.136 133.396) rotate(90) scale(100.5 84.9474)"
        >
          <stop stop-color="#FF0080" />
          <stop offset="1" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_10_2"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(332.769 140.095) rotate(90) scale(37.6839 76.2292)"
        >
          <stop stop-color="#FF0080" />
          <stop offset="1" stop-opacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

// const generateRandomPaths = (numPaths: number, numSegments: number, segmentLength: number) => {
//   const paths: string[] = [];

//   for (let i = 0; i < numPaths; i++) {
//     let path = `M ${segmentLength} ${segmentLength} `;
//     let x = segmentLength;
//     let y = segmentLength;

//     for (let j = 0; j < numSegments; j++) {
//       const direction = Math.random() < 0.5 ? 1 : -1;
//       const offsetX = Math.random() * segmentLength * direction;
//       const offsetY = Math.random() * segmentLength * direction;

//       x += segmentLength + offsetX;
//       y += segmentLength + offsetY;

//       path += `L ${x} ${y} `;
//     }

//     path += `L ${segmentLength * numSegments} ${segmentLength * numSegments} L ${segmentLength} ${segmentLength * numSegments} Z`;

//     paths.push(path);
//   }

//   return paths;
// };
{
  /* {paths.map((path, i) => (
            <path
              key={i}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: [0, 1, 0], opacity: [0, 1, 0] }}
              transition={{
                duration: 5,
                ease: 'easeInOut',
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
              stroke="url(#grad1)"
              stroke-linecap="round"
              stroke-width="1.5"
              d={path}
            />
          ))} */
}

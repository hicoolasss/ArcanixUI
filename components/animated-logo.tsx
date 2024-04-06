import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

export default function Logo({ className }: { className?: string }) {
  const topControls = useAnimation();
  const leftControls = useAnimation();
  const rightControls = useAnimation();

  useEffect(() => {
    topControls.start({
      cx: [-1, 3],
      cy: [-1, 3],
      transition: { duration: 5, repeat: Infinity, type: 'tween', delay: 0.5 },
    });
    leftControls.start({
      cx: [3, -3],
      cy: [3, -3],
      transition: { duration: 5, repeat: Infinity, type: 'tween', delay: 1 },
    });
    rightControls.start({
      cx: [-2, 3],
      cy: [-2, 3],
      transition: { duration: 5, repeat: Infinity, type: 'tween', delay: 1.5 },
    });
  }, []);
  return (
    <motion.svg
      width="617"
      height="284"
      viewBox="0 0 417 184"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-48 "
    >
      <motion.path
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
        <motion.radialGradient
          id="paint0_radial_10_2"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(272 32) rotate(90) scale(47.5 53.2428)"
          animate={topControls}
        >
          <stop stop-color="#FF0080" />
          <stop offset="1" stop-opacity="0" />
        </motion.radialGradient>
        <motion.radialGradient
          id="paint2_radial_10_2"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(100.136 133.396) rotate(90) scale(100.5 84.9474)"
          animate={leftControls}
        >
          <stop stop-color="#FF0080" />
          <stop offset="1" stop-opacity="0" />
        </motion.radialGradient>
        <motion.radialGradient
          id="paint1_radial_10_2"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(332.769 140.095) rotate(90) scale(37.6839 76.2292)"
          animate={rightControls}
        >
          <stop stop-color="#FF0080" />
          <stop offset="1" stop-opacity="0" />
        </motion.radialGradient>
      </defs>
    </motion.svg>
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
            <motion.path
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

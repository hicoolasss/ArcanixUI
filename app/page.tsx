'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
export default function Home() {
  const [paths] = useState(generateRandomPaths(10, 10, 20));

  return (
    <div className="inset-0 flex items-center justify-center w-full h-screen ">
      <div className="w-[392px] h-[258px] relative">
        <svg
          className="relative rounded-lg"
          height="258"
          width="392"
          viewBox="0 0 392 258"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="grad1" cx="50%" cy="50%" r="80%" fx="50%" fy="50%">
              <stop offset="0%" style={{ stopColor: 'rgba(255, 255, 255, 1)' }} />
              <stop offset="100%" style={{ stopColor: 'rgba(0, 0, 0, 1)' }} />
            </radialGradient>
            <mask id="mask1" maskUnits="userSpaceOnUse" x="0" y="0" width="392" height="258">
              <rect width="392" height="258" style={{ fill: 'url(#grad1)' }} />
            </mask>
          </defs>
          <g opacity="0.08" stroke="#fff" mask="url(#mask1)">
            <line x2="392" y1="15.5" y2="15.5"></line>
            <line x2="392" y1="31.5" y2="31.5"></line>
            <line x2="392" y1="47.5" y2="47.5"></line>
            <line x2="392" y1="63.5" y2="63.5"></line>
            <line x2="392" y1="79.5" y2="79.5"></line>
            <line x2="392" y1="95.5" y2="95.5"></line>
            <line x2="392" y1="111.5" y2="111.5"></line>
            <line x2="392" y1="127.5" y2="127.5"></line>
            <line x2="392" y1="143.5" y2="143.5"></line>
            <line x2="392" y1="159.5" y2="159.5"></line>
            <line x2="392" y1="175.5" y2="175.5"></line>
            <line x2="392" y1="191.5" y2="191.5"></line>
            <line x2="392" y1="207.5" y2="207.5"></line>
            <line x2="392" y1="223.5" y2="223.5"></line>
            <line x2="392" y1="239.5" y2="239.5"></line>
            <line x2="392" y1="255.5" y2="255.5"></line>
            <line x1="11.9999" x2="11.9999" y1="2.18557e-08" y2="256"></line>
            <line x1="27.9999" x2="27.9999" y1="2.18557e-08" y2="256"></line>
            <line x1="43.9999" x2="43.9999" y1="2.18557e-08" y2="256"></line>
            <line x1="59.9999" x2="59.9999" y1="2.18557e-08" y2="256"></line>
            <line x1="75.9999" x2="75.9999" y1="2.18557e-08" y2="256"></line>
            <line x1="91.9999" x2="91.9999" y1="2.18557e-08" y2="256"></line>
            <line x1="108" x2="108" y1="2.18557e-08" y2="256"></line>
            <line x1="124" x2="124" y1="2.18557e-08" y2="256"></line>
            <line x1="140" x2="140" y1="2.18557e-08" y2="256"></line>
            <line x1="156" x2="156" y1="2.18557e-08" y2="256"></line>
            <line x1="172" x2="172" y1="2.18557e-08" y2="256"></line>
            <line x1="188" x2="188" y1="2.18557e-08" y2="256"></line>
            <line x1="204" x2="204" y1="2.18557e-08" y2="256"></line>
            <line x1="220" x2="220" y1="2.18557e-08" y2="256"></line>
            <line x1="236" x2="236" y1="2.18557e-08" y2="256"></line>
            <line x1="252" x2="252" y1="2.18557e-08" y2="256"></line>
            <line x1="268" x2="268" y1="2.18557e-08" y2="256"></line>
            <line x1="284" x2="284" y1="2.18557e-08" y2="256"></line>
            <line x1="300" x2="300" y1="2.18557e-08" y2="256"></line>
            <line x1="316" x2="316" y1="2.18557e-08" y2="256"></line>
            <line x1="332" x2="332" y1="2.18557e-08" y2="256"></line>
            <line x1="348" x2="348" y1="2.18557e-08" y2="256"></line>
            <line x1="364" x2="364" y1="2.18557e-08" y2="256"></line>
            <line x1="380" x2="380" y1="2.18557e-08" y2="256"></line>
          </g>
          {/* {paths.map((path, i) => (
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
        ))} */}
        </svg>

        <svg
          className="absolute bottom-0 right-0"
          data-position="bottom-right"
          fill="none"
          height="67"
          viewBox="0 0 221 67"
          width="221"
        >
          <motion.path
            initial={{ pathLength: 0.5, opacity: 0 }}
            animate={{ pathLength: [1, 0, 1], opacity: [1, 0, 1] }}
            transition={{
              duration: 5,
              ease: 'easeInOut',
              repeat: Infinity,
            }}
            stroke="#fff"
            stroke-linecap="round"
            stroke-width="1.9383882233814802"
            d="M220.5 1.5H178C177.448 1.5 177 1.94772 177 2.5V32.5C177 33.0523 176.552 33.5 176 33.5H130C129.448 33.5 129 33.9477 129 34.5V58C129 62.1421 125.642 65.5 121.5 65.5H1"
          ></motion.path>
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id=":R3h69pu6rta:"
              x1="167.8970067514456"
              x2="204.138612991228"
              y1="67.427403027541"
              y2="22.702589955879375"
            >
              <stop stop-color="#3291FF" stop-opacity="0"></stop>
              <stop stop-color="#3291FF"></stop>
              <stop offset="1" stop-color="#61DAFB" stop-opacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>

        <svg
          className="absolute bottom-0 left-0"
          data-position="bottom-left"
          fill="none"
          height="35"
          viewBox="0 0 237 35"
          width="237"
        >
          <motion.path
            initial={{ pathLength: 0.5, opacity: 0 }}
            animate={{ pathLength: [1, 0, 1], opacity: [1, 0, 1] }}
            transition={{
              duration: 5,
              ease: 'easeInOut',
              repeat: Infinity,
            }}
            stroke="#fff"
            stroke-linecap="round"
            stroke-width="1.5972243532596622"
            d="M0.5 33.4999L59 33.5C59.5523 33.5 60 33.0619 60 32.5096C60 28.5146 60 13.282 60 2.49741C60 1.94512 60.4477 1.49997 61 1.49997L91 1.49997C91.5523 1.49997 92 1.94769 92 2.49997L92 10C92 14.1422 95.3579 17.5 99.5 17.5L236 17.5001"
          ></motion.path>
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id=":R2h69pu6rta:"
              x1="275.0269950146321"
              x2="138.63060751056764"
              y1="162.23422000650316"
              y2="89.44144499837421"
            >
              <stop stop-color="#3291FF" stop-opacity="0"></stop>
              <stop stop-color="#3291FF"></stop>
              <stop offset="1" stop-color="#61DAFB" stop-opacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

const generateRandomPaths = (numPaths: number, numSegments: number, segmentLength: number) => {
  const paths: string[] = [];

  for (let i = 0; i < numPaths; i++) {
    let path = `M ${segmentLength} ${segmentLength} `;
    let x = segmentLength;
    let y = segmentLength;

    for (let j = 0; j < numSegments; j++) {
      const direction = Math.random() < 0.5 ? 1 : -1;
      const offsetX = Math.random() * segmentLength * direction;
      const offsetY = Math.random() * segmentLength * direction;

      x += segmentLength + offsetX;
      y += segmentLength + offsetY;

      path += `L ${x} ${y} `;
    }

    path += `L ${segmentLength * numSegments} ${segmentLength * numSegments} L ${segmentLength} ${segmentLength * numSegments} Z`;

    paths.push(path);
  }

  return paths;
};
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

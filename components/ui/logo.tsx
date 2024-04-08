import * as React from 'react';

export interface LogoProps {
  className?: string;
  ref?: React.Ref<SVGSVGElement>;
}

function Logo({ className, ref, ...props }: LogoProps) {
  return (
    <svg
      width={14}
      height={17}
      viewBox="0 0 14 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      
      {...props}
    >
      <path
        d="M13.787 16.496h-8.64V14.36s.84.264 1.776.264c1.08 0 1.992-.216 2.784-.672l-.264-.456c-.696.408-1.536.624-2.52.624-2.928 0-4.104-2.664-4.104-3.768 0-.84.144-2.112.888-3.24l-.432-.264c-.792 1.224-.96 2.592-.96 3.504 0 .12 0 .216.024.336-.936-.096-1.608-.696-1.992-1.416L5.075.584l8.712 15.912z"
        fill={'currentColor'}
      />
    </svg>
  );
}

export default Logo;

'use client';

import { cn } from '@/lib/utils';
import { motion, useSpring, useTransform, useInView } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

export default function AnimatedScore({
  radius,
  className,
}: {
  radius: number;
  className: string;
}) {
  const initialPercentage = 20;

  const ref = useRef(null);
  const isInView = useInView(ref);
  const [percentage, setPercentage] = useState(initialPercentage);

  const spring = useSpring(percentage, {
    mass: 0.8,
    stiffness: 50,
    damping: 30,
  });

  const pathLength = useTransform(spring, (current) => current / 100 + 0.01);

  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  );

  useEffect(() => {
    spring.set(percentage);
    if (isInView) {
      setPercentage(100);
    } else {
      setPercentage(initialPercentage);
    }
  }, [isInView, spring, percentage]);

  return (
    <div ref={ref} className="relative h-fit">
      <motion.svg
        width={radius * 2}
        height={radius * 2}
        viewBox={`0 0 ${radius * 2} ${radius * 2}`}
        initial="hidden"
        animate="visible"
        fill={'rgba(0, 0, 0, 0)'}
        className={cn('overflow-visible -rotate-90', className)}
      >
        <motion.circle
          strokeWidth={8}
          cx={radius}
          cy={radius}
          r={radius}
          strokeLinecap={'round'}
          style={{ pathLength: pathLength }}
        />
      </motion.svg>
      <p className="absolute inset-0 flex justify-center items-center">
        <motion.span className="font-semibold text-3xl">{display}</motion.span>
      </p>
    </div>
  );
}

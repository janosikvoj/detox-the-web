'use client';
import AnimateIn from '@/components/ui/animate-in';
import { cn } from '@/lib/utils';
import {
  Bug,
  Eraser,
  Flame,
  HeartCrack,
  ImageDown,
  LucideIcon,
} from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

interface DefectProps {
  icon?: LucideIcon;
  container: {
    w: number;
    h: number;
  };
}

const Defect: React.FC<DefectProps> = ({ icon: Icon, container }) => {
  const [isVisible, setIsVisible] = useState(true);

  const defectIcons = [Bug, HeartCrack, ImageDown, Eraser, Flame];
  Icon = defectIcons[Math.floor(Math.random() * defectIcons.length)];

  const defectColorClasses = [
    'border-rose-700 stroke-rose-100 bg-rose-500 hover:bg-rose-600',
    // 'border-yellow-700 stroke-yellow-100 bg-yellow-500 hover:bg-yellow-600',
    'border-rose-600 stroke-rose-800 bg-rose-400 hover:bg-rose-300',
    // 'border-yellow-600 stroke-yellow-800 bg-yellow-400 hover:bg-yellow-300',
  ];

  const defectAnimationDelays = [
    'delay-0',
    'delay-100',
    'delay-200',
    'delay-300',
    'delay-500',
  ];

  return (
    <button
      onClick={() => setIsVisible(false)}
      className={cn(
        'absolute p-2 rounded border origin-center',
        '-translate-x-1/2 -translate-y-1/2 rotate-45 origin-center',
        'animate-defect animation-ease-in-out-circ',
        !isVisible && 'hidden pointer-events-none',
        defectColorClasses[
          Math.floor(Math.random() * defectColorClasses.length)
        ],
        defectAnimationDelays[
          Math.floor(Math.random() * defectAnimationDelays.length)
        ]
      )}
      style={{
        bottom: container.h * Math.random() ** 5,
        left: container.w * Math.random(),
        rotate: Math.random() * 360 + 'deg',
        scale: (Math.random() + 1) ** 1.1,
      }}
    >
      <Icon
        className="-rotate-45 stroke-inherit"
        vectorEffect="non-scaling-stroke"
      />
    </button>
  );
};

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);

  const [containerSize, setContainerSize] = useState<{
    w: number;
    h: number;
  } | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      setContainerSize({
        w: containerRef.current.clientWidth,
        h: containerRef.current.clientHeight,
      });
    }
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-[90vh] py-8 bg-blue-200 flex items-end overflow-hidden"
    >
      <div className="absolute inset-0">
        {containerSize !== null &&
          Array.from({ length: 200 }).map((_, index) => (
            <Defect key={index} container={containerSize} />
          ))}
      </div>

      <AnimateIn>
        <div className="relative container z-10 pointer-events-none">
          <h1 className="scroll-m-20 text-4xl sm:text-6xl font-extrabold tracking-tight lg:text-8xl">
            Is less more?
            <br />
            <span className="">Detox the Web.</span>
          </h1>
          <h1 className="absolute blur-xl -z-10 top-0 text-blue-200 text-4xl sm:text-6xl font-extrabold tracking-tight lg:text-8xl">
            Is less more?
            <br />
            <span className="">Detox the Web.</span>
          </h1>
          <h1 className="absolute blur-2xl -z-10 top-0 text-blue-200 text-4xl sm:text-6xl font-extrabold tracking-tight lg:text-8xl">
            Is less more?
            <br />
            <span className="">Detox the Web.</span>
          </h1>
          <h1 className="absolute blur-3xl -z-10 top-0 text-blue-200 text-4xl sm:text-6xl font-extrabold tracking-tight lg:text-8xl">
            Is less more?
            <br />
            <span className="">Detox the Web.</span>
          </h1>
        </div>
      </AnimateIn>
      <div className="absolute w-full h-1/2 bottom-0 bg-gradient-to-b from-transparent to-blue-200/80 pointer-events-none" />
    </section>
  );
};

export default Hero;

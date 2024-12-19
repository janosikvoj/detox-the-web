import { motion } from 'motion/react';
import React, { ReactNode } from 'react';

const AnimateIn = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: '-8%', scale: 0.95 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      transition={{
        default: {
          duration: 0.6,
          ease: 'circOut',
        },
        opacity: {
          duration: 0.6,
          ease: 'circOut',
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateIn;

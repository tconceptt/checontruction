'use client';

import { motion, HTMLMotionProps } from 'framer-motion';

export function MotionDiv({ children, ...props }: HTMLMotionProps<'div'>) {
  return <motion.div {...props}>{children}</motion.div>;
}

export function MotionSection({ children, ...props }: HTMLMotionProps<'section'>) {
  return <motion.section {...props}>{children}</motion.section>;
}

import { motion } from 'framer-motion';
import type { PropsWithChildren } from 'react';

type AnimatedSectionProps = PropsWithChildren<{
  id: string;
  className?: string;
}>;

export default function AnimatedSection({ id, className = '', children }: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      className={`section-shell ${className}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}

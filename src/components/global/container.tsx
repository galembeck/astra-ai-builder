"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  reverse?: boolean;
}

export function Container({ children, className, delay = 0.2, reverse }: ContainerProps) {
  return(
    <motion.div
      initial={{opacity: 0, y: reverse ? -20 : 20}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: false}}
      transition={{delay: delay, duration: 0.4, ease: "easeInOut"}}
      className={cn("w-full h-full", className)}
    >
      {children}
    </motion.div>
  );
}
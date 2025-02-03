import { cn } from "../../lib/utils";
import { motion, useScroll, useSpring } from "motion/react";

interface ScrollProgressProps {
  className?: string;
}

export default function ScrollProgress({ className }: ScrollProgressProps) {
  const { scrollYProgress } = useScroll();

  

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 2000,
    damping: 50,
    restDelta: 0.001,
  });

  console.log(scaleX)
  

  return (
    <motion.div
      className={cn(
        "fixed inset-x-0 top-0 z-[1000] h-0.5 origin-left bg-gradient-to-r from-[#ff5454] via-[#ce6262] to-[#ff5454]",
        className
      )}
      style={{
        scaleX,
      }}
    />
  );
}

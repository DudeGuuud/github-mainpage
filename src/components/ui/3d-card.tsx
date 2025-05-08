"use client";

import { cn } from "@/lib/utils";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface Card3dProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export const Card3d = ({
  children,
  className,
  containerClassName,
}: Card3dProps) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const { left, top, width, height } = card.getBoundingClientRect();
    
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    
    const rotateX = 20 * (y - 0.5);
    const rotateY = -20 * (x - 0.5);
    
    setRotateX(rotateX);
    setRotateY(rotateY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      className={cn("perspective-1000px", containerClassName)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        ref={cardRef}
        className={cn(
          "relative w-full rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 p-6 shadow-xl transition-transform duration-200 ease-out",
          className
        )}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className="absolute inset-0 z-10 rounded-xl bg-gradient-to-br from-zinc-800/50 to-zinc-900/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            transform: "translateZ(1px)",
          }}
        />
        <div style={{ transform: "translateZ(50px)" }}>{children}</div>
      </motion.div>
    </div>
  );
};

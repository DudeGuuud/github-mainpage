"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface GlowingTextProps {
  text: string;
  className?: string;
  glowColor?: string;
}

export const GlowingText = ({
  text,
  className,
  glowColor = "cyan",
}: GlowingTextProps) => {
  const colorMap: Record<string, string> = {
    cyan: "from-cyan-400 to-blue-500",
    purple: "from-purple-400 to-pink-600",
    green: "from-green-400 to-emerald-600",
    orange: "from-orange-400 to-red-600",
  };
  
  const gradientClass = colorMap[glowColor] || colorMap.cyan;
  
  return (
    <motion.h1
      className={cn(
        "bg-gradient-to-br text-transparent bg-clip-text font-bold",
        gradientClass,
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {text}
    </motion.h1>
  );
};

"use client";

import { cn } from "@/lib/utils";

import { Card3d } from "./3d-card";

interface TechCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

export const TechCard = ({
  title,
  description,
  icon,
  className,
}: TechCardProps) => {
  return (
    <Card3d
      className={cn(
        "group h-full border border-zinc-700/50 bg-zinc-900/50 backdrop-blur-sm",
        className
      )}
    >
      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-3">
          <div className="rounded-full bg-zinc-800 p-2 text-cyan-400">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        <p className="text-sm text-zinc-400">{description}</p>
      </div>
    </Card3d>
  );
};

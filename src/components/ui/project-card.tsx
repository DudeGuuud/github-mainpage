"use client";

import { cn } from "@/lib/utils";

import { Card3d } from "./3d-card";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  className?: string;
}

export const ProjectCard = ({
  title,
  description,
  tags,
  link,
  className,
}: ProjectCardProps) => {
  return (
    <Card3d
      className={cn(
        "group h-full border border-zinc-700/50 bg-zinc-900/50 backdrop-blur-sm",
        className
      )}
    >
      <div className="flex h-full flex-col justify-between space-y-4">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="text-sm text-zinc-400">{description}</p>
        </div>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-zinc-800 px-2 py-1 text-xs text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-105"
          >
            View Project
          </a>
        </div>
      </div>
    </Card3d>
  );
};

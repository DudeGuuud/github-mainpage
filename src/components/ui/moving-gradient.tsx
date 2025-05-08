"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

interface MovingGradientProps {
  className?: string;
  containerClassName?: string;
  colors?: string[];
}

export const MovingGradient = ({
  className,
  containerClassName,
  colors = ["#0f172a", "#1e293b", "#334155", "#1e40af", "#1e3a8a"],
}: MovingGradientProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
    };
    
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    
    const colorObjects = colors.map((color) => ({
      color,
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 300 + 100,
      vx: Math.random() * 0.2 - 0.1,
      vy: Math.random() * 0.2 - 0.1,
    }));
    
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, "#0f172a");
      gradient.addColorStop(1, "#1e293b");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw blurred circles
      colorObjects.forEach((obj) => {
        const gradient = ctx.createRadialGradient(
          obj.x,
          obj.y,
          0,
          obj.x,
          obj.y,
          obj.size
        );
        gradient.addColorStop(0, obj.color + "40"); // 25% opacity
        gradient.addColorStop(1, obj.color + "00"); // 0% opacity
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(obj.x, obj.y, obj.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Move the circle
        obj.x += obj.vx;
        obj.y += obj.vy;
        
        // Bounce off edges
        if (obj.x < 0 || obj.x > canvas.width) obj.vx *= -1;
        if (obj.y < 0 || obj.y > canvas.height) obj.vy *= -1;
      });
      
      requestAnimationFrame(render);
    };
    
    render();
    
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [colors]);
  
  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      <canvas
        ref={canvasRef}
        className={cn("absolute inset-0 h-full w-full", className)}
      />
    </div>
  );
};

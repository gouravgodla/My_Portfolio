"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

interface HoverBorderGradientProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  containerClassName?: string;
  className?: string;
  duration?: number;
  clockwise?: boolean;
  children: React.ReactNode;
}

export function HoverBorderGradient({
  as: Tag = "button",
  containerClassName,
  className,
  duration = 1,
  clockwise = true,
  children,
  ...props
}: HoverBorderGradientProps) {
  const [hovered, setHovered] = useState(false);
  const [direction, setDirection] = useState<Direction>("TOP");
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const rotateDirection = (current: Direction): Direction => {
    const directions: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const index = directions.indexOf(current);
    return clockwise
      ? directions[(index - 1 + directions.length) % directions.length]
      : directions[(index + 1) % directions.length];
  };

  const movingMap: Record<Direction, string> = {
    TOP: "radial-gradient(20.7% 50% at 50% 0%, hsl(0, 0%, 100%) 0%, transparent 100%)",
    LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, hsl(0, 0%, 100%) 0%, transparent 100%)",
    BOTTOM:
      "radial-gradient(20.7% 50% at 50% 100%, hsl(0, 0%, 100%) 0%, transparent 100%)",
    RIGHT:
      "radial-gradient(16.2% 41.2% at 100% 50%, hsl(0, 0%, 100%) 0%, transparent 100%)",
  };

  const highlight =
    "radial-gradient(75% 181.15% at 50% 50%, #3275F8 0%, transparent 100%)";

  useEffect(() => {
    if (!hovered) {
      intervalRef.current = setInterval(() => {
        setDirection((prev) => rotateDirection(prev));
      }, duration * 1000);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [hovered, duration, clockwise]);

  return (
    <Tag
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative w-fit h-min p-px overflow-visible rounded-full border bg-black/20 dark:bg-white/20 hover:bg-black/10 transition duration-500 flex items-center justify-center",
        containerClassName
      )}
      {...props}
    >
      <div
        className={cn(
          "z-10 bg-black text-white px-4 py-2 rounded-[inherit]",
          className
        )}
      >
        {children}
      </div>

      <motion.div
        className="absolute inset-0 z-0 rounded-[inherit] overflow-hidden"
        style={{ filter: "blur(2px)" }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered
            ? [movingMap[direction], highlight]
            : movingMap[direction],
        }}
        transition={{ ease: "linear", duration }}
      />

      <div className="absolute inset-[2px] z-[-1] rounded-[100px] bg-black" />
    </Tag>
  );
}

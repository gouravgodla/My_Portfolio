"use client";

import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

type TextGenerateEffectProps = {
  words: string;
  className?: string;
};

export const TextGenerateEffect = ({
  words,
  className,
}: TextGenerateEffectProps) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    if (!scope.current) return;

    animate(
      "span",
      { opacity: 1 },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [animate, scope]);

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className="dark:text-white text-black leading-snug tracking-wide">
          <motion.div ref={scope}>
            {wordsArray.map((word, idx) => (
              <motion.span
                key={`${word}-${idx}`}
                className={`${
                  idx > 3 ? "text-purple" : "dark:text-white text-black"
                } opacity-0`}
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

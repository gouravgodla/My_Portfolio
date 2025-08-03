"use client";

import Lottie from "react-lottie";
import animationData from "@/data/confetti.json";

const LottieWrapper = ({ copied }: { copied: boolean }) => {
  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} height={200} width={400} />;
};

export default LottieWrapper;

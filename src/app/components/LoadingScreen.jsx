import { motion } from "motion/react";
import { useEffect, useState } from "react";
function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsVisible(false);
    }, 900);
    return () => window.clearTimeout(timer);
  }, []);
  if (!isVisible) {
    return null;
  }
  return <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <motion.div
    initial={{
      opacity: 0,
      scale: 0.8
    }}
    animate={{
      opacity: 1,
      scale: 1
    }}
    exit={{
      opacity: 0,
      scale: 0.8
    }}
    transition={{
      duration: 0.5
    }}
    className="text-center"
  >
        <motion.div
    animate={{
      rotate: 360
    }}
    transition={{
      duration: 1.5,
      repeat: Infinity,
      ease: "linear"
    }}
    className="w-16 h-16 border-4 border-[#b8904e] border-t-transparent rounded-full mx-auto mb-4"
  />

        <h2 className="text-2xl font-bold">
          Loading...
        </h2>
      </motion.div>
    </div>;
}
export {
  LoadingScreen
};


import {
  motion,
  useScroll,
  useSpring
} from "motion/react";
import { ArrowUp } from "lucide-react";
function BackToTop() {
  const { scrollY } = useScroll();
  const smoothScroll = useSpring(scrollY, {
    stiffness: 100,
    damping: 30
  });
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return <motion.button
    onClick={scrollToTop}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="fixed bottom-6 right-6 p-3 rounded-full bg-[#b8904e] text-white shadow-lg z-50"
    style={{
      opacity: smoothScroll.get() > 300 ? 1 : 0
    }}
  >
      <ArrowUp className="w-5 h-5" />
    </motion.button>;
}
export {
  BackToTop
};


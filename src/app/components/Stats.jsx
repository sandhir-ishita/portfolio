import {
  motion,
  useInView,
  useMotionValue,
  useSpring
} from "motion/react";
import { useEffect, useRef } from "react";
const stats = [
  { label: "Projects Completed", value: 15, suffix: "+" },
  { label: "Years Experience", value: 2, suffix: "+" },
  { label: "Technologies Mastered", value: 20, suffix: "+" },
  { label: "Happy Clients", value: 10, suffix: "+" }
];
function AnimatedNumber({ value, suffix }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration: 2e3
  });
  const isInView = useInView(ref, {
    once: true
  });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);
  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toString();
      }
    });
    return () => unsubscribe();
  }, [springValue]);
  return <span ref={ref} className="inline-block">
      0
    </span>;
}
function Stats() {
  return <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="text-center mb-12"
  >
          <h2 className="text-4xl sm:text-5xl mb-4">
            Achievements
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Numbers that reflect my journey as a developer
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => <motion.div
    key={index}
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.5,
      delay: index * 0.1
    }}
    className="text-center"
  >
              <div className="text-4xl sm:text-5xl mb-2 bg-gradient-to-r from-[#12304a] to-[#d7b46a] bg-clip-text text-transparent">
                <AnimatedNumber
    value={stat.value}
    suffix={stat.suffix}
  />

                {stat.suffix}
              </div>

              <div className="text-sm sm:text-base text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}
export {
  Stats
};


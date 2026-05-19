import { motion } from "motion/react";
function Footer() {
  return <motion.footer
    initial={{
      opacity: 0
    }}
    whileInView={{
      opacity: 1
    }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="py-8 border-t border-border text-center"
  >
      <p className="text-muted-foreground">
        © 2026 Ishita Sandhir. All rights reserved.
      </p>
    </motion.footer>;
}
export {
  Footer
};

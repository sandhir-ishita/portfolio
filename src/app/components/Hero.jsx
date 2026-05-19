import { motion, useScroll, useTransform } from "motion/react";
import {
  ArrowDown,
  Code2,
  Download,
  Github,
  Linkedin,
  Mail,
  Sparkles
} from "lucide-react";
import { useTypingAnimation } from "./TypingAnimation";
import profilePhoto from "../../assets/ishita-sandhir.jpeg";

const introContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
};

const introItem = {
  hidden: {
    opacity: 0,
    y: 24
  },
  show: {
    opacity: 1,
    y: 0
  }
};

const skillChips = ["MERN Stack", "React", "Node.js", "MongoDB"];

function Hero() {
  const roles = [
    "Full Stack Developer",
    "Frontend Developer",
    "MERN Stack Developer",
    "Final Year CSE Student"
  ];
  const typedText = useTypingAnimation(roles);
  const { scrollYProgress } = useScroll();
  const photoY = useTransform(scrollYProgress, [0, 0.35], [0, -36]);
  const textY = useTransform(scrollYProgress, [0, 0.35], [0, 24]);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-4 pt-24 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(18,48,74,0.10),transparent_38%),linear-gradient(300deg,rgba(215,180,106,0.16),transparent_35%)]" />

      <motion.div
        className="absolute left-1/2 top-24 h-px w-[80vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
      />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          className="order-2 mx-auto w-full max-w-sm lg:order-1 lg:max-w-md"
          initial={{ opacity: 0, x: -36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ y: photoY }}
        >
          <div className="relative">
            <motion.div
              className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] border border-border"
              animate={{ x: [0, 8, 0], y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.img
              src={profilePhoto}
              alt="Ishita Sandhir"
              className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />

            <motion.div
              className="absolute -bottom-5 left-6 right-6 rounded-2xl border border-border bg-background/90 px-5 py-4 shadow-xl backdrop-blur"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
            >
              <p className="text-sm text-muted-foreground">Available for</p>
              <p className="font-medium">Internships & entry-level roles</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="order-1 text-center lg:order-2 lg:text-left"
          variants={introContainer}
          initial="hidden"
          animate="show"
          style={{ y: textY }}
        >
          <motion.div variants={introItem} className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 text-sm text-muted-foreground backdrop-blur">
              <Sparkles className="h-4 w-4 text-[#b8904e]" />
              Final year B.Tech CSE student
            </span>
          </motion.div>

          <motion.h1
            variants={introItem}
            className="mx-auto max-w-4xl text-5xl leading-tight sm:text-6xl lg:mx-0 lg:text-7xl"
          >
            Ishita Sandhir
          </motion.h1>

          <motion.div
            variants={introItem}
            className="mt-5 flex min-h-[2.5rem] items-center justify-center text-xl text-muted-foreground sm:text-2xl lg:justify-start"
          >
            <span>{typedText}</span>
            <span className="ml-2 h-7 w-0.5 bg-[#b8904e]" />
          </motion.div>

          <motion.p
            variants={introItem}
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg lg:mx-0"
          >
            I build clean, responsive web applications with practical full-stack thinking, strong computer science fundamentals, and a focus on smooth user experiences.
          </motion.p>

          <motion.div
            variants={introItem}
            className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start"
          >
            {skillChips.map((skill) => (
              <motion.span
                key={skill}
                className="rounded-full bg-secondary px-4 py-2 text-sm text-secondary-foreground"
                whileHover={{ y: -4 }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            variants={introItem}
            className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <motion.a
              href="#contact"
              className="rounded-full bg-foreground px-7 py-3 text-background transition-opacity hover:opacity-90"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              Get in touch
            </motion.a>

            <motion.a
              href="#projects"
              className="rounded-full border border-border bg-background/70 px-7 py-3 backdrop-blur transition-colors hover:bg-secondary"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              View projects
            </motion.a>

            <motion.button
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-7 py-3 backdrop-blur transition-colors hover:bg-secondary"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="h-4 w-4" />
              CV
            </motion.button>
          </motion.div>

          <motion.div
            variants={introItem}
            className="mt-8 flex items-center justify-center gap-3 lg:justify-start"
          >
            {[
              { href: "https://github.com/sandhir-ishita", icon: Github, label: "GitHub" },
              { href: "https://www.linkedin.com/in/ishita-sandhir12/", icon: Linkedin, label: "LinkedIn" },
              { href: "https://leetcode.com/u/sandhir_ishita/", icon: Code2, label: "LeetCode" },
              { href: "mailto:ishitasandhir11@gmail.com", icon: Mail, label: "Email" }
            ].map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={link.label}
                title={link.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background/70 backdrop-blur transition-colors hover:bg-secondary"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <link.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 text-muted-foreground sm:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1 },
          y: { duration: 1.6, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <ArrowDown className="h-6 w-6" />
      </motion.a>
    </section>
  );
}

export {
  Hero
};


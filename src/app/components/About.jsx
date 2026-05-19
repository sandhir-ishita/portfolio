import { motion } from "motion/react";
import {
  Code2,
  GraduationCap,
  Rocket,
  Layers,
  Brain,
  BriefcaseBusiness
} from "lucide-react";
const features = [
  {
    icon: GraduationCap,
    title: "Computer Science Foundation",
    description: "Final year B.Tech CSE student with practical knowledge of programming, data structures, databases, and web technologies."
  },
  {
    icon: Layers,
    title: "Full Stack Development",
    description: "Comfortable building responsive frontends, RESTful APIs, and database-backed applications using the MERN stack."
  },
  {
    icon: Rocket,
    title: "Project Mindset",
    description: "Focused on turning ideas into clean, usable products with attention to performance, readability, and user experience."
  }
];
const highlights = [
  { icon: Code2, text: "JavaScript, React, Node.js, Express, MongoDB" },
  { icon: Brain, text: "Problem solving with DSA and core CS fundamentals" },
  { icon: BriefcaseBusiness, text: "Actively preparing for software engineering roles" }
];
const container = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};
const item = {
  hidden: {
    opacity: 0,
    y: 20
  },
  show: {
    opacity: 1,
    y: 0
  }
};
function About() {
  return <section
    id="about"
    className="py-20 px-4 sm:px-6 lg:px-8"
  >
      <div className="max-w-6xl mx-auto">

        <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.25 }}
    transition={{ duration: 0.5 }}
    className="text-center mb-16"
  >
          <h2 className="text-4xl sm:text-5xl mb-4">
            About Me
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            I am a final year B.Tech Computer Science Engineering student with a strong interest in full stack development, problem solving, and building practical digital products. I enjoy working across the frontend and backend, connecting clean user interfaces with reliable application logic.
          </p>
        </motion.div>

        <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.25 }}
    transition={{ duration: 0.5, delay: 0.1 }}
    className="mb-12 grid gap-8 rounded-2xl border border-border bg-card/70 p-6 shadow-sm backdrop-blur md:grid-cols-[1.3fr_0.7fr]"
  >
          <div>
            <h3 className="mb-4 text-2xl">
              Curious, consistent, and ready to grow
            </h3>

            <p className="mb-4 text-muted-foreground">
              My academic journey has helped me build a solid base in computer science, while my projects have taught me how to apply those concepts in real applications. I like creating interfaces that feel smooth, writing code that is easy to understand, and improving each project with better structure and polish.
            </p>

            <p className="text-muted-foreground">
              As I move toward the next step in my career, I am looking for opportunities where I can contribute to meaningful software, learn from experienced teams, and keep strengthening my skills as a developer.
            </p>
          </div>

          <div className="space-y-4">
            {highlights.map((highlight) => <div
    key={highlight.text}
    className="flex gap-3 rounded-xl border border-border bg-background/70 p-4"
  >
                <highlight.icon className="mt-1 h-5 w-5 shrink-0 text-[#b8904e]" />

                <span className="text-sm text-muted-foreground">
                  {highlight.text}
                </span>
              </div>)}
          </div>
        </motion.div>

        <motion.div
    variants={container}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className="grid grid-cols-1 md:grid-cols-3 gap-8"
  >
          {features.map((feature, index) => <motion.div
    key={index}
    variants={item}
    whileHover={{ y: -5 }}
    className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
  >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="mb-2">
                {feature.title}
              </h3>

              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>)}
        </motion.div>

      </div>
    </section>;
}
export {
  About
};



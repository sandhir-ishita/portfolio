import { motion } from "motion/react";
const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 90 },
      { name: "React / Next.js", level: 85 },
      { name: "Responsive Design", level: 90 },
      { name: "Tailwind CSS", level: 88 }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js + Express.js", level: 85 },
      { name: "REST APIs", level: 88 },
      {
        name: "Authentication (JWT, OAuth)",
        level: 82
      }
    ]
  },
  {
    category: "Database",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "MySQL", level: 80 },
      { name: "CRUD Operations", level: 90 },
      { name: "Database Design", level: 82 }
    ]
  },
  {
    category: "Version Control",
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 88 }
    ]
  },
  {
    category: "Deployment",
    skills: [
      { name: "Vercel", level: 85 },
      { name: "Render", level: 82 },
      { name: "Basic CI/CD", level: 78 }
    ]
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "Docker", level: 75 },
      { name: "Linux", level: 80 },
      {
        name: "AWS / Google Cloud",
        level: 70
      }
    ]
  }
];
const tools = [
  { name: "VS Code", icon: "\u{1F4BB}", className: "left-[6%] top-[18%]" },
  { name: "GitHub", icon: "\u{1F419}", className: "left-[23%] top-[6%]" },
  { name: "React", icon: "\u269B\uFE0F", className: "left-[44%] top-[22%]" },
  { name: "Node.js", icon: "\u{1F7E2}", className: "right-[21%] top-[8%]" },
  { name: "MongoDB", icon: "\u{1F343}", className: "right-[6%] top-[30%]" },
  { name: "Postman", icon: "\u{1F4EE}", className: "left-[15%] bottom-[18%]" },
  { name: "Docker", icon: "\u{1F433}", className: "left-[38%] bottom-[8%]" },
  { name: "Vercel", icon: "\u25B2", className: "right-[31%] bottom-[18%]" },
  { name: "Firebase", icon: "\u{1F525}", className: "right-[8%] bottom-[6%]" }
];
const softSkills = [
  {
    name: "Communication",
    description: "Clear and effective communication with team members and stakeholders"
  },
  {
    name: "Problem-solving",
    description: "Analytical thinking and creative solutions to complex challenges"
  },
  {
    name: "Team Collaboration",
    description: "Working effectively in agile teams and contributing to shared goals"
  }
];
const container = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};
const item = {
  hidden: {
    opacity: 0,
    x: -20
  },
  show: {
    opacity: 1,
    x: 0
  }
};
function Skills() {
  return <section
    id="skills"
    className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8"
  >
      <motion.div
    className="absolute left-6 top-36 hidden rounded-full border border-[#d7b46a]/40 px-5 py-3 text-sm text-muted-foreground lg:flex"
    animate={{
      y: [0, -14, 0],
      rotate: [0, -3, 0]
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
        Skills for 2026 roles
      </motion.div>

      <motion.div
    className="absolute right-8 top-64 hidden rounded-full border border-[#8a6f5a]/40 px-5 py-3 text-sm text-muted-foreground lg:flex"
    animate={{
      y: [0, 16, 0],
      rotate: [0, 3, 0]
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
        Full stack ready
      </motion.div>

      <div className="max-w-7xl mx-auto">

        <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.25 }}
    transition={{ duration: 0.5 }}
    className="text-center mb-16"
  >
          <h2 className="text-4xl sm:text-5xl mb-4">
            Skills & Expertise
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Full Stack Development Skills —
            From Frontend to Deployment
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">

          {skillCategories.map(
    (category, categoryIndex) => <motion.div
      key={categoryIndex}
      initial={{
        opacity: 0,
        y: 20
      }}
      whileInView={{
        opacity: 1
      }}
      viewport={{ once: false, amount: 0.25 }}
      animate={{
        y: [0, -6, 0]
      }}
      whileHover={{
        y: -8,
        borderColor: "rgba(215, 180, 106, 0.7)"
      }}
      transition={{
        duration: 0.5,
        delay: categoryIndex * 0.1,
        y: {
          duration: 4 + categoryIndex * 0.25,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
      className="bg-card rounded-xl p-6 border border-border hover:shadow-lg hover:shadow-[#12304a]/10 transition-all"
    >
                <h3 className="mb-6 text-center text-lg">
                  {category.category}
                </h3>

                <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="space-y-4"
    >
                  {category.skills.map(
      (skill, skillIndex) => <motion.div
        key={skillIndex}
        variants={item}
      >
                        <div className="flex justify-between mb-2">
                          <span className="text-sm">
                            {skill.name}
                          </span>

                          <span className="text-sm text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>

                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <motion.div
        className="h-full bg-gradient-to-r from-[#12304a] to-[#d7b46a]"
        initial={{ width: 0 }}
        whileInView={{
          width: `${skill.level}%`
        }}
        viewport={{ once: false, amount: 0.25 }}
        transition={{
          duration: 1,
          delay: skillIndex * 0.1
        }}
      />
                        </div>
                      </motion.div>
    )}
                </motion.div>
              </motion.div>
  )}
        </div>

        {
    /* Tools */
  }
        <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{
      opacity: 1,
      y: 0
    }}
    viewport={{ once: false, amount: 0.25 }}
    transition={{ duration: 0.5 }}
    className="mb-16"
  >
          <h3 className="text-2xl sm:text-3xl text-center mb-8">
            Development Tools
          </h3>

          <div className="relative min-h-[430px] overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur">
            <motion.div
    className="absolute inset-6 rounded-[2rem] border border-[#d7b46a]/20"
    animate={{
      scale: [1, 1.03, 1],
      opacity: [0.5, 0.9, 0.5]
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />

            {tools.map((tool, index) => <motion.div
    key={index}
    initial={{
      opacity: 0,
      scale: 0.8
    }}
    whileInView={{
      opacity: 1,
      scale: 1
    }}
    viewport={{ once: false, amount: 0.25 }}
    animate={{
      y: [0, -18, 0],
      rotate: [0, index % 2 === 0 ? 4 : -4, 0]
    }}
    transition={{
      opacity: { duration: 0.3, delay: index * 0.05 },
      scale: { duration: 0.3, delay: index * 0.05 },
      y: {
        duration: 4 + index * 0.25,
        repeat: Infinity,
        ease: "easeInOut"
      },
      rotate: {
        duration: 5 + index * 0.2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }}
    whileHover={{
      scale: 1.14,
      y: -8
    }}
    className={`absolute flex h-24 w-24 flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-background/80 p-4 shadow-lg backdrop-blur hover:border-[#d7b46a]/60 transition-colors cursor-default ${tool.className}`}
  >
                <span className="text-3xl">
                  {tool.icon}
                </span>

                <span className="text-xs text-center">
                  {tool.name}
                </span>
              </motion.div>)}
          </div>
        </motion.div>

        {
    /* Soft Skills */
  }
        <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{
      opacity: 1,
      y: 0
    }}
    viewport={{ once: false, amount: 0.25 }}
    transition={{ duration: 0.5 }}
  >
          <h3 className="text-2xl sm:text-3xl text-center mb-8">
            Soft Skills
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {softSkills.map((skill, index) => <motion.div
    key={index}
    initial={{
      opacity: 0,
      y: 20
    }}
    whileInView={{
      opacity: 1,
      y: 0
    }}
    viewport={{ once: false, amount: 0.25 }}
    transition={{
      duration: 0.5,
      delay: index * 0.2
    }}
    whileHover={{ y: -5 }}
    className="bg-card rounded-xl p-6 border border-border hover:border-[#8a6f5a]/60 transition-all text-center"
  >
                <h4 className="mb-3 text-lg">
                  {skill.name}
                </h4>

                <p className="text-sm text-muted-foreground">
                  {skill.description}
                </p>
              </motion.div>)}
          </div>
        </motion.div>

      </div>
    </section>;
}
export {
  Skills
};




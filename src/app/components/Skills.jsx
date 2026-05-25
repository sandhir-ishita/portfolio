import { motion } from "motion/react";
 
const skillCards = [
  // Row 1 - Language & Core
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", border: "from-yellow-400 to-yellow-600" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", border: "from-cyan-400 to-cyan-600" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", border: "from-green-500 to-green-700" },
  { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", border: "from-gray-400 to-gray-600" },
  // Row 2
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", border: "from-green-400 to-green-600" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", border: "from-blue-400 to-yellow-400" },
  { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", border: "from-blue-500 to-blue-700" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", border: "from-orange-400 to-orange-600" },
  // Row 3
  { name: "HTML/CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", border: "from-orange-500 to-red-500" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", border: "from-teal-400 to-cyan-500" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", border: "from-yellow-500 to-orange-500" },
  { name: "Git / GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", border: "from-gray-500 to-gray-700" },
  // Row 4
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", border: "from-blue-400 to-blue-600" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", border: "from-blue-500 to-indigo-500" },
  { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg", border: "from-gray-300 to-gray-600" },
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", border: "from-blue-400 to-purple-500" },
];
 
const softSkills = [
  { name: "Communication", description: "Clear and effective communication with team members and stakeholders" },
  { name: "Problem-solving", description: "Analytical thinking and creative solutions to complex challenges" },
  { name: "Team Collaboration", description: "Working effectively in agile teams and contributing to shared goals" },
];
 
function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
     
 
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Full Stack Development Skills — From Frontend to Deployment
          </p>
        </motion.div>
 
        {/* Card Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-16"
        >
          {skillCards.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="relative group bg-card rounded-xl border border-border overflow-hidden cursor-default"
              style={{
                background: "hsl(var(--card))",
              }}
            >
              {/* Coloured bottom border accent */}
              <div className={`absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r ${skill.border}`} />
              <div className="flex flex-col items-center justify-center gap-3 p-6">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-10 h-10 object-contain"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
                <span className="text-sm font-medium text-center leading-tight">
                  {skill.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
 
        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl sm:text-3xl text-center mb-8">Soft Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-card rounded-xl p-6 border border-border hover:border-[#8a6f5a]/60 transition-all text-center"
              >
                <h4 className="mb-3 text-lg">{skill.name}</h4>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
 
export { Skills };
import { motion } from "motion/react";
import { useState } from "react";
import { ArrowUpRight, ExternalLink, Github, Sparkles, Zap } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
 
const projects = [
  {
    title: "Cafe Finder",
    description: "A full-stack cafe discovery app to search and explore cafes nearby. Built with React, Node.js, Express, and MongoDB with map integration and filtering by amenities.",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1080&q=80",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    category: "Full Stack",
    github: "https://github.com/sandhir-ishita/cafe-finder",
    demo: "https://github.com/sandhir-ishita/cafe-finder",
  },
  {
    title: "Connect — Event Management Portal",
    description: "A comprehensive event management platform with user authentication, event creation, RSVP, and attendee management. Built with the MERN stack and real-time features.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1080&q=80",
    tags: ["React", "Node.js", "MongoDB", "Firebase"],
    category: "Full Stack",
    github: "https://github.com/sandhir-ishita/connect-event-management-portal",
    demo: "https://github.com/sandhir-ishita/connect-event-management-portal",
  },
  {
    title: "Responsive Portfolio Site",
    description: "A polished, animated personal portfolio built with React, Tailwind CSS, and Framer Motion. Fully responsive with dark/light mode and smooth scroll interactions.",
    image: "https://images.unsplash.com/photo-1545665277-5937489579f2?auto=format&fit=crop&w=1080&q=80",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    category: "Frontend",
    github: "https://github.com/sandhir-ishita/portfolio",
    demo: "https://portfolio-green-eight-86.vercel.app",
  },
];
 
const categories = ["All", "Full Stack", "Frontend", "Backend"];
const marketTags = ["AI-ready UI", "Cloud Deployments", "API First", "Responsive UX"];
 
const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } },
};
 
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};
 
function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);
 
  return (
    <section id="projects" className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <motion.div
        className="absolute left-8 top-24 hidden h-24 w-24 rounded-full border border-[#d7b46a]/40 lg:block"
        animate={{ y: [0, -18, 0], rotate: [0, 12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-10 bottom-28 hidden h-32 w-32 rounded-full border border-[#8a6f5a]/40 lg:block"
        animate={{ y: [0, 20, 0], rotate: [0, -16, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
 
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {marketTags.map((tag, index) => (
              <motion.span
                key={tag}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-2 text-sm text-muted-foreground backdrop-blur"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3 + index * 0.3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles className="h-4 w-4 text-[#b8904e]" />
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
 
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.25 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm transition-all ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-[#12304a] to-[#d7b46a] text-white shadow-lg"
                  : "bg-secondary text-secondary-foreground hover:bg-accent"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
 
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          key={selectedCategory}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -12, rotateX: 2 }}
              className="bg-card rounded-xl overflow-hidden border border-border hover:border-[#d7b46a]/60 hover:shadow-lg hover:shadow-[#12304a]/20 transition-all group"
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/90 rounded-full text-black hover:bg-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/90 rounded-full text-black hover:bg-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
 
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3>{project.title}</h3>
                  <span className="text-xs px-2 py-1 bg-[#b8904e]/20 text-[#b8904e] rounded">
                    {project.category}
                  </span>
                </div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                  <Zap className="h-3 w-3" />
                  Modern stack
                  <ArrowUpRight className="h-3 w-3" />
                </div>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs bg-secondary rounded-full hover:bg-accent transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
 
export { Projects };
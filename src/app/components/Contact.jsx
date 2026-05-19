import { motion } from "motion/react";
import { Code2, Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ishitasandhir11@gmail.com",
      href: "mailto:ishitasandhir11@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/ishita-sandhir12",
      href: "https://www.linkedin.com/in/ishita-sandhir12/"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/sandhir-ishita",
      href: "https://github.com/sandhir-ishita"
    },
    {
      icon: Code2,
      label: "LeetCode",
      value: "leetcode.com/u/sandhir_ishita",
      href: "https://leetcode.com/u/sandhir_ishita/"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bhopal, India",
      href: "#"
    }
  ];
  return <section
    id="contact"
    className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30"
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
            Get In Touch
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to work together?
            Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {
    /* Contact Info */
  }
          <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: false, amount: 0.25 }}
    transition={{ duration: 0.5 }}
  >
            <h3 className="mb-6">
              Contact Information
            </h3>

            <div className="flex flex-wrap gap-4">
              {contactInfo.map((info, index) => <motion.a
    key={index}
    href={info.href}
    target={info.href.startsWith("http") ? "_blank" : undefined}
    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
    aria-label={info.label}
    title={info.label}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.6 }}
    transition={{
      duration: 0.45,
      delay: index * 0.08
    }}
    whileHover={{
      y: -6,
      scale: 1.08
    }}
    className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-[#12304a]/10 transition-all"
  >
                  <info.icon className="w-6 h-6 text-primary" />
                </motion.a>)}
            </div>
          </motion.div>

          {
    /* Contact Form */
  }
          <motion.div
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: false, amount: 0.25 }}
    transition={{ duration: 0.5 }}
  >
            <form
    onSubmit={handleSubmit}
    className="space-y-6"
  >
              <div>
                <label
    htmlFor="name"
    className="block mb-2"
  >
                  Name
                </label>

                <input
    type="text"
    id="name"
    name="name"
    value={formData.name}
    onChange={handleChange}
    required
    className="w-full px-4 py-3 rounded-lg bg-input-background border border-border focus:border-primary focus:outline-none transition-colors"
    placeholder="Your name"
  />
              </div>

              <div>
                <label
    htmlFor="email"
    className="block mb-2"
  >
                  Email
                </label>

                <input
    type="email"
    id="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    required
    className="w-full px-4 py-3 rounded-lg bg-input-background border border-border focus:border-primary focus:outline-none transition-colors"
    placeholder="ishitasandhir11@gmail.com"
  />
              </div>

              <div>
                <label
    htmlFor="message"
    className="block mb-2"
  >
                  Message
                </label>

                <textarea
    id="message"
    name="message"
    value={formData.message}
    onChange={handleChange}
    required
    rows={6}
    className="w-full px-4 py-3 rounded-lg bg-input-background border border-border focus:border-primary focus:outline-none transition-colors resize-none"
    placeholder="Your message..."
  />
              </div>

              <motion.button
    type="submit"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
  >
                <span>Send Message</span>

                <Send className="w-4 h-4" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>;
}
export {
  Contact
};



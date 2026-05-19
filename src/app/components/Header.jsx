import { motion } from "motion/react";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { useState } from "react";
const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" }
];
function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return <motion.header
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.5 }}
    className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
  >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.a
    href="#home"
    className="text-xl font-semibold"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
            Ishita Sandhir
          </motion.a>

          {
    /* Desktop Navigation */
  }
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => <motion.a
    key={item.name}
    href={item.href}
    className="text-muted-foreground hover:text-foreground transition-colors"
    whileHover={{ y: -2 }}
  >
                {item.name}
              </motion.a>)}
          </nav>

          <div className="flex items-center gap-4">
            <ThemeToggle />

            {
    /* Mobile Menu Button */
  }
            <button
    className="md:hidden p-2"
    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
    aria-label="Toggle menu"
  >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {
    /* Mobile Navigation */
  }
      {mobileMenuOpen && <motion.nav
    initial={{ opacity: 0, height: 0 }}
    animate={{ opacity: 1, height: "auto" }}
    exit={{ opacity: 0, height: 0 }}
    className="md:hidden bg-background border-t border-border"
  >
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => <a
    key={item.name}
    href={item.href}
    className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
    onClick={() => setMobileMenuOpen(false)}
  >
                {item.name}
              </a>)}
          </div>
        </motion.nav>}
    </motion.header>;
}
export {
  Header
};

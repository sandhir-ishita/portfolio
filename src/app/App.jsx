import { useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ScrollProgress } from "./components/ScrollProgress";
import { Stats } from "./components/Stats";
import { BackToTop } from "./components/BackToTop";
import { LoadingScreen } from "./components/LoadingScreen";
function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);
  return <>
      <LoadingScreen />
      <div className="min-h-screen">
        <ScrollProgress />
        <Header />
        <main>
          <Hero />
          <About />
          <Stats />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </>;
}
export {
  App as default
};

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Download, Sparkles, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-8 md:p-12"
        >
          <div className="flex items-start gap-4 mb-6">
            <Sparkles className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                Highly motivated and dedicated fresher with a strong academic background in <span className="text-primary font-semibold">Computer Science</span> and a keen interest in software development.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                I possess solid foundational knowledge in programming, web technologies, and database management, along with hands-on experience gained through academic projects and internships. I enjoy solving problems, learning new skills, and working in collaborative environments.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                I am eager to begin my professional journey where I can apply my technical abilities, grow continuously, and contribute positively to the organization’s goals.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-8 pt-8 border-t border-border">
            <span className="tech-chip">🎓 GPA: 8.4</span>
            <span className="tech-chip">📍 Anakapalli, AP</span>
            <span className="tech-chip">📧 devisricm011@gmail.com</span>
            <span className="tech-chip">📱 +91 7075382343</span>
            <a href="https://www.linkedin.com/in/devisri-dadi-303272294/" target="_blank" rel="noopener noreferrer" className="tech-chip hover:border-primary hover:text-primary cursor-pointer">
              🔗 LinkedIn
            </a>
            <a href="https://github.com/Devisridadi" target="_blank" rel="noopener noreferrer" className="tech-chip hover:border-primary hover:text-primary cursor-pointer">
              🐙 GitHub
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="mt-8 text-center"
          >
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 glow-button cursor-pointer"
                asChild
              >
                <a href="https://docs.google.com/document/d/1Eiz63Ot7mpUeEM2fmG_rtqMd2nXDRlFaoAA983O6Cyk/export?format=pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 text-primary hover:bg-primary/10 glow-button cursor-pointer"
                asChild
              >
                <a href="https://docs.google.com/document/d/1Eiz63Ot7mpUeEM2fmG_rtqMd2nXDRlFaoAA983O6Cyk/preview" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Resume
                </a>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
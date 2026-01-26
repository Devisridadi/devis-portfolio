import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Download, Sparkles } from "lucide-react";
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
                Hi there! I'm <span className="text-primary font-semibold">Devi Sri Dadi</span>, 
                a passionate Computer Science student at Vignan's Institute of Information Technology, 
                Visakhapatnam. I believe in creating technology that feels human — elegant, 
                intuitive, and meaningful.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                My journey in tech revolves around two exciting domains: <span className="text-accent">Web Development</span> and 
                <span className="text-accent"> Artificial Intelligence</span>. I love building beautiful, responsive websites 
                that deliver seamless user experiences, while also exploring the fascinating world of 
                machine learning and predictive analytics.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, working on 
                creative projects, or learning something new. I believe in continuous growth, 
                collaboration, and building solutions that make a difference.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-8 pt-8 border-t border-border">
            <span className="tech-chip">🎓 B.Tech CSE</span>
            <span className="tech-chip">📍 Visakhapatnam</span>
            <span className="tech-chip">💻 Web Developer</span>
            <span className="tech-chip">🤖 AI Enthusiast</span>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="mt-8 text-center"
          >
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10 glow-button"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
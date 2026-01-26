import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const technologies = [
  { name: "HTML5", icon: "🌐" },
  { name: "CSS3", icon: "🎨" },
  { name: "JavaScript", icon: "⚡" },
  { name: "React", icon: "⚛️" },
  { name: "Python", icon: "🐍" },
  { name: "PHP", icon: "🐘" },
  { name: "MySQL", icon: "🗄️" },
  { name: "Git", icon: "📦" },
  { name: "Tailwind", icon: "💨" },
  { name: "Scikit-learn", icon: "🤖" },
  { name: "Pandas", icon: "🐼" },
  { name: "Jupyter", icon: "📓" },
];

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="glass-card p-4 text-center cursor-pointer group transition-all duration-300 hover:border-primary/50"
              style={{
                boxShadow: "0 0 0 0 transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 0 30px hsla(270, 70%, 75%, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 0 0 0 transparent";
              }}
            >
              <div className="text-3xl mb-2 transition-transform duration-300 group-hover:scale-110">
                {tech.icon}
              </div>
              <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                {tech.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Folder, Award, Clock } from "lucide-react";

const stats = [
  {
    icon: Folder,
    value: "3",
    label: "Projects",
    description: "Completed",
  },
  {
    icon: Award,
    value: "6",
    label: "Certificates",
    description: "Earned",
  },
  {
    icon: Clock,
    value: "1",
    label: "Year",
    description: "Experience",
  },
];

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card-hover p-8 text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              
              <motion.div
                initial={{ scale: 0.5 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.2, type: "spring" }}
                className="text-4xl md:text-5xl font-heading font-bold gradient-text mb-2"
              >
                {stat.value}
              </motion.div>
              
              <div className="text-foreground font-medium text-lg mb-1">
                {stat.label}
              </div>
              <div className="text-muted-foreground text-sm">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
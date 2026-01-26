import { motion } from "framer-motion";
import { Code, Database, Layout, Terminal, Server } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
    {
        title: "Programming Languages",
        icon: <Code className="w-6 h-6" />,
        skills: ["Java", "Python", "C", "C++", "JavaScript (ES6+)", "SQL"],
    },
    {
        title: "Databases",
        icon: <Database className="w-6 h-6" />,
        skills: ["MySQL"],
    },
    {
        title: "Frameworks & Libraries",
        icon: <Layout className="w-6 h-6" />,
        skills: ["HTML5", "CSS3", "React.js", "Bootstrap"],
    },
    {
        title: "Tools & Technologies",
        icon: <Terminal className="w-6 h-6" />,
        skills: ["Docker", "Git", "GitHub", "Vercel", "Render", "Tableau"],
    },
    {
        title: "Other",
        icon: <Server className="w-6 h-6" />,
        skills: ["Data Structures & Algorithms"],
    },
];

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="skills" className="section-padding relative" ref={ref}>
            <div className="container mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="text-4xl font-bold font-heading mb-12 text-center gradient-text"
                >
                    Technical Skills
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-6"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold">{category.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="tech-chip hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

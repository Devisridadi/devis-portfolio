import { motion } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const certifications = [
    "AWS Solutions Architecture – Forage, 2024",
    "GenAI Data Analytics Simulation – Tata iQ, 2025",
    "NPTEL-Developing soft skills and personality -86%, 2025",
    "IBM –Relational Database, 2024",
    "Cisco – Python Essentials 1 & 2, 2024",
    "Udemy – Java Full Stack Developer, 2025",
    "HP – Digital Business Skills, 2025",
];

const Certifications = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="certifications" className="section-padding relative bg-secondary/20" ref={ref}>
            <div className="container mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="text-4xl font-bold font-heading mb-12 text-center gradient-text"
                >
                    Certifications & Achievements
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-6 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 flex items-start gap-4"
                        >
                            <div className="bg-primary/10 p-3 rounded-full text-primary">
                                <Award className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg leading-snug">{cert}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <h3 className="text-2xl font-bold text-center mb-8">Key Achievements</h3>
                    <div className="glass-card p-8">
                        <ul className="grid gap-4">
                            {[
                                "Solved 600+ coding problems across LeetCode and CodeChef.",
                                "Built and deployed Pet Shop Website and Inventory Management System.",
                                "Active contributor on GitHub with 10+ repositories.",
                                "Certified in Web Development and Machine Learning internships.",
                            ].map((achievement, i) => (
                                <li key={i} className="flex items-center gap-3 text-lg text-muted-foreground">
                                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                                    {achievement}
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Certifications;

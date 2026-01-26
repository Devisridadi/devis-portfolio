import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const experienceData = [
    {
        company: "Internpe",
        role: "Web Developer Intern",
        duration: "Apr 2024 – May 2024",
        location: "Hyderabad, TS",
        description: [
            "Worked on developing and maintaining web pages using HTML, CSS, JavaScript, and responsive design techniques.",
            "Gained practical experience in building user-friendly interfaces and improving website performance during internship.",
        ],
        skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "UI/UX"],
    },
    {
        company: "HMI",
        role: "Machine Learning Intern",
        duration: "Dec 2022 – May 2023",
        location: "Visakhapatnam, AP",
        description: [
            "Worked on applying ML algorithms to solve real-world problems, improving skills in Python, libraries and data visualization.",
            "Gained practical knowledge in Machine Learning by working on datasets, training models, and analyzing results during internship.",
        ],
        skills: ["Python", "Machine Learning", "Data Visualization", "Pandas", "Scikit-Learn"],
    },
];

const Experience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="experience" className="section-padding relative bg-secondary/20" ref={ref}>
            <div className="container mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="text-4xl font-bold font-heading mb-16 text-center gradient-text"
                >
                    Professional Experience
                </motion.h2>

                <div className="relative max-w-4xl mx-auto">
                    {/* Timeline Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-accent to-primary/20 rounded-full" />

                    <div className="space-y-12">
                        {experienceData.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: index * 0.2 }}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 w-3.5 h-3.5 bg-background border-4 border-primary rounded-full z-10 mt-8" />

                                {/* Content Card */}
                                <div className="flex-1 ml-6 md:ml-0">
                                    <div className={`glass-card p-6 md:p-8 hover:border-primary/50 transition-all duration-300 group md:text-${index % 2 === 0 ? "left" : "right"
                                        }`}>
                                        <div className={`flex flex-col gap-2 mb-4 ${index % 2 === 0 ? "md:items-start" : "md:items-end"
                                            }`}>
                                            <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                                                {exp.role}
                                            </h3>
                                            <h4 className="text-xl font-semibold text-muted-foreground">
                                                {exp.company}
                                            </h4>
                                            <div className={`flex items-center gap-4 text-sm text-muted-foreground mt-1 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                                }`}>
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="w-4 h-4" />
                                                    {exp.duration}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <MapPin className="w-4 h-4" />
                                                    {exp.location}
                                                </span>
                                            </div>
                                        </div>

                                        <ul className={`space-y-2 mb-6 ${index % 2 === 0 ? "md:text-left" : "md:text-right"
                                            }`}>
                                            {exp.description.map((desc, i) => (
                                                <li key={i} className="text-muted-foreground leading-relaxed">
                                                    {desc}
                                                </li>
                                            ))}
                                        </ul>

                                        <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                                            }`}>
                                            {exp.skills.map((skill, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Spacer for the other side of the timeline */}
                                <div className="hidden md:block flex-1" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;

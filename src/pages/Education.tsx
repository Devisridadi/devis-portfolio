import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const educationData = [
    {
        school: "Vignan’s Institute of Information Technology",
        degree: "B.Tech in Computer Science and Engineering",
        duration: "Aug 2023 – May 2026",
        location: "Duvvada, AP",
        score: "GPA: 8.4",
        coursework: ["Data Structures in C", "Algorithms", "Database Management Systems", "Operating Systems", "Computer Networks", "Web Technologies"],
        achievements: "Active member of ACM Student Chapter",
    },
    {
        school: "Government Polytechnic Anakapalli",
        degree: "Diploma in Computer Engineering",
        duration: "Aug 2020 – May 2023",
        location: "Anakapalli, AP",
        score: "CGPA: 8.4",
        coursework: ["Programming in C", "Digital Electronics", "Microprocessors", "Java Programming"],
        achievements: "Class Topper in Final Year",
    },
];

const Education = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="education" className="section-padding relative" ref={ref}>
            <div className="container mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="text-4xl font-bold font-heading mb-16 text-center gradient-text"
                >
                    Educational Journey
                </motion.h2>

                <div className="max-w-4xl mx-auto space-y-8">
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.2 }}
                            className="glass-card overflow-hidden group"
                        >
                            {/* Header/Title Section */}
                            <div className="p-8 border-b border-white/10 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                                    <GraduationCap className="w-32 h-32" />
                                </div>

                                <div className="relative z-10">
                                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                                        <div>
                                            <div className="flex items-center gap-3 mb-2">
                                                <GraduationCap className="w-6 h-6 text-primary" />
                                                <h3 className="text-2xl font-bold text-foreground">{edu.school}</h3>
                                            </div>
                                            <div className="text-xl text-primary font-medium flex items-center gap-2">
                                                {edu.degree}
                                            </div>
                                        </div>
                                        <div className="bg-primary/20 backdrop-blur-md px-4 py-2 rounded-full border border-primary/30 text-nowrap">
                                            <span className="font-bold text-primary">{edu.score}</span>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                        <span className="flex items-center gap-1.5 bg-secondary/50 px-3 py-1 rounded-md">
                                            <Calendar className="w-4 h-4" />
                                            {edu.duration}
                                        </span>
                                        <span className="flex items-center gap-1.5 bg-secondary/50 px-3 py-1 rounded-md">
                                            <MapPin className="w-4 h-4" />
                                            {edu.location}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Coursework & Content */}
                            <div className="p-8 bg-card/20">
                                <h4 className="text-sm uppercase tracking-wider text-muted-foreground font-semibold mb-4">
                                    Key Coursework
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {edu.coursework.map((course, i) => (
                                        <span key={i} className="text-sm px-3 py-1 bg-secondary rounded-full border border-white/5 hover:border-primary/30 transition-colors">
                                            {course}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;

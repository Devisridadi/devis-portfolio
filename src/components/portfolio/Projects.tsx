import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import petshopImage from "@/assets/project-petshop.jpg";
import heartImage from "@/assets/project-heart.jpg";
import inventoryImage from "@/assets/project-inventory.jpg";

const projects = [
  {
    title: "Pet Shop Website",
    description: "Developed a responsive e-commerce platform with authentication and cart management, reducing checkout errors and improving customer retention. Designed intuitive UI with product categories and filters for a seamless shopping experience.",
    image: petshopImage,
    tech: ["HTML", "CSS", "JavaScript", "React.js", "Authentication"],
    link: "#",
  },
  {
    title: "Heart Disease Prediction",
    description: "Machine learning model that predicts heart disease risk based on patient health data. Implements data preprocessing and classification algorithms.",
    image: heartImage,
    tech: ["Python", "Pandas", "Scikit-learn", "Jupyter"],
    link: "#",
  },
  {
    title: "Inventory Management System",
    description: "Built a PHP/MySQL inventory management system with automated stock tracking and demand forecasting, reducing manual errors by 40% and enabling data-driven decision-making.",
    image: inventoryImage,
    tech: ["PHP", "MySQL", "Inventory Tracking", "Demand Forecasting"],
    link: "#",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="glass-card-hover overflow-hidden group"
    >
      {/* Project Image */}
      <div className="relative h-48 md:h-56 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />

        {/* Hover overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <Button
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            View Project
          </Button>
        </motion.div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="font-heading text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span key={tech} className="tech-chip">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            A collection of projects that showcase my skills in web development and machine learning
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
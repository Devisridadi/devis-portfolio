import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Cat, Dog } from "lucide-react";
import { Button } from "@/components/ui/button";
import petshopImage from "@/assets/project-petshop.jpg";
import smartvotingImage from "@/assets/project-smartvoting.jpg";
import agrimlImage from "@/assets/project-agriml.jpg";

const projects = [
  {
    title: "Pet Shop Website",
    description: "Developed a responsive e-commerce platform with authentication and cart management, reducing checkout errors and improving customer retention. Designed intuitive UI with product categories and filters for a seamless shopping experience.",
    image: petshopImage,
    tech: ["HTML", "CSS", "JavaScript", "React.js", "Authentication"],
    link: "#",
  },
  {
    title: "SmartVoting Platform",
    description: "Secure, AI-powered electronic voting platform with biometric authentication (Face Recognition with Liveness Detection) to prevent impersonation. Features comprehensive Admin Panel for election management and real-time results visualization.",
    image: smartvotingImage,
    tech: ["React.js", "Node.js", "Python", "Flask", "Supabase", "Face Recognition"],
    link: "#",
  },
  {
    title: "AgriML",
    description: "Integrated Crop Recommendation, Soil Correction & Fertilizer Advisory System using Machine Learning. Employs Random Forest and XGBoost ensemble models for accurate predictions based on soil and climate data, providing farmer-friendly decision support.",
    image: agrimlImage,
    tech: ["Python", "Machine Learning", "Random Forest", "XGBoost", "Data Visualization"],
    link: "#",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="glass-card-hover overflow-hidden group relative"
      onMouseEnter={() => project.title === "SmartVoting Platform" && setIsHovered(true)}
      onMouseLeave={() => project.title === "SmartVoting Platform" && setIsHovered(false)}
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
          className="absolute inset-0 bg-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
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
            <motion.span
              key={tech}
              className="tech-chip"
              animate={
                project.title === "AgriML"
                  ? {
                    backgroundColor: [
                      'rgba(59, 130, 246, 0.1)',
                      'rgba(59, 130, 246, 0.1)',
                      'rgba(59, 130, 246, 0.1)',
                      'rgba(59, 130, 246, 0.1)',
                      'rgba(59, 130, 246, 0.1)',
                      'rgba(59, 130, 246, 0.1)',
                      'rgba(147, 197, 253, 0.3)',
                      'rgba(224, 242, 254, 0.4)',
                      'rgba(147, 197, 253, 0.3)'
                    ],
                    color: [
                      'rgb(96, 165, 250)',
                      'rgb(96, 165, 250)',
                      'rgb(96, 165, 250)',
                      'rgb(96, 165, 250)',
                      'rgb(96, 165, 250)',
                      'rgb(96, 165, 250)',
                      'rgb(191, 219, 254)',
                      'rgb(255, 255, 255)',
                      'rgb(191, 219, 254)'
                    ]
                  }
                  : {}
              }
              transition={
                project.title === "AgriML"
                  ? {
                    duration: 1,
                    repeat: Infinity,
                    repeatDelay: 2,
                    delay: 2,
                    times: [0, 0.6, 0.62, 0.64, 0.66, 0.68, 0.7, 0.85, 1]
                  }
                  : {}
              }
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Pet Shop Animation - Running AROUND the card */}
      {project.title === "Pet Shop Website" && (
        <div className="absolute inset-0 pointer-events-none overflow-visible" style={{ zIndex: 100 }}>
          {/* Running Cat - Horizontal 3D Loop */}
          <motion.div
            className="absolute bottom-8"
            animate={{
              x: [-20, 450],
              y: [0, -15, 0, -20, 0, -15, 0, -25, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}

            style={{ width: '70px', height: '70px' }}
          >
            <div className="cat-run" />
          </motion.div>

          {/* Running Dog - Horizontal 3D Loop (delayed) */}
          <motion.div
            className="absolute bottom-8"
            animate={{
              x: [-100, 370],
              y: [0, -12, 0, -18, 0, -12, 0, -22, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}

            style={{ width: '80px', height: '80px' }}
          >
            <div className="dog-run" />
          </motion.div>
        </div>
      )}

      {/* SmartVoting Animation - Enhanced Face Recognition Scanner */}
      {project.title === "SmartVoting Platform" && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 100 }}>
          {/* Pulse Border Effect */}
          <motion.div
            className="absolute inset-0"
            animate={{
              boxShadow: isHovered
                ? [
                  '0 0 0 0 rgba(59, 130, 246, 0)',
                  '0 0 0 4px rgba(59, 130, 246, 0.4)',
                  '0 0 0 0 rgba(59, 130, 246, 0)'
                ]
                : '0 0 0 0 rgba(59, 130, 246, 0)'
            }}
            transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
            style={{ borderRadius: '12px' }}
          />

          {/* Corner Brackets (Camera Frame) - Always Visible */}
          <motion.div
            animate={{ opacity: 1 }}
            style={{ position: 'absolute', inset: '16px' }}
          >
            <div style={{ position: 'absolute', top: 0, left: 0, width: '40px', height: '40px', borderTop: '3px solid #3b82f6', borderLeft: '3px solid #3b82f6' }} />
            <div style={{ position: 'absolute', top: 0, right: 0, width: '40px', height: '40px', borderTop: '3px solid #3b82f6', borderRight: '3px solid #3b82f6' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '40px', height: '40px', borderBottom: '3px solid #3b82f6', borderLeft: '3px solid #3b82f6' }} />
            <div style={{ position: 'absolute', bottom: 0, right: 0, width: '40px', height: '40px', borderBottom: '3px solid #3b82f6', borderRight: '3px solid #3b82f6' }} />
          </motion.div>

          {/* Main Scanning Light */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              animate={{
                x: isHovered ? ['-100%', '100%'] : '-100%'
              }}
              transition={{
                duration: 2,
                ease: 'linear'
              }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.6) 50%, transparent 100%)',
                boxShadow: '0 0 30px 10px rgba(59, 130, 246, 0.5)',
                filter: 'blur(5px)'
              }}
            />

            {/* Scanning grid overlay */}
            <motion.div
              animate={{
                opacity: isHovered ? [0, 0.3, 0.3, 0] : 0
              }}
              transition={{
                duration: 2,
                times: [0, 0.2, 0.8, 1]
              }}
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `
                  linear-gradient(0deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px'
              }}
            />

            {/* Horizontal Scanning Lines */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{
                  y: isHovered ? ['-10%', '110%'] : '-10%',
                  opacity: isHovered ? [0, 1, 1, 0] : 0
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.3,
                  times: [0, 0.1, 0.9, 1]
                }}
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: 'rgba(59, 130, 246, 0.8)',
                  boxShadow: '0 0 10px rgba(59, 130, 246, 0.8)'
                }}
              />
            ))}
          </motion.div>

          {/* Face Detection Box - On Hover */}
          <motion.div
            initial={{ opacity: 0, scale: 1.5 }}
            animate={{
              opacity: isHovered ? [0, 1, 1, 0] : 0,
              scale: isHovered ? [1.5, 1, 1, 1] : 1.5
            }}
            transition={{
              duration: 2,
              times: [0, 0.3, 0.7, 1]
            }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '120px',
              height: '120px',
              border: '2px solid #3b82f6',
              borderRadius: '8px',
              boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)'
            }}
          />

          {/* Status Text */}
          <motion.div
            animate={{
              opacity: isHovered ? [0, 1, 1, 0] : 0
            }}
            transition={{
              duration: 2,
              times: [0, 0.2, 0.8, 1]
            }}
            style={{
              position: 'absolute',
              top: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'rgba(15, 23, 42, 0.9)',
              padding: '8px 16px',
              borderRadius: '20px',
              border: '1px solid rgba(59, 130, 246, 0.5)',
              color: '#3b82f6',
              fontSize: '12px',
              fontWeight: '600',
              letterSpacing: '1px'
            }}
          >
            <motion.span
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              AUTHENTICATING...
            </motion.span>
          </motion.div>

          {/* Verified Checkmark */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: isHovered ? [0, 0, 0, 1, 1, 0] : 0,
              scale: isHovered ? [0, 0, 0, 1.2, 1, 1] : 0
            }}
            transition={{
              duration: 2.5,
              times: [0, 0.6, 0.7, 0.8, 0.9, 1]
            }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              background: 'rgba(34, 197, 94, 0.95)',
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 30px rgba(34, 197, 94, 0.6)'
            }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
              <motion.path
                d="M5 13l4 4L19 7"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: isHovered ? [0, 0, 0, 1] : 0 }}
                transition={{ duration: 2.5, times: [0, 0.7, 0.75, 1] }}
              />
            </svg>
          </motion.div>

          {/* Particle Effects */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                opacity: isHovered ? [0, 1, 0] : 0,
                scale: isHovered ? [0, 1, 0] : 0,
                x: isHovered ? [0, (Math.cos((i / 8) * Math.PI * 2) * 100)] : 0,
                y: isHovered ? [0, (Math.sin((i / 8) * Math.PI * 2) * 100)] : 0
              }}
              transition={{
                duration: 1.5,
                delay: 0.5 + i * 0.1,
                times: [0, 0.5, 1]
              }}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '6px',
                height: '6px',
                background: '#3b82f6',
                borderRadius: '50%',
                boxShadow: '0 0 10px rgba(59, 130, 246, 0.8)'
              }}
            />
          ))}
        </div>
      )}

      {/* AgriML Animation - Growing Plant & Dynamic Weather */}
      {project.title === "AgriML" && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 100 }}>
          {/* Growing Plant at Right Bottom */}
          <motion.div
            style={{
              position: 'absolute',
              bottom: '16px',
              right: '16px',
              fontSize: '56px'
            }}
          >
            <motion.div
              animate={{
                scale: [0, 1, 1, 1],
                rotate: [0, 0, 5, -5, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 1,
                ease: "easeOut"
              }}
            >
              🌱
            </motion.div>
          </motion.div>

          {/* Weather Icon - Centered Left */}
          <div style={{
            position: 'absolute',
            top: '47%',
            left: '25%',
            transform: 'translateY(-50%)',
            fontSize: '40px'
          }}>
            {/* Sun Icon with Heat Waves */}
            <motion.div
              animate={{
                opacity: [0, 1, 1, 1, 0],
                scale: [0.8, 1, 1, 1, 0.8]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatDelay: 2,
                times: [0, 0.1, 0.4, 0.9, 1]
              }}
              style={{ position: 'relative' }}
            >
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                ☀️
              </motion.span>

              {/* Heat Wave Effect */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    opacity: [0, 0.6, 0],
                    y: [-20, -40],
                    x: [0, (i - 1) * 5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3
                  }}
                  style={{
                    position: 'absolute',
                    top: '-10px',
                    left: '50%',
                    fontSize: '20px'
                  }}
                >
                  🔥
                </motion.div>
              ))}
            </motion.div>

            {/* Rain Icon with Heavy Storm */}
            <motion.div
              animate={{
                opacity: [0, 0, 0, 0, 0, 1, 1, 1, 0],
                scale: [0.8, 0.8, 0.8, 0.8, 0.8, 1, 1, 1, 0.8]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatDelay: 2,
                delay: 1,
                times: [0, 0.3, 0.35, 0.4, 0.45, 0.5, 0.7, 0.95, 1]
              }}
              style={{ position: 'absolute', top: 0, left: 0 }}
            >
              🌧️

              {/* Heavy Rain Drops */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    opacity: [0, 1, 1, 0],
                    y: [0, 80]
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.1
                  }}
                  style={{
                    position: 'absolute',
                    top: '30px',
                    left: `${-20 + i * 7}px`,
                    fontSize: '18px'
                  }}
                >
                  💧
                </motion.div>
              ))}

              {/* Lightning Effect */}
              <motion.div
                animate={{
                  opacity: [0, 1, 0, 1, 0],
                  scale: [1, 1.5, 1, 1.5, 1]
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
                style={{
                  position: 'absolute',
                  top: '10px',
                  left: '20px',
                  fontSize: '24px'
                }}
              >
                ⚡
              </motion.div>
            </motion.div>

            {/* Snow Icon with Heavy Snowfall */}
            <motion.div
              animate={{
                opacity: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
                scale: [0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 1, 1, 1, 0.8]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatDelay: 2,
                delay: 2,
                times: [0, 0.6, 0.62, 0.64, 0.66, 0.68, 0.7, 0.72, 0.74, 0.76, 0.78, 0.85, 0.98, 1]
              }}
              style={{ position: 'absolute', top: 0, left: 0 }}
            >
              ❄️

              {/* Heavy Snowflakes */}
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    opacity: [0, 1, 1, 0],
                    y: [0, 90],
                    x: [0, (i % 2 === 0 ? 15 : -15)],
                    rotate: [0, 360]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: "linear"
                  }}
                  style={{
                    position: 'absolute',
                    top: '30px',
                    left: `${-30 + i * 6}px`,
                    fontSize: '16px'
                  }}
                >
                  ❄️
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      )}
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
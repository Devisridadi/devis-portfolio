import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border/50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
          <span>Crafted with</span>
          <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" />
          <span>by</span>
          <span className="gradient-text font-medium">Devi Sri Dadi</span>
        </p>
        <p className="text-muted-foreground/60 text-xs mt-2">
          Computer Science Student • Web Developer • AI Enthusiast
        </p>
        <p className="text-muted-foreground/40 text-xs mt-4">
          © {currentYear} All rights reserved
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
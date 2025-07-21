import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "Email" }
  ];

  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#" },
        { name: "Pricing", href: "#" },
        { name: "Documentation", href: "#" },
        { name: "API", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Contact", href: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Help Center", href: "#" },
        { name: "Community", href: "#" },
        { name: "Status", href: "#" },
        { name: "Changelog", href: "#" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy", href: "#" },
        { name: "Terms", href: "#" },
        { name: "Security", href: "#" },
        { name: "Cookies", href: "#" }
      ]
    }
  ];

  return (
    <motion.footer 
      className="bg-background/95 backdrop-blur-sm border-t border-border/50 relative z-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <motion.div 
              className="flex items-center space-x-2 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <motion.div
                  className="w-4 h-4 bg-white rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <span className="text-xl font-bold text-foreground">ContextGen</span>
            </motion.div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Transform your ideas into rich, comprehensive contexts with the power of AI. 
              Perfect for researchers, creators, and innovators.
            </p>
            <div className="flex space-x-2">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={social.label}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="ghost" size="sm" className="w-10 h-10 p-0">
                    <social.icon className="w-4 h-4" />
                    <span className="sr-only">{social.label}</span>
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <motion.div key={section.title} variants={itemVariants}>
              <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          variants={itemVariants}
        >
          <div className="flex items-center space-x-1 text-sm text-muted-foreground mb-4 md:mb-0">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </motion.div>
            <span>by the ContextGen team</span>
          </div>
          <div className="text-sm text-muted-foreground">
            © 2024 ContextGen. All rights reserved.
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
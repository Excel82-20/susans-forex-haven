import { motion } from "framer-motion";
import { Mail, MessageSquare, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-card/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
            Get in Touch
          </h2>
          <p className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-6">
            Ready to start your trading journey?
          </p>
          <p className="text-muted-foreground max-w-xl mx-auto mb-12">
            Whether you're looking for mentorship, signals, or account management — 
            I'd love to connect and discuss how we can work together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="mailto:susan@example.com"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            <Mail size={18} />
            Email Me
            <ArrowUpRight size={16} />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-lg border border-border text-foreground font-semibold hover:border-primary/50 hover:text-primary transition-colors"
          >
            <MessageSquare size={18} />
            Book a Call
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

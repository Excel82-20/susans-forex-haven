import { motion } from "framer-motion";
import { BookOpen, Users, LineChart, Lightbulb } from "lucide-react";

const services = [
  {
    icon: LineChart,
    title: "Managed Accounts",
    description: "Professional management of your trading account with transparent reporting and consistent returns.",
  },
  {
    icon: BookOpen,
    title: "Trading Mentorship",
    description: "One-on-one coaching sessions covering strategy development, risk management, and market psychology.",
  },
  {
    icon: Users,
    title: "Signal Service",
    description: "Real-time trade signals with detailed entry, exit, and stop-loss levels for major currency pairs.",
  },
  {
    icon: Lightbulb,
    title: "Market Analysis",
    description: "Daily and weekly market breakdowns covering key economic events and technical setups.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
            Services
          </h2>
          <p className="text-3xl md:text-4xl font-display font-semibold text-foreground">
            How I can help you <span className="text-primary">grow</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-8 rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex-shrink-0 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon size={22} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

import { motion } from "framer-motion";
import { Target, Shield, BarChart3 } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Precision",
    description: "Every trade is backed by rigorous technical and fundamental analysis.",
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Capital preservation is the foundation of long-term profitability.",
  },
  {
    icon: BarChart3,
    title: "Consistency",
    description: "Disciplined strategies that deliver steady, reliable returns over time.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
            About Me
          </h2>
          <p className="text-3xl md:text-4xl font-display font-semibold text-foreground leading-snug mb-6">
            Turning market volatility into{" "}
            <span className="text-primary">opportunity</span>.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I'm Susan Shrestha — a full-time Forex trader specializing in major and exotic currency pairs. 
            With over 8 years of experience in the financial markets, I combine technical analysis, 
            macroeconomic insight, and strict risk management to navigate the world's largest financial market. 
            My approach is rooted in patience, discipline, and continuous learning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group p-8 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:glow-gold transition-shadow">
                <pillar.icon size={22} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {pillar.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

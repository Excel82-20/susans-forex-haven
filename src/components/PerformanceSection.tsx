import { motion } from "framer-motion";

const stats = [
  { label: "Average Monthly Return", value: "6.8%", color: "text-primary" },
  { label: "Max Drawdown", value: "4.2%", color: "text-foreground" },
  { label: "Risk-Reward Ratio", value: "1:2.5", color: "text-primary" },
  { label: "Total Trades (2025)", value: "1,240+", color: "text-foreground" },
  { label: "Profitable Months", value: "92%", color: "text-primary" },
  { label: "Sharpe Ratio", value: "2.1", color: "text-foreground" },
];

const PerformanceSection = () => {
  return (
    <section id="performance" className="section-padding bg-card/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
            Performance
          </h2>
          <p className="text-3xl md:text-4xl font-display font-semibold text-foreground">
            Numbers that speak for themselves
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-background p-8 md:p-10 text-center"
            >
              <div className={`text-3xl md:text-4xl font-bold font-display ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;

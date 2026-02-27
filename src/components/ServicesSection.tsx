import { motion } from "framer-motion";
import { Scissors, SprayCan, Sparkles, Crown } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Classic Haircut",
    description: "Precision cut tailored to your face shape and style preferences.",
    price: "$35",
    duration: "45 min",
  },
  {
    icon: SprayCan,
    title: "Beard Trim & Shape",
    description: "Expert beard grooming with hot towel treatment and oil finish.",
    price: "$25",
    duration: "30 min",
  },
  {
    icon: Crown,
    title: "Royal Package",
    description: "Haircut, beard trim, hot towel, scalp massage, and styling.",
    price: "$65",
    duration: "90 min",
  },
  {
    icon: Sparkles,
    title: "Kids Cut",
    description: "Fun, patient haircuts for the young gentlemen. Ages 3–12.",
    price: "$20",
    duration: "30 min",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3">What We Offer</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Every service includes a consultation to ensure the perfect result.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card border border-border rounded-xl p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-gold"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {service.description}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-primary font-display text-2xl font-bold">{service.price}</span>
                <span className="text-muted-foreground text-sm">{service.duration}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

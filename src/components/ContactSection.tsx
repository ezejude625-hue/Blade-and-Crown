import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3">Find Us</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Get in Touch</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {[
            { icon: MapPin, label: "Location", value: "123 Barber Street, Downtown" },
            { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
            { icon: Clock, label: "Hours", value: "Mon–Sat: 9AM – 7PM" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
              <p className="font-medium">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

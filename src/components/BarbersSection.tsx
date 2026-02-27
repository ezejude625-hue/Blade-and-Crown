import { motion } from "framer-motion";
import { Star } from "lucide-react";
import barber1 from "@/assets/barber-1.jpg";
import barber2 from "@/assets/barber-2.jpg";
import barber3 from "@/assets/barber-3.jpg";

const barbers = [
  {
    name: "James Carter",
    role: "Master Barber",
    image: barber1,
    rating: 4.9,
    experience: "12 years",
  },
  {
    name: "Michael Brooks",
    role: "Senior Stylist",
    image: barber2,
    rating: 4.8,
    experience: "8 years",
  },
  {
    name: "Daniel White",
    role: "Beard Specialist",
    image: barber3,
    rating: 4.9,
    experience: "10 years",
  },
];

const BarbersSection = () => {
  return (
    <section id="barbers" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3">The Team</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Meet Our Barbers</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Skilled professionals dedicated to making you look your best.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {barbers.map((barber, i) => (
            <motion.div
              key={barber.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group text-center"
            >
              <div className="relative mb-5 overflow-hidden rounded-xl border border-border group-hover:border-primary/40 transition-colors">
                <img
                  src={barber.image}
                  alt={barber.name}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-primary fill-primary" />
                    <span className="text-sm font-medium">{barber.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{barber.experience}</span>
                </div>
              </div>
              <h3 className="font-display text-xl font-semibold">{barber.name}</h3>
              <p className="text-muted-foreground text-sm">{barber.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BarbersSection;

import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Clock, User, Scissors, Check } from "lucide-react";
import { toast } from "sonner";

const services = ["Classic Haircut", "Beard Trim & Shape", "Royal Package", "Kids Cut"];
const barbers = ["James Carter", "Michael Brooks", "Daniel White", "No Preference"];
const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];

const BookingSection = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    barber: "",
    date: "",
    time: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.service || !form.date || !form.time) {
      toast.error("Please fill in all required fields");
      return;
    }
    setSubmitted(true);
    toast.success("Booking confirmed! We'll see you soon.");
  };

  if (submitted) {
    return (
      <section id="booking" className="py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto text-center bg-card border border-primary/30 rounded-2xl p-12 shadow-gold"
          >
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <Check className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-display text-3xl font-bold mb-3">Booking Confirmed!</h3>
            <p className="text-muted-foreground mb-6">
              {form.service} with {form.barber || "any available barber"} on {form.date} at {form.time}.
            </p>
            <button
              onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", service: "", barber: "", date: "", time: "" }); }}
              className="text-primary underline underline-offset-4 hover:opacity-80 transition-opacity"
            >
              Book another appointment
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3">Reserve Your Spot</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Book an Appointment</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Choose your service, pick a time, and we'll handle the rest.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-card border border-border rounded-2xl p-8 md:p-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Name */}
            <div>
              <label className="text-sm text-muted-foreground mb-2 flex items-center gap-2">
                <User className="h-4 w-4" /> Full Name *
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                placeholder="John Doe"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-sm text-muted-foreground mb-2 flex items-center gap-2">
                <User className="h-4 w-4" /> Phone Number *
              </label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            {/* Service */}
            <div>
              <label className="text-sm text-muted-foreground mb-2 flex items-center gap-2">
                <Scissors className="h-4 w-4" /> Service *
              </label>
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
              >
                <option value="">Select a service</option>
                {services.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            {/* Barber */}
            <div>
              <label className="text-sm text-muted-foreground mb-2 flex items-center gap-2">
                <User className="h-4 w-4" /> Preferred Barber
              </label>
              <select
                value={form.barber}
                onChange={(e) => setForm({ ...form, barber: e.target.value })}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
              >
                <option value="">No preference</option>
                {barbers.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>

            {/* Date */}
            <div>
              <label className="text-sm text-muted-foreground mb-2 flex items-center gap-2">
                <CalendarDays className="h-4 w-4" /> Date *
              </label>
              <input
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                min={new Date().toISOString().split("T")[0]}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
              />
            </div>

            {/* Time */}
            <div>
              <label className="text-sm text-muted-foreground mb-2 flex items-center gap-2">
                <Clock className="h-4 w-4" /> Time *
              </label>
              <select
                value={form.time}
                onChange={(e) => setForm({ ...form, time: e.target.value })}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
              >
                <option value="">Select a time</option>
                {timeSlots.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-gold text-primary-foreground font-semibold py-4 rounded-lg hover:opacity-90 transition-opacity shadow-gold text-lg"
          >
            Confirm Booking
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default BookingSection;

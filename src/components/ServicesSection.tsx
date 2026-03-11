import { Shield, Clock, Users, MapPin, Headphones, CreditCard } from "lucide-react";

const services = [
  { icon: Users, title: "Professional Drivers", desc: "Experienced, well-trained, and courteous drivers who know every route." },
  { icon: Shield, title: "Safe & Clean Cars", desc: "Well-maintained, sanitized vehicles with regular safety inspections." },
  { icon: Clock, title: "On-Time Pickup", desc: "Punctual service guaranteed. We value your time as much as you do." },
  { icon: MapPin, title: "Outstation & Local", desc: "City tours, airport transfers, and outstation trips across India." },
  { icon: Headphones, title: "24/7 Support", desc: "Round-the-clock customer support for bookings and on-trip assistance." },
  { icon: CreditCard, title: "Transparent Pricing", desc: "No hidden charges. Pay only for what you use with clear rate cards." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Quality Service, Every Trip
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div key={s.title} className="flex gap-4 p-6 rounded-xl bg-card shadow-card hover:shadow-card-hover transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <s.icon size={24} className="text-accent" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

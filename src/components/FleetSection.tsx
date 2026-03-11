import { Car, Users, Fuel, Snowflake } from "lucide-react";

const cars = [
  { name: "Maruti Swift Dzire", type: "Sedan", seats: 4, fuel: "Petrol/CNG", ac: true, rate: "From ₹1,200" },
  { name: "Toyota Innova Crysta", type: "SUV", seats: 7, fuel: "Diesel", ac: true, rate: "From ₹2,000" },
  { name: "Maruti WagonR", type: "Hatchback", seats: 4, fuel: "Petrol/CNG", ac: true, rate: "From ₹900" },
  { name: "Maruti Ertiga", type: "MPV", seats: 7, fuel: "Petrol/CNG", ac: true, rate: "From ₹1,800" },
  { name: "Hyundai Aura", type: "Sedan", seats: 4, fuel: "Petrol/CNG", ac: true, rate: "From ₹1,200" },
  { name: "Tempo Traveller", type: "Van", seats: 12, fuel: "Diesel", ac: true, rate: "From ₹4,500" },
];

const FleetSection = () => {
  return (
    <section id="fleet" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">Our Fleet</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Choose Your Perfect Ride
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <div key={car.name} className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow">
              <div className="bg-primary/5 p-8 flex items-center justify-center">
                <Car size={64} className="text-primary/40" />
              </div>
              <div className="p-5">
                <h3 className="font-heading font-bold text-foreground">{car.name}</h3>
                <span className="inline-block text-xs font-medium bg-accent/10 text-accent px-2 py-0.5 rounded mt-1 mb-3">
                  {car.type}
                </span>
                <div className="flex items-center gap-4 text-muted-foreground text-sm mb-4">
                  <span className="flex items-center gap-1"><Users size={14} /> {car.seats}</span>
                  <span className="flex items-center gap-1"><Fuel size={14} /> {car.fuel}</span>
                  {car.ac && <span className="flex items-center gap-1"><Snowflake size={14} /> AC</span>}
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-accent text-lg">{car.rate}</span>
                  <a href="#contact" className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
                    Book
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetSection;

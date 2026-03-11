import { Check } from "lucide-react";

interface Plan {
  name: string;
  duration: string;
  km: string;
  cars: { type: string; price: string }[];
  popular?: boolean;
}

const plans: Plan[] = [
  {
    name: "City Ride",
    duration: "4 Hours",
    km: "40 KM",
    cars: [
      { type: "Sedan (Swift Dzire)", price: "₹1,200" },
      { type: "SUV (Innova)", price: "₹2,000" },
      { type: "Hatchback (WagonR)", price: "₹900" },
    ],
  },
  {
    name: "Half Day",
    duration: "8 Hours",
    km: "80 KM",
    popular: true,
    cars: [
      { type: "Sedan (Swift Dzire)", price: "₹2,000" },
      { type: "SUV (Innova)", price: "₹3,500" },
      { type: "Hatchback (WagonR)", price: "₹1,500" },
    ],
  },
  {
    name: "Full Day",
    duration: "12 Hours",
    km: "120 KM",
    cars: [
      { type: "Sedan (Swift Dzire)", price: "₹2,800" },
      { type: "SUV (Innova)", price: "₹4,500" },
      { type: "Hatchback (WagonR)", price: "₹2,000" },
    ],
  },
  {
    name: "Outstation",
    duration: "Per Day",
    km: "Unlimited*",
    cars: [
      { type: "Sedan (Swift Dzire)", price: "₹10/km" },
      { type: "SUV (Innova)", price: "₹16/km" },
      { type: "Hatchback (WagonR)", price: "₹8/km" },
    ],
  },
];

const PlansSection = () => {
  return (
    <section id="plans" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">Our Plans</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Affordable Rental Packages
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Choose from our flexible plans. All packages include a professional driver, fuel, and toll charges.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow relative ${
                plan.popular ? "ring-2 ring-accent" : ""
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent-gradient text-accent-foreground text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="font-heading font-bold text-xl text-foreground mb-1">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mb-1">{plan.duration} · {plan.km}</p>
              <div className="h-px bg-border my-4" />
              <ul className="space-y-3">
                {plan.cars.map((car) => (
                  <li key={car.type} className="flex items-start gap-2">
                    <Check size={16} className="text-accent mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground">{car.type}</p>
                      <p className="text-accent font-bold text-lg">{car.price}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-6 block text-center py-2.5 rounded-lg font-semibold text-sm transition-opacity hover:opacity-90 ${
                  plan.popular
                    ? "bg-accent-gradient text-accent-foreground"
                    : "bg-primary text-primary-foreground"
                }`}
              >
                Book Now
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-xs mt-8">
          * Extra KM charges apply beyond the package limit. Prices may vary for AC/Non-AC. Night charges extra after 10 PM.
        </p>
      </div>
    </section>
  );
};

export default PlansSection;

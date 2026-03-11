import heroCar from "@/assets/hero-car.png";
import { MapPin, Calendar, Search } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="bg-hero min-h-[90vh] flex items-center pt-16 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
              RJ Barai Tours & Travels
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-primary-foreground leading-tight mb-6">
              Your Journey,{" "}
              <span className="text-gradient">Our Wheels</span>
            </h1>
            <p className="text-primary-foreground/70 text-lg mb-8 max-w-lg">
              Premium car rental with experienced drivers. Affordable packages for local trips, outstation travel, and airport transfers.
            </p>

            {/* Search box */}
            <div className="bg-card rounded-xl p-4 shadow-card max-w-xl">
              <p className="font-heading font-semibold text-foreground mb-3">Find Your Ride</p>
              <div className="grid sm:grid-cols-3 gap-3">
                <div className="flex items-center gap-2 border border-border rounded-lg px-3 py-2.5">
                  <MapPin size={16} className="text-accent shrink-0" />
                  <input placeholder="Pickup Location" className="bg-transparent text-sm outline-none w-full text-foreground placeholder:text-muted-foreground" />
                </div>
                <div className="flex items-center gap-2 border border-border rounded-lg px-3 py-2.5">
                  <Calendar size={16} className="text-accent shrink-0" />
                  <input type="date" className="bg-transparent text-sm outline-none w-full text-foreground" />
                </div>
                <button className="bg-accent-gradient text-accent-foreground rounded-lg px-4 py-2.5 font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                  <Search size={16} />
                  Search
                </button>
              </div>
            </div>
          </div>

          <div className="animate-fade-up hidden lg:block" style={{ animationDelay: "0.2s" }}>
            <img src={heroCar} alt="Premium rental car" className="w-full rounded-2xl shadow-card-hover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

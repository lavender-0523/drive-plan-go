import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Book Your Ride Now
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Form */}
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <input placeholder="Full Name" className="border border-border rounded-lg px-4 py-3 text-sm bg-card text-foreground outline-none focus:ring-2 focus:ring-accent/40 placeholder:text-muted-foreground" />
              <input placeholder="Phone Number" className="border border-border rounded-lg px-4 py-3 text-sm bg-card text-foreground outline-none focus:ring-2 focus:ring-accent/40 placeholder:text-muted-foreground" />
            </div>
            <input placeholder="Email Address" className="w-full border border-border rounded-lg px-4 py-3 text-sm bg-card text-foreground outline-none focus:ring-2 focus:ring-accent/40 placeholder:text-muted-foreground" />
            <select className="w-full border border-border rounded-lg px-4 py-3 text-sm bg-card text-foreground outline-none focus:ring-2 focus:ring-accent/40">
              <option value="">Select Package</option>
              <option>City Ride (4 Hrs / 40 KM)</option>
              <option>Half Day (8 Hrs / 80 KM)</option>
              <option>Full Day (12 Hrs / 120 KM)</option>
              <option>Outstation</option>
            </select>
            <textarea placeholder="Additional Details (pickup location, date, etc.)" rows={4} className="w-full border border-border rounded-lg px-4 py-3 text-sm bg-card text-foreground outline-none focus:ring-2 focus:ring-accent/40 resize-none placeholder:text-muted-foreground" />
            <button type="submit" className="w-full bg-accent-gradient text-accent-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Send Booking Request
            </button>
          </form>

          {/* Contact info */}
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <Phone size={20} className="text-accent" />
              </div>
              <div>
                <p className="font-heading font-semibold text-foreground">Call Us</p>
                <a href="tel:+919876543210" className="text-muted-foreground hover:text-accent transition-colors">+91 98765 43210</a>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <Mail size={20} className="text-accent" />
              </div>
              <div>
                <p className="font-heading font-semibold text-foreground">Email Us</p>
                <a href="mailto:info@rjbarai.com" className="text-muted-foreground hover:text-accent transition-colors">info@rjbarai.com</a>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-accent" />
              </div>
              <div>
                <p className="font-heading font-semibold text-foreground">Visit Us</p>
                <p className="text-muted-foreground">Rajasthan, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

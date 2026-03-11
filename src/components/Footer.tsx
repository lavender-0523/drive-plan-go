import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="RJ Barai" className="h-10 w-10 rounded-full" />
              <span className="font-heading font-bold text-lg text-primary-foreground">
                RJ Barai<span className="text-accent">.</span>
              </span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Trusted car rental service with professional drivers. Making your journey comfortable and affordable.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/60 text-sm">
              <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#plans" className="hover:text-accent transition-colors">Plans & Pricing</a></li>
              <li><a href="#fleet" className="hover:text-accent transition-colors">Our Fleet</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-primary-foreground/60 text-sm">
              <li>Local City Rides</li>
              <li>Outstation Trips</li>
              <li>Airport Transfers</li>
              <li>Wedding Car Rental</li>
            </ul>
          </div>
        </div>
        <div className="h-px bg-primary-foreground/10 mb-6" />
        <p className="text-center text-primary-foreground/40 text-sm">
          © 2026 RJ Barai Tours & Travels. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

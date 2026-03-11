import logo from "@/assets/logo.png";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", href: "#home" },
    { label: "Plans", href: "#plans" },
    { label: "Fleet", href: "#fleet" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="RJ Barai Tours & Travels" className="h-10 w-10 rounded-full" />
          <span className="font-heading font-bold text-lg text-primary-foreground">
            RJ Barai<span className="text-accent">.</span>
          </span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-primary-foreground/80 hover:text-accent transition-colors text-sm font-medium">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="tel:+919876543210" className="hidden md:flex items-center gap-2 bg-accent-gradient text-accent-foreground px-5 py-2 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity">
          <Phone size={16} />
          Call Now
        </a>

        <button onClick={() => setOpen(!open)} className="md:hidden text-primary-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile */}
      {open && (
        <div className="md:hidden bg-primary border-t border-primary-foreground/10 pb-4">
          <ul className="flex flex-col items-center gap-4 pt-4">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="text-primary-foreground/80 hover:text-accent transition-colors font-medium">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="tel:+919876543210" className="bg-accent-gradient text-accent-foreground px-5 py-2 rounded-lg font-semibold text-sm">
                <Phone size={16} className="inline mr-2" />Call Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import { Link, useLocation } from "wouter";
import { settings } from "@/data/settings";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { Menu, X, Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/collections", label: "Collections" },
  { href: "/packages", label: "Packages" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function PublicLayout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-[100dvh] flex flex-col bg-background relative selection:bg-primary/30 selection:text-foreground">
      {/* Navbar */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
          isScrolled || location !== "/" || mobileMenuOpen
            ? "bg-background/90 backdrop-blur-md border-border shadow-sm py-4"
            : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group z-50">
            <span className={cn("font-serif text-2xl tracking-wider uppercase transition-colors",
              isScrolled || location !== "/" || mobileMenuOpen ? "text-foreground" : "text-white"
            )}>
              Mazini <span className="font-light text-primary">Events</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm uppercase tracking-widest font-medium transition-colors hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full",
                  location === link.href
                    ? "text-primary after:w-full"
                    : (isScrolled || location !== "/" ? "text-muted-foreground" : "text-white/80 hover:text-white")
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className={cn("px-6 py-2 border text-sm uppercase tracking-widest transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary",
                isScrolled || location !== "/" ? "border-border text-foreground" : "border-white/50 text-white hover:border-transparent"
              )}
            >
              Book Consultation
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={cn("md:hidden p-2 z-50 transition-colors",
              isScrolled || location !== "/" || mobileMenuOpen ? "text-foreground" : "text-white"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-xl z-40 flex items-center justify-center transition-all duration-500 md:hidden",
            mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          )}
        >
          <nav className="flex flex-col items-center gap-8 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-2xl font-serif tracking-widest transition-colors hover:text-primary",
                  location === link.href ? "text-primary" : "text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-4 mt-8">
              {settings.instagramUrl && (
                <a href={settings.instagramUrl} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram size={24} />
                </a>
              )}
              {settings.facebookUrl && (
                <a href={settings.facebookUrl} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook size={24} />
                </a>
              )}
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col w-full">{children}</main>

      {/* Footer */}
      <footer className="bg-secondary/30 pt-20 pb-10 border-t border-border mt-auto">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-6">
                <span className="font-serif text-2xl tracking-wider uppercase text-foreground">
                  Mazini <span className="font-light text-primary">Events</span>
                </span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {settings.aboutDescription}
              </p>
              <div className="flex items-center gap-4">
                {settings.instagramUrl && (
                  <a href={settings.instagramUrl} target="_blank" rel="noreferrer" className="h-10 w-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                    <Instagram size={18} />
                  </a>
                )}
                {settings.facebookUrl && (
                  <a href={settings.facebookUrl} target="_blank" rel="noreferrer" className="h-10 w-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                    <Facebook size={18} />
                  </a>
                )}
              </div>
            </div>

            <div>
              <h4 className="font-serif text-lg mb-6 tracking-wide">Quick Links</h4>
              <ul className="space-y-4">
                {navLinks.map(link => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-muted-foreground text-sm hover:text-primary transition-colors inline-block relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-primary after:transition-all hover:after:w-full">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-lg mb-6 tracking-wide">Collections</h4>
              <ul className="space-y-4">
                <li><Link href="/collections" className="text-muted-foreground text-sm hover:text-primary transition-colors">Date Prestige</Link></li>
                <li><Link href="/collections" className="text-muted-foreground text-sm hover:text-primary transition-colors">Weddings</Link></li>
                <li><Link href="/collections" className="text-muted-foreground text-sm hover:text-primary transition-colors">Parties</Link></li>
                <li><Link href="/collections" className="text-muted-foreground text-sm hover:text-primary transition-colors">Luxury Picnics</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-lg mb-6 tracking-wide">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                  <span>{settings.address}</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Phone size={18} className="text-primary shrink-0" />
                  <span>{settings.phone}</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Mail size={18} className="text-primary shrink-0" />
                  <span>{settings.email}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Mazini Events. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <FloatingWhatsApp />
    </div>
  );
}

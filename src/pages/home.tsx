import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { Star, Check } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { settings } from "@/data/settings";
import { collections } from "@/data/collections";
import { getFeaturedPackages } from "@/data/packages";
import { getFeaturedGallery } from "@/data/gallery";
import { getFeaturedTestimonials } from "@/data/testimonials";
import { faq } from "@/data/faq";

const featuredCollections = collections.filter((c) => c.featured).slice(0, 6);
const featuredPackages = getFeaturedPackages().slice(0, 6);
const featuredGallery = getFeaturedGallery().slice(0, 9);
const testimonials = getFeaturedTestimonials();

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[100dvh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/images/hero.png")' }}
        />
        <div className="absolute inset-0 z-10 bg-black/40" />

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-white font-medium mb-6 drop-shadow-lg"
          >
            {settings.heroTitle}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 font-light mb-10 max-w-2xl drop-shadow-md"
          >
            {settings.heroSubtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button asChild size="lg" className="h-14 px-8 text-base rounded-none bg-primary text-primary-foreground hover:bg-primary/90 transition-all uppercase tracking-widest font-medium">
              <Link href="/contact">Book Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-8 text-base rounded-none border-white/50 text-white hover:bg-white hover:text-black transition-all uppercase tracking-widest font-medium glass-panel">
              <Link href="/collections">Browse Collections</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary/20 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:divide-x md:divide-border">
            <div className="p-4">
              <h3 className="text-4xl md:text-5xl font-serif text-primary mb-2">{settings.eventsCompleted}+</h3>
              <p className="text-sm uppercase tracking-widest text-muted-foreground">Events Completed</p>
            </div>
            <div className="p-4">
              <h3 className="text-4xl md:text-5xl font-serif text-primary mb-2">{settings.happyClients}+</h3>
              <p className="text-sm uppercase tracking-widest text-muted-foreground">Happy Clients</p>
            </div>
            <div className="p-4 md:border-t-0 border-t border-border">
              <h3 className="text-4xl md:text-5xl font-serif text-primary mb-2">{settings.yearsOfExperience}</h3>
              <p className="text-sm uppercase tracking-widest text-muted-foreground">Years Experience</p>
            </div>
            <div className="p-4 md:border-t-0 border-t border-border">
              <h3 className="text-4xl md:text-5xl font-serif text-primary mb-2">{settings.totalCollections}</h3>
              <p className="text-sm uppercase tracking-widest text-muted-foreground">Collections</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-24 container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">Featured Collections</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Discover our signature styles, meticulously crafted for unforgettable moments.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredCollections.map((collection, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={collection.id}
              className="group relative h-[450px] overflow-hidden rounded-none block"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${collection.coverImage})` }}
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />

              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <span className="text-primary text-3xl mb-4 opacity-80">{collection.icon}</span>
                <h3 className="text-2xl font-serif mb-2">{collection.name}</h3>
                <p className="text-white/80 text-sm mb-6 line-clamp-2">{collection.description}</p>
                <div className="flex items-center justify-between">
                  <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white hover:text-black">
                    <Link href={`/collections/${collection.id}`}>Explore</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" className="rounded-none border-border px-8 uppercase tracking-widest text-sm hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
            <Link href="/collections">View All Collections</Link>
          </Button>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">Premium Packages</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Complete luxury experiences designed for your perfect occasion.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPackages.map((pkg, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={pkg.id}
                className="flex flex-col bg-card border border-border shadow-sm overflow-hidden"
              >
                <div
                  className="h-64 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${pkg.coverImage})` }}
                >
                  <div className="absolute inset-0 bg-black/20" />
                  {pkg.badge && (
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium uppercase tracking-widest">
                      {pkg.badge}
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-serif drop-shadow-md">{pkg.name}</h3>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <div className="mb-6">
                    <div className="text-3xl font-serif text-foreground mb-1">
                      {pkg.startingPrice} {pkg.currency}
                    </div>
                    <div className="text-sm text-muted-foreground uppercase tracking-widest">Starting Price</div>
                  </div>

                  <ul className="space-y-4 mb-8 flex-1">
                    {pkg.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check size={18} className="text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                    {pkg.features.length > 4 && (
                      <li className="text-sm text-muted-foreground italic pl-8">
                        + {pkg.features.length - 4} more features
                      </li>
                    )}
                  </ul>

                  <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-none uppercase tracking-widest">
                    <a
                      href={generateWhatsAppLink(settings.whatsappNumber, `Hello Mazini Events, I'm interested in the ${pkg.name} package.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Order on WhatsApp
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" className="rounded-none border-border px-8 uppercase tracking-widest text-sm hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
              <Link href="/packages">View All Packages</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Gallery */}
      <section className="py-24 container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-2">Our Portfolio</h2>
            <p className="text-muted-foreground">A glimpse into our magical setups.</p>
          </div>
          <Link href="/gallery" className="hidden md:inline-block text-sm uppercase tracking-widest font-medium text-primary hover:underline">
            View Gallery
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {featuredGallery.slice(0, 8).map((item, i) => (
            <div key={item.id} className={`relative group overflow-hidden ${i === 0 || i === 3 ? 'md:col-span-2 md:row-span-2 aspect-square md:aspect-auto' : 'aspect-square'}`}>
              <img
                src={item.imageUrl}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 uppercase tracking-widest text-xs font-medium translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <Link href="/gallery" className="text-sm uppercase tracking-widest font-medium text-primary hover:underline">
            View Full Gallery
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <section className="py-24 bg-secondary/10 border-y border-border overflow-hidden">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-16">Words of Love</h2>

            <Carousel className="w-full max-w-4xl mx-auto">
              <CarouselContent>
                {testimonials.map((t) => (
                  <CarouselItem key={t.id}>
                    <div className="p-6">
                      <div className="flex justify-center gap-1 mb-8 text-primary">
                        {Array.from({ length: t.rating }).map((_, i) => (
                          <Star key={i} size={20} fill="currentColor" />
                        ))}
                      </div>
                      <p className="text-xl md:text-2xl font-serif italic text-foreground mb-10 leading-relaxed">
                        "{t.review}"
                      </p>
                      <div className="flex flex-col items-center">
                        {t.clientPhoto && (
                          <img src={t.clientPhoto} alt={t.clientName} loading="lazy" className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-primary/20" />
                        )}
                        <h4 className="font-medium text-foreground uppercase tracking-widest text-sm">{t.clientName}</h4>
                        {t.eventType && (
                          <p className="text-xs text-muted-foreground mt-1 uppercase tracking-widest">{t.eventType}</p>
                        )}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-24 container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">Frequently Asked Questions</h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faq.map((item) => (
            <AccordionItem key={item.id} value={item.id} className="border-border">
              <AccordionTrigger className="text-left font-serif text-lg hover:no-underline hover:text-primary">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
}

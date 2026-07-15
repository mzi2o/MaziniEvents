import { generateWhatsAppLink } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getPackagesByCategory } from "@/data/packages";
import { settings } from "@/data/settings";

const groupedPackages = getPackagesByCategory();
const categories = Object.keys(groupedPackages);

export default function Packages() {
  return (
    <div className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">Luxury Packages</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Curated experiences for every occasion. Choose a package or contact us for a bespoke arrangement.
        </p>
      </div>

      <Tabs defaultValue={categories[0]} className="w-full">
        <div className="flex justify-center mb-12">
          <TabsList className="bg-transparent border-b border-border rounded-none h-auto p-0 flex-wrap justify-center">
            {categories.map((cat) => (
              <TabsTrigger
                key={cat}
                value={cat}
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 py-3 text-base font-serif tracking-wide data-[state=active]:text-primary"
              >
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {categories.map((cat) => (
          <TabsContent key={cat} value={cat} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {groupedPackages[cat].map((pkg, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={pkg.id}
                  className="flex flex-col bg-card border border-border overflow-hidden"
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

                    {pkg.description && (
                      <p className="text-muted-foreground text-sm mb-6 pb-6 border-b border-border">
                        {pkg.description}
                      </p>
                    )}

                    <ul className="space-y-4 mb-8 flex-1">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check size={18} className="text-primary shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-none uppercase tracking-widest">
                      <a
                        href={generateWhatsAppLink(
                          settings.whatsappNumber,
                          `Hello Mazini Events, I'm interested in the ${pkg.name} package starting from ${pkg.startingPrice} ${pkg.currency}. Could you send me more information?`
                        )}
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
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

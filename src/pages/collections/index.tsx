import { collections } from "@/data/collections";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Collections() {
  return (
    <div className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">Our Collections</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore our meticulously crafted decoration collections. From intimate dates to grand weddings, each collection is designed to create unforgettable moments.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {collections.map((collection, i) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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
              
              <h3 className="text-2xl font-serif mb-2">{collection.name}</h3>
              <p className="text-white/80 text-sm mb-6 line-clamp-2">{collection.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-primary font-medium">
                  {collection.designCount} Designs
                </span>
                <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white hover:text-black">
                  <Link href={`/collections/${collection.id}`}>Explore</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

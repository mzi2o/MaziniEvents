import { getCollectionById } from "@/data/collections";
import { getProductsByCollection } from "@/data/products";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function CollectionDetail({ id }: { id: string }) {
  const collectionId = parseInt(id);
  const collection = getCollectionById(collectionId);
  const products = getProductsByCollection(collectionId);

  if (!collection) {
    return (
      <div className="pt-32 pb-20 px-4 min-h-screen text-center text-muted-foreground">
        Collection not found
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Hero Banner */}
      <div
        className="relative h-[60vh] min-h-[400px] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${collection.coverImage})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">{collection.name}</h1>
            <p className="text-white/80 max-w-2xl mx-auto text-lg font-light">{collection.description}</p>
          </motion.div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-20 max-w-7xl">
        <div className="flex justify-between items-end mb-12 border-b border-border pb-6">
          <div>
            <h2 className="text-3xl font-serif text-foreground">Featured Designs</h2>
            <p className="text-muted-foreground mt-2">Explore the {collection.name} collection</p>
          </div>
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                key={product.id}
                className="group cursor-pointer block"
              >
                <Link href={`/products/${product.id}`}>
                  <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-muted">
                    <img
                      src={product.coverImage}
                      alt={product.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="font-serif text-xl text-foreground group-hover:text-primary transition-colors">{product.name}</h3>
                    <p className="text-muted-foreground mt-2 uppercase tracking-widest text-sm">
                      From {product.startingPrice} {product.currency}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-muted-foreground">
            No designs found for this collection yet.
          </div>
        )}
      </div>
    </div>
  );
}

import { getProductById } from "@/data/products";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Info } from "lucide-react";
import { settings } from "@/data/settings";

export default function ProductDetail({ id }: { id: string }) {
  const productId = parseInt(id);
  const product = getProductById(productId);
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  if (!product) {
    return (
      <div className="pt-32 pb-20 px-4 min-h-[70vh] flex items-center justify-center">
        <div className="text-center text-muted-foreground">Product not found</div>
      </div>
    );
  }

  const allImages = [product.coverImage, ...product.images].filter(Boolean);

  const nextImage = () => setCurrentImageIdx((prev) => (prev + 1) % allImages.length);
  const prevImage = () => setCurrentImageIdx((prev) => (prev - 1 + allImages.length) % allImages.length);

  return (
    <div className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

        {/* Images */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <div className="relative aspect-[4/5] bg-muted overflow-hidden group">
            {allImages.length > 0 ? (
              <>
                <img
                  src={allImages[currentImageIdx]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {allImages.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/50 hover:bg-white text-black rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-md"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/50 hover:bg-white text-black rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-md"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                No image available
              </div>
            )}
          </div>

          {allImages.length > 1 && (
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-none">
              {allImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIdx(idx)}
                  className={cn(
                    "relative w-20 h-24 shrink-0 overflow-hidden transition-all",
                    currentImageIdx === idx ? "ring-2 ring-primary" : "opacity-60 hover:opacity-100"
                  )}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col"
        >
          <div className="mb-8">
            <h1 className="text-3xl md:text-5xl font-serif text-foreground mb-4">{product.name}</h1>
            <div className="text-2xl text-primary font-medium">
              From {product.startingPrice} {product.currency}
            </div>
          </div>

          {product.description && (
            <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none text-muted-foreground mb-8">
              <p>{product.description}</p>
            </div>
          )}

          <div className="space-y-6 mb-10">
            {product.availableColors && product.availableColors.length > 0 && (
              <div>
                <h3 className="text-sm uppercase tracking-widest font-medium text-foreground mb-3">Available Colors</h3>
                <div className="flex flex-wrap gap-2">
                  {product.availableColors.map((color, i) => (
                    <span key={i} className="px-4 py-2 border border-border text-sm text-muted-foreground">
                      {color}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {product.availableSizes && product.availableSizes.length > 0 && (
              <div>
                <h3 className="text-sm uppercase tracking-widest font-medium text-foreground mb-3">Available Sizes / Capacities</h3>
                <div className="flex flex-wrap gap-2">
                  {product.availableSizes.map((size, i) => (
                    <span key={i} className="px-4 py-2 border border-border text-sm text-muted-foreground">
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="mt-auto pt-8 border-t border-border">
            <Button
              asChild
              size="lg"
              className="w-full h-14 bg-primary text-primary-foreground hover:bg-primary/90 rounded-none uppercase tracking-widest text-sm mb-4"
            >
              <a
                href={generateWhatsAppLink(
                  settings.whatsappNumber,
                  `Hello Mazini Events, I'm interested in the design "${product.name}" starting from ${product.startingPrice} ${product.currency}. Could you send me more information?`
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                Order on WhatsApp
              </a>
            </Button>

            {product.customizationOptions && (
              <div className="flex items-start gap-3 bg-secondary/30 p-4 text-sm text-muted-foreground">
                <Info size={18} className="text-primary shrink-0 mt-0.5" />
                <p>
                  <span className="font-medium text-foreground block mb-1">Customization available:</span>
                  {product.customizationOptions}
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

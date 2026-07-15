import { gallery } from "@/data/gallery";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const categories = ["All", ...Array.from(new Set(gallery.map((item) => item.category)))];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handleNext = () => {
    if (selectedImage === null) return;
    setSelectedImage((selectedImage + 1) % gallery.length);
  };

  const handlePrev = () => {
    if (selectedImage === null) return;
    setSelectedImage((selectedImage - 1 + gallery.length) % gallery.length);
  };

  return (
    <div className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">Gallery</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A glimpse into the magical moments we've created. Every setup is a unique love story.
        </p>
      </div>

      <Tabs defaultValue="All" className="w-full">
        <div className="flex justify-center mb-12">
          <TabsList className="bg-transparent border-b border-border rounded-none h-auto p-0 flex-wrap justify-center">
            {categories.map((cat) => (
              <TabsTrigger
                key={cat}
                value={cat}
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-6 py-3 text-sm uppercase tracking-widest data-[state=active]:text-primary"
              >
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {categories.map((cat) => (
          <TabsContent key={cat} value={cat} className="mt-0">
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {gallery
                .filter((item) => cat === "All" || item.category === cat)
                .map((item, i) => {
                  const originalIndex = gallery.findIndex((x) => x.id === item.id);
                  return (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      key={item.id}
                      className="break-inside-avoid relative group cursor-pointer overflow-hidden mb-6"
                      onClick={() => setSelectedImage(originalIndex)}
                    >
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                        <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0 text-center p-4">
                          <p className="font-serif text-lg">{item.title}</p>
                          <p className="text-xs uppercase tracking-widest mt-2 opacity-80">{item.category}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && gallery[selectedImage] && (
          <Dialog open={selectedImage !== null} onOpenChange={(open) => !open && setSelectedImage(null)}>
            <DialogContent className="max-w-[95vw] max-h-[95vh] w-full h-full p-0 bg-black border-none flex items-center justify-center">
              <DialogTitle className="sr-only">Image preview</DialogTitle>
              <DialogDescription className="sr-only">Full screen view of {gallery[selectedImage].title}</DialogDescription>

              <button onClick={() => setSelectedImage(null)} className="absolute top-4 right-4 z-50 text-white/50 hover:text-white transition-colors">
                <X size={32} />
              </button>

              <button onClick={handlePrev} className="absolute left-4 z-50 p-2 text-white/50 hover:text-white bg-black/20 hover:bg-black/40 rounded-full transition-all">
                <ChevronLeft size={32} />
              </button>

              <div className="relative w-full h-full flex items-center justify-center p-12">
                <img
                  src={gallery[selectedImage].imageUrl}
                  alt={gallery[selectedImage].title}
                  className="max-w-full max-h-full object-contain"
                />
                <div className="absolute bottom-4 left-0 right-0 text-center text-white p-4">
                  <p className="font-serif text-xl">{gallery[selectedImage].title}</p>
                  <p className="text-sm uppercase tracking-widest mt-1 opacity-70">{gallery[selectedImage].category}</p>
                </div>
              </div>

              <button onClick={handleNext} className="absolute right-4 z-50 p-2 text-white/50 hover:text-white bg-black/20 hover:bg-black/40 rounded-full transition-all">
                <ChevronRight size={32} />
              </button>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  );
}

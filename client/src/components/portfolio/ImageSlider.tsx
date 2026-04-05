import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ImageSliderProps {
  images: string[];
  title: string;
}

export function ImageSlider({ images, title }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="mb-12">
      <div className="relative overflow-hidden rounded-lg border border-border shadow-lg bg-card">
        {/* Image Container */}
        <div className="relative h-96 w-full bg-muted flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`${title} - Image ${currentIndex + 1}`}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>

          {/* Left Arrow */}
          {images.length > 1 && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              whileHover={{ opacity: 1 }}
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-black/50 p-2 backdrop-blur transition-all"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </motion.button>
          )}

          {/* Right Arrow */}
          {images.length > 1 && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              whileHover={{ opacity: 1 }}
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-black/50 p-2 backdrop-blur transition-all"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </motion.button>
          )}

          {/* Image Counter */}
          {images.length > 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm backdrop-blur"
            >
              {currentIndex + 1} / {images.length}
            </motion.div>
          )}
        </div>

        {/* Thumbnail Navigation */}
        {images.length > 1 && (
          <div className="flex gap-2 overflow-x-auto p-4 bg-card">
            {images.map((image, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative flex-shrink-0 h-16 w-16 rounded-lg overflow-hidden border-2 transition-all ${
                  index === currentIndex
                    ? "border-accent"
                    : "border-border hover:border-accent/50"
                }`}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={image}
                  alt={`${title} thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

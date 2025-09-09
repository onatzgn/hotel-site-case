import { useState } from "react";
import { X } from "lucide-react";
import heroImage from "@/assets/hero-hotel.jpg";
import suiteLuxury from "@/assets/suite-luxury.jpg";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import spaImage from "@/assets/spa-pool.jpg";
import restaurantImage from "@/assets/restaurant.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: heroImage,
      alt: "Otel Dış Görünümü",
      category: "Dış Mekan"
    },
    {
      src: suiteLuxury,
      alt: "Kral Dairesi",
      category: "Süitler"
    },
    {
      src: roomDeluxe,
      alt: "Delüks Oda",
      category: "Odalar"
    },
    {
      src: spaImage,
      alt: "Spa ve Havuz",
      category: "Olanaklar"
    },
    {
      src: restaurantImage,
      alt: "Gurme Restoran",
      category: "Yemek"
    },
    {
      src: suiteLuxury,
      alt: "Süit Oturma Alanı",
      category: "Süitler"
    },
    {
      src: spaImage,
      alt: "Havuz Alanı",
      category: "Olanaklar"
    },
    {
      src: restaurantImage,
      alt: "Restoran İç Mekanı",
      category: "Yemek"
    }
  ];

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
            Galeri
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Lüks alanlarımızda görsel bir yolculuğa çıkın ve sizi bekleyen zarafeti keşfedin.
          </p>
        </div>

        {/* galeri gridi */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 hover:shadow-lg group ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              onClick={() => openLightbox(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                  index === 0 ? 'h-64 md:h-full' : 'h-48'
                }`}
              />
              
              {/* overlay */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-all duration-300">
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center text-white">
                    <div className="font-medium text-lg mb-1">{image.alt}</div>
                    <div className="text-sm text-accent">{image.category}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={closeLightbox}
          >
            <div className="relative max-w-4xl max-h-full">
              <img
                src={selectedImage}
                alt="Galeri Görseli"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <button
                onClick={closeLightbox}
                className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
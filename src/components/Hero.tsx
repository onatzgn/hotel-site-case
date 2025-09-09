import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-hotel.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* arkaplan fotosu */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury Hotel Exterior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      {/* içerik */}
      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-6">
        {/* değerlendirme puanları */}
        <div className="flex items-center justify-center gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 fill-accent text-accent" />
          ))}
          <span className="ml-2 text-accent font-medium">5 Yıldızlı Lüks</span>
        </div>

        {/* otel adı */}
        <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 tracking-wide">
          Onat
          <span className="text-accent block mt-2">Otel</span>
        </h1>

        {/* tagline */}
        <p className="text-xl md:text-2xl mb-8 text-gray-200 font-light max-w-2xl mx-auto leading-relaxed">
          Şehrin kalbinde eşsiz bir deneyim yaşayın.
        </p>

        {/* butonlar */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button className="btn-luxury group">
            Konaklamanızı Rezerve Edin
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button className="btn-outline-luxury">
            Süitleri Keşfedin
          </Button>
        </div>

        {/* özellikler */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-accent">200+</div>
            <div className="text-gray-300">Lüks Odalar</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-accent">24/7</div>
            <div className="text-gray-300">Konsiyerj Hizmeti</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-accent">5★</div>
            <div className="text-gray-300">Michelin Yemek Deneyimi</div>
          </div>
        </div>
      </div>

      {/* scrolla göre */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
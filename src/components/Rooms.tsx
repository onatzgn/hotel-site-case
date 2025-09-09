import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Wifi, Car, Utensils, Waves } from "lucide-react";
import suiteLuxury from "@/assets/suite-luxury.jpg";
import roomDeluxe from "@/assets/room-deluxe.jpg";

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      name: "Kral Dairesi",
      description: "Panoramik şehir manzarası, mermer banyo ve özel terasıyla lüksün zirvesi.",
      image: suiteLuxury,
      price: "$1,200",
      size: "120 m²",
      amenities: ["Kral Yatağı", "Şehir Manzarası", "Mermer Banyo", "Özel Teras"],
      features: [
        { icon: Wifi, label: "Ücretsiz WiFi" },
        { icon: Car, label: "Vale Park Hizmeti" },
        { icon: Utensils, label: "Oda Servisi" },
        { icon: Waves, label: "Spa Erişimi" },
      ]
    },
    {
      id: 2,
      name: "Delüks Oda",
      description: "Modern olanaklara ve etkileyici mimari detaylara sahip geniş ve şık oda.",
      image: roomDeluxe,
      price: "$400",
      size: "45 m²",
      amenities: ["Queen Yatak", "Çalışma Masası", "Yağmur Duşu", "Şehir Manzarası"],
      features: [
        { icon: Wifi, label: "Ücretsiz WiFi" },
        { icon: Car, label: "Otopark" },
        { icon: Utensils, label: "Mini Bar" },
        { icon: Waves, label: "Spor Salonu Erişimi" },
      ]
    }
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
            Odalar ve Süitler
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Özenle tasarlanmış konaklama birimlerimizi keşfedin; her biri konfor, stil ve lüks olanakların eşsiz bir birleşimini sunar.
          </p>
        </div>

        {/* oda */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {rooms.map((room) => (
            <div key={room.id} className="card-luxury overflow-hidden">
              {/* oda resim */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-accent text-accent-foreground font-medium">
                    {room.size}
                  </Badge>
                </div>
              </div>

              {/* oda içerik */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-heading text-2xl font-semibold text-primary">
                    {room.name}
                  </h3>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{room.price}</div>
                    <div className="text-sm text-muted-foreground">gecelik</div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {room.description}
                </p>

                {/* olanaklar */}
                <div className="mb-6">
                  <h4 className="font-semibold text-primary mb-3">Oda Olanakları</h4>
                  <div className="flex flex-wrap gap-2">
                    {room.amenities.map((amenity) => (
                      <Badge key={amenity} variant="secondary" className="text-xs">
                        {amenity}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* özellikler */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {room.features.map((feature) => {
                    const Icon = feature.icon;
                    return (
                      <div key={feature.label} className="flex items-center gap-2">
                        <Icon className="w-4 h-4 text-accent" />
                        <span className="text-sm text-muted-foreground">{feature.label}</span>
                      </div>
                    );
                  })}
                </div>

                {/* rezerve bytonu */}
                <Button className="w-full btn-primary-luxury">
                  Bu Odayı Rezerve Et
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* hepsini gör */}
        <div className="text-center mt-12">
          <Button className="btn-outline-luxury">
            Hepsini Gör
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
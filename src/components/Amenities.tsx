import { Waves, Utensils, Dumbbell, Coffee, Car, Wifi } from "lucide-react";
import spaImage from "@/assets/spa-pool.jpg";
import restaurantImage from "@/assets/restaurant.jpg";

const Amenities = () => {
  const mainAmenities = [
    {
      icon: Waves,
      title: "Lüks Spa ve Havuz",
      description: "Havuzu, terapi odaları ve ekstra olanaklarla donatılmış dünya standartlarındaki spamızda yenilenin.",
      image: spaImage,
      features: ["Havuzu", "Masaj Terapisi", "Sauna ve Buhar", "Yoga Stüdyosu"]
    },
    {
      icon: Utensils,
      title: "Gurme Restoran",
      description: "Michelin yıldızlı restoranımızda yenilikçi mutfak anlayışı ve kusursuz hizmet ile gastronomi mükemmelliğini yaşayın.",
      image: restaurantImage,
      features: ["Michelin Yıldızı", "Şarap Mahzeni", "Özel Yemek Alanı", "Şef Masası"]
    }
  ];

  const additionalServices = [
    {
      icon: Dumbbell,
      title: "Spor Salonu",
      description: "Son teknoloji ekipmanlar ve kişisel antrenman hizmetleri 7/24 hizmetinizde."
    },
    {
      icon: Coffee,
      title: "Konsiyerj Hizmeti",
      description: "Özel ekibimiz günün her saati her türlü isteğinize yardımcı olmak için hazır."
    },
    {
      icon: Car,
      title: "Vale Park Hizmeti",
      description: "Tüm misafirlerimize güvenli kapalı otopark ile ücretsiz vale hizmeti."
    },
    {
      icon: Wifi,
      title: "Yüksek Hızlı WiFi",
      description: "Tesis genelinde ücretsiz yüksek hızlı internet erişimi."
    }
  ];

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
            Dünya Standartlarında Olanaklar
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Beklentilerinizi aşmak için tasarlanmış benzersiz tesis ve hizmetlerimizin keyfini çıkarın.
          </p>
        </div>

        {/* olanak */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {mainAmenities.map((amenity) => {
            const Icon = amenity.icon;
            return (
              <div key={amenity.title} className="card-luxury overflow-hidden">
                {/* resim */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={amenity.image}
                    alt={amenity.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <Icon className="w-8 h-8 text-accent mb-2" />
                  </div>
                </div>

                {/* içerik */}
                <div className="p-8">
                  <h3 className="font-heading text-2xl font-semibold text-primary mb-4">
                    {amenity.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {amenity.description}
                  </p>

                  {/* özellikler */}
                  <div className="grid grid-cols-2 gap-3">
                    {amenity.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ek hizmet */}
        <div>
          <h3 className="font-heading text-3xl font-semibold text-primary text-center mb-12">
            Ek Hizmetler
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="text-center p-6 rounded-xl border border-border hover:shadow-card transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="font-semibold text-primary mb-3">{service.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
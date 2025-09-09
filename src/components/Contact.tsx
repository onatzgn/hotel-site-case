import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Rezervasyon Talebi Gönderildi!",
      description: "Rezervasyon detaylarını onaylamak için en kısa sürede sizinle iletişime geçeceğiz.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      checkIn: "",
      checkOut: "",
      guests: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adres",
      details: ["Ataşehir, İstanbul, Türkiye"]
    },
    {
      icon: Phone,
      title: "Telefon",
      details: ["+90 (111) 111-1111", "Rezervasyon: +90 (111) 111-1111"]
    },
    {
      icon: Mail,
      title: "E-posta",
      details: ["rezervasyon@onatotel.com", "concierge@onatotel.com"]
    },
    {
      icon: Clock,
      title: "Resepsiyon Saatleri",
      details: ["7/24 Resepsiyon", "Konsiyerj: 06:00 - 00:00"]
    }
  ];

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
            İletişim ve Rezervasyon
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Lüksü deneyimlemeye hazır mısınız? Rezervasyon yapmak veya hizmetlerimiz hakkında bilgi almak için bizimle iletişime geçin.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* form */}
          <div className="card-luxury p-8">
            <h3 className="font-heading text-2xl font-semibold text-primary mb-6">
              Rezervasyon Yapın
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Ad Soyad *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Adınızı ve soyadınızı girin"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-posta *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="ornek@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefon Numarası</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="05xx xxx xx xx"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="guests">Misafir Sayısı</Label>
                  <Input
                    id="guests"
                    name="guests"
                    type="number"
                    min="1"
                    max="8"
                    value={formData.guests}
                    onChange={handleInputChange}
                    placeholder="2"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="checkIn">Giriş Tarihi</Label>
                  <Input
                    id="checkIn"
                    name="checkIn"
                    type="date"
                    value={formData.checkIn}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="checkOut">Çıkış Tarihi</Label>
                  <Input
                    id="checkOut"
                    name="checkOut"
                    type="date"
                    value={formData.checkOut}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Özel İstekler</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Herhangi bir özel isteğiniz veya tercihiniz varsa belirtin..."
                  rows={4}
                />
              </div>

              <Button type="submit" className="w-full btn-primary-luxury">
                Rezervasyon Talebini Gönder
              </Button>
            </form>
          </div>

          {/* contanct info */}
          <div className="space-y-8">
            <h3 className="font-heading text-2xl font-semibold text-primary mb-6">
              Bize Ulaşın
            </h3>

            <div className="space-y-6">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <div key={info.title} className="flex items-start gap-4 p-6 rounded-xl border border-border hover:shadow-card transition-all duration-300">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">{info.title}</h4>
                      {info.details.map((detail, index) => (
                        <p key={index} className="text-muted-foreground text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* map */}
            <div className="bg-muted rounded-xl h-64 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin className="w-12 h-12 mx-auto mb-4 text-accent" />
                <p className="text-lg font-medium">Etkileşimli Harita</p>
                <p className="text-sm">Şehrin merkezinde konumlanmıştır</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
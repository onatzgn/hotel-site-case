import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Odalar ve Süitler", href: "#rooms" },
    { name: "Olanaklar", href: "#amenities" },
    { name: "Galeri", href: "#gallery" },
    { name: "İletişim", href: "#contact" },
  ];

  const services = [
    { name: "Spa ve Wellness", href: "#" },
    { name: "Gurme Restoran", href: "#" },
    { name: "Etkinlik Alanları", href: "#" },
    { name: "İş Merkezi", href: "#" },
  ];

  const policies = [
    { name: "Gizlilik Politikası", href: "#" },
    { name: "Kullanım Şartları", href: "#" },
    { name: "İptal Politikası", href: "#" },
    { name: "Misafir Hizmetleri", href: "#" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* otel bilgi */}
          <div className="space-y-6">
            <div>
              <h3 className="font-heading text-2xl font-bold mb-2">
                Onat <span className="text-accent">Otel</span>
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Şehrin kalbinde eşsiz bir deneyim yaşayın.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm">Ataşehir, İstanbul, Türkiye</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm">+90 (111) 111-1111</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm">rezervasyon@onatotel.com</span>
              </div>
            </div>
          </div>

          {/* linkler */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Hızlı Bağlantılar</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* hizmet */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Hizmetler</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* policies */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Politikalar</h4>
            <ul className="space-y-3 mb-6">
              {policies.map((policy) => (
                <li key={policy.name}>
                  <a
                    href={policy.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {policy.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* sosyal medya */}
            <div>
              <h5 className="font-medium mb-4">Bizi Takip Edin</h5>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-200"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="border-t border-primary-light pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Onat Otel. Tüm hakları saklıdır.
            </p>
            <p className="text-primary-foreground/60 text-sm">
              Lüks düşünülerek tasarlandı
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
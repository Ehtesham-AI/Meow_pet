import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  const currentYear = new Date().getFullYear();

   const socialLinks = [
    { href: 'https://www.facebook.com/1.DrArslanAli/', label: 'Facebook', icon: 'facebook' },
    { href: 'https://www.instagram.com/meow_pet_hospital/?hl=en', label: 'Instagram', icon: 'instagram' },
  ];

  const renderSocialIcon = (icon: string) => {
    switch (icon) {
      case 'facebook':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        );
      case 'instagram':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m5.894 17.789h-11.89V6.111h11.889v11.678z" />
            <path d="M12 6.5a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm0 9a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <footer className="bg-secondary/50 border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Meow Pet Clinic"
                width={44}
                height={44}
                className="w-20 h-20"
              />
              <span className="font-serif font-bold text-foreground">
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Compassionate pet care for your beloved companions.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.icon}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {renderSocialIcon(link.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-serif font-bold text-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services'].map((item) => (
                <li key={item}>
                  <Link
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif font-bold text-foreground mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {[
                'Veterinary Care',
                'Grooming',
                'Boarding',
                'Consultations',
              ].map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif font-bold text-foreground mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>0303 8015966</li>
              <li>aliarslan54890@gmail.com</li>
              <li>J3RC+7PW, St 3, in front of Furqan Masjid, near Stone Oven Pizza Valley, D Block Block D Satellite Town, Rawalpindi</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} Meow Pet Clinic. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.icon}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {renderSocialIcon(link.icon)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
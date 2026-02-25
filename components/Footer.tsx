import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Image
                src="logo.png"
                alt="Meow Pet Clinic"
                width={44}
                height={44}
                className="w-11 h-11"
              />
              <span className="font-serif font-bold text-foreground">
                Meow Pet Clinic
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Compassionate pet care for your beloved companions.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-serif font-bold text-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Team'].map((item) => (
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
          </div>
        </div>
      </div>
    </footer>
  );
}

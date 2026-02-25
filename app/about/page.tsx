import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { CTAButton } from '@/components/Cards';
import Image from 'next/image';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-foreground mb-6">
            About Us
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn about Meow Pet Clinic's mission and our journey to becoming the trusted pet care provider.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-center text-foreground mb-12">
            Our History Throughout the Years
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { year: '2018', title: 'Founded', desc: 'Meow Pet Clinic opened its doors' },
              { year: '2020', title: 'Expansion', desc: 'Added grooming services' },
              { year: '2023', title: 'Recognition', desc: 'Awarded Best Pet Care Provider' },
              { year: '2026', title: 'Present', desc: 'Serving 5000+ happy pets' },
            ].map((milestone, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-serif font-bold text-primary mb-2">
                  {milestone.year}
                </div>
                <h3 className="font-serif font-bold text-lg text-foreground mb-2">
                  {milestone.title}
                </h3>
                <p className="text-muted-foreground">{milestone.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-xl overflow-hidden">
              <Image
                src="clanic.png"
                alt="Our clinic"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                At Meow Pet Clinic, our mission is to provide exceptional, compassionate care for every pet that walks through our doors. We believe that pets are family, and they deserve the highest quality care available.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We're committed to building lasting relationships with our clients and their pets, ensuring their health, happiness, and well-being through expert medical care, professional grooming, and personalized attention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-center text-foreground mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Compassion',
                desc: 'We treat every pet with love, care, and respect, understanding their unique needs.',
              },
              {
                title: 'Expertise',
                desc: 'Our team is highly trained and stays current with the latest pet care practices.',
              },
              {
                title: 'Quality',
                desc: 'We never compromise on the quality of care or services we provide to our clients.',
              },
            ].map((value, idx) => (
              <div key={idx} className="bg-secondary rounded-xl p-8 border border-border text-center">
                <div className="text-5xl mb-4">
                  {idx === 0 ? '❤️' : idx === 1 ? '🎓' : '⭐'}
                </div>
                <h3 className="font-serif font-bold text-xl text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview Section
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-center text-foreground mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Dr. Sarah Mitchell', role: 'Lead Veterinarian' },
              { name: 'James Wilson', role: 'Head Groomer' },
              { name: 'Emily Rodriguez', role: 'Veterinary Technician' },
              { name: 'David Lee', role: 'Care Specialist' },
            ].map((member, idx) => (
              <div key={idx} className="bg-background rounded-xl p-6 border border-border text-center">
                <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-4" />
                <h3 className="font-serif font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary text-sm font-medium">{member.role}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <CTAButton href="/team">View Full Team</CTAButton>
          </div>
        </div>
      </section> */}

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-center text-foreground mb-12">
            Why Choose Meow Pet Clinic?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              'Expert veterinarians with years of experience',
              'State-of-the-art facilities and equipment',
              'Personalized care plans for each pet',
              'Compassionate and friendly staff',
              '24/7 emergency support available',
              'Competitive pricing with transparent costs',
            ].map((reason, idx) => (
              <div key={idx} className="flex gap-4">
                <span className="text-primary font-bold text-2xl flex-shrink-0">
                  ✓
                </span>
                <p className="text-foreground leading-relaxed">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">
            Experience the Meow Pet Clinic Difference
          </h2>
          <p className="text-lg mb-8">
            Schedule your pet's first appointment with us today.
          </p>
          <CTAButton href="tel:5551234567" variant="secondary">
            Contact Us
          </CTAButton>
        </div>
      </section>

      <Footer />
    </div>
  );
}

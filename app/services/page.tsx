import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ServiceCard, CTAButton } from '@/components/Cards';
import Image from 'next/image';

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-foreground mb-6">
            Our Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive pet care services tailored to your pet's specific needs.
          </p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-center text-foreground mb-12">
            Our All Grooming Services Includes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon="🛁"
              title="Professional Grooming"
              description="Complete grooming services including bathing, haircuts, nail trimming, and ear cleaning to keep your pet looking and feeling great."
            />
            <ServiceCard
              icon="🏥"
              title="Veterinary Care"
              description="Comprehensive health check-ups, vaccinations, dental care, and medical treatments by our experienced veterinarians."
            />
            <ServiceCard
              icon="💇"
              title="Breed-Specific Styling"
              description="Expert styling tailored to your pet's breed standards and your preferences for a polished appearance."
            />
            <ServiceCard
              icon="🧘"
              title="Wellness Consultations"
              description="One-on-one consultations to discuss nutrition, behavior, and overall health recommendations for your pet."
            />
            <ServiceCard
              icon="🏨"
              title="Pet Boarding"
              description="Safe and comfortable accommodations for your pet while you're away, with regular care and attention."
            />
            <ServiceCard
              icon="🎾"
              title="Day Care & Play"
              description="Supervised play areas and socialization activities to keep your pet active, happy, and entertained."
            />
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-96 rounded-xl overflow-hidden">
              <Image
                src="grooming.jpg"
                alt="Grooming services"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                Professional Grooming Services
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Our professional groomers are trained in the latest techniques and breed standards. We use only premium, pet-safe products to ensure your pet's coat stays healthy and beautiful.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Full-service baths with premium shampoos',
                  'Professional haircuts and styling',
                  'Nail trimming and paw care',
                  'Ear and eye cleaning',
                  'De-shedding treatments',
                ].map((service) => (
                  <li key={service} className="flex items-center gap-3">
                    <span className="text-primary">✓</span>
                    <span className="text-foreground">{service}</span>
                  </li>
                ))}
              </ul>
              <CTAButton href="#contact">Book Grooming</CTAButton>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                Veterinary Health Services
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Our experienced veterinarians provide comprehensive medical care to keep your pets healthy and happy. From preventative care to specialized treatments, we're here for every stage of your pet's life.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Annual health examinations',
                  'Vaccinations and boosters',
                  'Dental cleanings and care',
                  'Preventative medications',
                  'Microchipping services',
                ].map((service) => (
                  <li key={service} className="flex items-center gap-3">
                    <span className="text-primary">✓</span>
                    <span className="text-foreground">{service}</span>
                  </li>
                ))}
              </ul>
              <CTAButton href="#contact">Schedule Checkup</CTAButton>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden">
              <Image
                src="grooming.jpg"
                alt="Veterinary care"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How We Help Your Pet */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-center text-foreground mb-12">
            How We Help Your Pet
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '💪', title: 'Strengthens Immunity', desc: 'Regular care and vaccinations boost pet health' },
              { icon: '😊', title: 'Better Behavior', desc: 'Proper care improves temperament and socialization' },
              { icon: '🏃', title: 'Increased Energy', desc: 'Healthy pets are more active and playful' },
              { icon: '💖', title: 'Longer Lifespan', desc: 'Quality care extends your pet\'s life' },
            ].map((item, idx) => (
              <div key={idx} className="bg-secondary rounded-xl p-6 border border-border text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-serif font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-center text-foreground mb-12">
            Service Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Wellness Plan',
                price: '$49',
                services: [
                  'Monthly check-ups',
                  'Vaccinations',
                  'Dental cleaning',
                ],
              },
              {
                name: 'Grooming Plan',
                price: '$79',
                services: [
                  'Bi-weekly grooming',
                  'Special treatments',
                  'Nail care',
                ],
              },
              {
                name: 'Premium Plan',
                price: '$149',
                services: [
                  'All wellness services',
                  'All grooming services',
                  'Priority scheduling',
                ],
              },
            ].map((pkg, idx) => (
              <div
                key={idx}
                className={`rounded-xl p-8 border ${
                  idx === 1
                    ? 'border-primary bg-primary/5'
                    : 'border-border bg-background'
                }`}
              >
                <h3 className="font-serif font-bold text-xl text-foreground mb-2">
                  {pkg.name}
                </h3>
                <p className="text-3xl font-bold text-primary mb-6">
                  {pkg.price}
                  <span className="text-sm text-muted-foreground">/month</span>
                </p>
                <ul className="space-y-3 mb-8">
                  {pkg.services.map((service) => (
                    <li key={service} className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      <span className="text-foreground text-sm">{service}</span>
                    </li>
                  ))}
                </ul>
                <CTAButton href="#contact" variant="primary">
                  Choose Plan
                </CTAButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-center text-foreground mb-12">
            Service FAQs
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'How often should my pet be groomed?',
                a: 'Most pets benefit from grooming every 4-8 weeks, but this varies by breed and coat type.',
              },
              {
                q: 'Do you offer same-day appointments?',
                a: 'We do our best to accommodate same-day requests based on availability. Please call ahead.',
              },
              {
                q: 'What should I bring to my pet\'s appointment?',
                a: 'Please bring vaccination records, insurance information, and any medical history relevant to the visit.',
              },
            ].map((faq, idx) => (
              <details
                key={idx}
                className="group bg-secondary rounded-lg p-6 cursor-pointer border border-border"
              >
                <summary className="font-serif font-bold text-foreground flex justify-between items-center">
                  {faq.q}
                  <span className="group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">
            Ready to Schedule a Service?
          </h2>
          <p className="text-lg mb-8">
            Contact us today to book your pet's appointment.
          </p>
          <CTAButton href="tel:03038015966" variant="secondary">
            Call 0303 8015966
          </CTAButton>
        </div>
      </section>

      <Footer />
    </div>
  );
}

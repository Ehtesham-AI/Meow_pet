import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ServiceCard, TestimonialCard, CTAButton, TeamMember } from '@/components/Cards';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Dr. Muhammad Arslan Bhatti',
    role: 'Lead Veterinarian',
    bio: 'Expert in pet care with 10+ years of experience',
    image: 'head.png',
  },
  {
    name: 'Dr. Muhammad Arslan Iqbal',
    role: 'Veterinary Surgeon and Physician',
    bio: 'Professional groomer specializing in exotic breeds',
    image: 'internee1.png',
  },
  {
    name: 'Dr. Qazi Uzair',
    role: 'Pet Behaviorist',
    bio: 'Certified behavior consultant for all pet types',
    image: 'internee2.png',
  },
  {
    name: 'Dr. Amna Zahid',
    role: 'Veterinary physician and Surgeon',
    bio: 'Veterinary physician surgeon and consultant for pet wellness',
    image: 'internee3.png',
  },
  {
    name: 'Dr. Aqsa Saeed Qureshi',
    role: 'Veterinary physician and Surgeon',
    bio: 'Veterinary physician surgeon and consultant for pet wellness',
    image: 'internee4.png',
  },
  {
    name: 'Dr. Muqadas',
    role: 'Veterinary physician and Surgeon',
    bio: 'Veterinary physician surgeon and consultant for pet wellness',
    image: 'internee5.png',
  },

];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-serif text-5xl sm:text-6xl font-bold text-foreground mb-6 text-balance">
                Healing Paws, Caring Hearts
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                At Meow Pet Clinic, we treat every pet like family. From routine checkups to specialized care, our team is here to ensure your companion stays healthy, happy, and safe.
              </p>
              <div className="flex gap-4">
                <CTAButton href="#services">Explore Services</CTAButton>
                <CTAButton href="#contact" variant="outline">
                  Learn More
                </CTAButton>
              </div>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden">
              <Image
                src="/arslan-cover.png"
                alt="Happy pets at Meow Pet Clinic"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pet Categories Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-center text-foreground mb-12">
            Browse by Pet Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {['Cats', 'Dogs', 'Rabbits', 'Birds', 'Exotic'].map((category) => (
              <div
                key={category}
                className="bg-secondary rounded-xl p-6 text-center hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="text-4xl mb-3">
                  {category === 'Cats'
                    ? '🐱'
                    : category === 'Dogs'
                      ? '🐕'
                      : category === 'Rabbits'
                        ? '🐰'
                        : category === 'Birds'
                          ? '🐦'
                          : '🦎'}
                </div>
                <p className="font-medium text-foreground">{category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-center text-foreground mb-12">
            Our Grooming Services Include
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon="🛁"
              title="Professional Grooming"
              description="Expert grooming services tailored to your pet's needs, keeping them looking their best and feeling comfortable."
            />
            <ServiceCard
              icon="🏥"
              title="Veterinary Care"
              description="Comprehensive health checks and medical services by experienced veterinarians who care for your pets."
            />
            <ServiceCard
              icon="🧘"
              title="Wellness Consultations"
              description="One-on-one consultations to discuss your pet's health, nutrition, and overall well-being."
            />
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-xl overflow-hidden">
              <Image
                src="arslan.webp"
                alt="Pet care services"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                We are a fully committed to your pet's well-being
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                At Meow Pet Clinic, your pet's comfort and happiness are our top priorities. We provide a safe, clean, and welcoming environment where your furry friends can relax and receive the best care possible.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Expert and caring staff',
                  'State-of-the-art facilities',
                  'Personalized care plans',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <CTAButton href="#services">View Our Services</CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-foreground mb-6">
            Our Team
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the dedicated professionals behind Meow Pet Clinic who make pet care exceptional.
          </p>
        </div>
      </section>

      {/* Team Grid */}
            <section className="py-20 bg-background">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="font-serif text-3xl font-bold text-center text-foreground mb-12">
                  Expertise, Pet Care, Quality, Professionalism, Consulting
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {teamMembers.map((member) => (
                    <TeamMember
                      key={member.name}
                      image={member.image}
                      name={member.name}
                      role={member.role}
                      bio={member.bio}
                    />
                  ))}
                </div>
              </div>
            </section>
      
            {/* Team Profiles - Leadership */}
            <section className="py-20 bg-secondary/30">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="font-serif text-3xl font-bold text-center text-foreground mb-12">
                  Meet Our Leadership
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                  <div className="bg-background rounded-xl p-8 border border-border">
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                      Dr. Muhammad Arslan Bhatti
                    </h3>
                    <p className="text-primary font-medium mb-4">Lead Veterinarian</p>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Dr. Muhammad Arslan Bhatti is a dedicated and compassionate veterinary professional serving as the Lead Veterinarian at Meow Pet Clinic. With extensive hands-on clinical experience, he is known for his accurate diagnosis, confident decision-making in emergencies, and deep commitment to animal welfare.
                    </p>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      As a leader, Dr. Arslan not only focuses on treating patients but also on guiding his team with professionalism, discipline, and empathy. His approach combines modern veterinary practices with genuine care, ensuring that every pet receives thorough medical attention and every pet owner feels heard and supported.
                     </p>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• DVM from PMAS AAUR</li>
                      <li>• Board Certified in Small Animal Medicine</li>
                      <li>• 10+ years of clinical experience</li>
                    </ul>
                  </div>
                  <div className="relative h-96 rounded-xl overflow-hidden">
                    <Image
                      src="dr_arslan_head.png"
                      alt="Pet care services"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>

      {/* Facilities Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-center text-foreground mb-12">
            Get The Massive Facilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Modern Equipment', desc: 'Latest veterinary technology' },
              { title: 'Clean Facilities', desc: 'Hygiene standards exceeded' },
              { title: '24/7 Support', desc: 'Always here for emergencies' },
              { title: 'Play Areas', desc: 'Safe spaces for pets to enjoy' },
              { title: 'Grooming Stations', desc: 'Professional grooming setup' },
              { title: 'Comfortable Rooms', desc: 'Cozy accommodations' },
            ].map((facility) => (
              <div key={facility.title} className="bg-background rounded-xl p-6 border border-border">
                <h3 className="font-serif font-bold text-lg text-foreground mb-2">
                  {facility.title}
                </h3>
                <p className="text-muted-foreground text-sm">{facility.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-center text-foreground mb-12">
            Loyal Hearts, Forever Homes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Waqar Shabbir"
              role="Dog Owner"
              content="Dr Arsalan is the best vet you could ever find, highly qualified professional. He does his job in a very professional manner, shadow had internal bacterial infection. He helped us to cure severe infection, now she is so active Alhamdulillah."
            />
            <TestimonialCard
              name="Muhammad Ali"
              role="Cat Owner"
              content="Meow Pet Clinic has been my go-to place for all of my cat-related needs. The staff is friendly, knowledgeable, and handles pets with love and care. The clinic is always clean and well-maintained, creating a welcoming environment for both pets and their owners"
            />
            <TestimonialCard
              name="Uzair Qureshi"
              role="Pet Enthusiast"
              content="The staff at Meow Pet Hospital are absolutely adorable. Dr.Arslan Ali and the entire team are so polite, lovely, and have a heart for animals. They took great care of my pet and made us feel at ease. Highly recommend for any pet needs!"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-center text-foreground mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'What are your operating hours?',
                a: 'We are open seven days a week, 10 AM - 10 PM..',
              },
              {
                q: 'Do you offer emergency services?',
                a: 'Yes, we have 24/7 emergency support for urgent pet care needs.',
              },
              {
                q: 'What vaccinations does my pet need?',
                a: 'Our veterinarians will recommend appropriate vaccinations based on your pet\'s age and health status.',
              },
            ].map((faq, idx) => (
              <details
                key={idx}
                className="group bg-background border border-border rounded-lg p-6 cursor-pointer"
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

      {/* Pricing Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-center text-foreground mb-12">
            Our Pricing Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Basic Plan',
                price: '$29',
                features: ['Monthly grooming', 'Basic check-ups', 'Email support'],
              },
              {
                name: 'Standard Plan',
                price: '$59',
                features: [
                  'Bi-weekly grooming',
                  'Quarterly health checks',
                  'Priority support',
                ],
              },
              {
                name: 'Premium Plan',
                price: '$99',
                features: [
                  'Weekly grooming',
                  'Monthly health checks',
                  '24/7 support',
                  'Free consultations',
                ],
              },
            ].map((plan, idx) => (
              <div
                key={idx}
                className={`rounded-xl p-8 border ${
                  idx === 1
                    ? 'border-primary bg-primary/5'
                    : 'border-border bg-background'
                }`}
              >
                <h3 className="font-serif font-bold text-xl text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-3xl font-bold text-primary mb-6">
                  {plan.price}
                  <span className="text-sm text-muted-foreground">/month</span>
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      <span className="text-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <CTAButton href="#contact" variant="primary">
                  Get Started
                </CTAButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">
            Ready to Give Your Pet The Best Care?
          </h2>
          <p className="text-lg mb-8 leading-relaxed">
            Contact Meow Pet Clinic today to schedule a consultation or learn more about our services.
          </p>
          <CTAButton href="tel:0303 8015966" variant="secondary">
            Call Us Today
          </CTAButton>
        </div>
      </section>

      <Footer />
    </div>
  );
}

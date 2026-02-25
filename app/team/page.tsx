// import { Navigation } from '@/components/Navigation';
// import { Footer } from '@/components/Footer';
// import { TeamMember, CTAButton } from '@/components/Cards';

// export default function Team() {
//   const teamMembers = [
//     {
//       name: 'Dr. Sarah Mitchell',
//       role: 'Lead Veterinarian',
//       bio: 'With over 10 years of experience, Dr. Mitchell specializes in preventative care and animal wellness.',
//       image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop',
//     },
//     {
//       name: 'James Wilson',
//       role: 'Head Groomer',
//       bio: 'Expert in breed-specific grooming with a passion for keeping pets looking their absolute best.',
//       image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
//     },
//     {
//       name: 'Emily Rodriguez',
//       role: 'Veterinary Technician',
//       bio: 'Compassionate care specialist dedicated to making every pet feel safe and comfortable.',
//       image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
//     },
//     {
//       name: 'David Lee',
//       role: 'Care Specialist',
//       bio: 'Focused on creating positive experiences and ensuring every pet receives personalized attention.',
//       image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop',
//     },
//     {
//       name: 'Jessica Brown',
//       role: 'Receptionist & Scheduler',
//       bio: 'Friendly face at our front desk ensuring smooth appointments and excellent customer service.',
//       image: 'https://images.unsplash.com/photo-1517046220202-51e16ec3c39d?w=300&h=300&fit=crop',
//     },
//     {
//       name: 'Michael Torres',
//       role: 'Facility Manager',
//       bio: 'Ensures our clinic maintains the highest standards of cleanliness and safety for all pets.',
//       image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
//     },
//     {
//       name: 'Angela Wong',
//       role: 'Assistant Groomer',
//       bio: 'Passionate about pet care with expertise in handling anxious and senior pets with patience.',
//       image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
//     },
//     {
//       name: 'Chris Martinez',
//       role: 'Veterinary Assistant',
//       bio: 'Dedicated to supporting our medical team and providing comfort to pets during treatments.',
//       image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop',
//     },
//   ];

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Navigation />

//       {/* Hero Section */}
//       <section className="pt-32 pb-12 bg-secondary/30">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h1 className="font-serif text-5xl sm:text-6xl font-bold text-foreground mb-6">
//             Our Team
//           </h1>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Meet the dedicated professionals behind Meow Pet Clinic who make pet care exceptional.
//           </p>
//         </div>
//       </section>

//       {/* Team Grid */}
//       <section className="py-20 bg-background">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="font-serif text-3xl font-bold text-center text-foreground mb-12">
//             Expertise, Pet Care, Quality, Professionalism, Consulting
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {teamMembers.map((member) => (
//               <TeamMember
//                 key={member.name}
//                 image={member.image}
//                 name={member.name}
//                 role={member.role}
//                 bio={member.bio}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Team Profiles - Leadership */}
//       <section className="py-20 bg-secondary/30">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="font-serif text-3xl font-bold text-center text-foreground mb-12">
//             Meet Our Leadership
//           </h2>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
//             <div className="bg-background rounded-xl p-8 border border-border">
//               <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
//                 Dr. Sarah Mitchell
//               </h3>
//               <p className="text-primary font-medium mb-4">Lead Veterinarian</p>
//               <p className="text-muted-foreground mb-4 leading-relaxed">
//                 Dr. Sarah Mitchell is the heart of Meow Pet Clinic. With over a decade of veterinary experience and a genuine love for animals, she leads our medical team with expertise and compassion.
//               </p>
//               <ul className="space-y-2 text-muted-foreground text-sm">
//                 <li>• DVM from State Veterinary School</li>
//                 <li>• Board Certified in Small Animal Medicine</li>
//                 <li>• 10+ years of clinical experience</li>
//               </ul>
//             </div>
//             <div className="relative h-96 rounded-xl overflow-hidden bg-muted" />
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div className="relative h-96 rounded-xl overflow-hidden bg-muted" />
//             <div className="bg-background rounded-xl p-8 border border-border">
//               <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
//                 James Wilson
//               </h3>
//               <p className="text-primary font-medium mb-4">Head Groomer</p>
//               <p className="text-muted-foreground mb-4 leading-relaxed">
//                 James brings 8 years of professional grooming expertise to our team. His attention to detail and understanding of breed standards ensures every pet leaves looking and feeling their best.
//               </p>
//               <ul className="space-y-2 text-muted-foreground text-sm">
//                 <li>• Master Groomer Certification</li>
//                 <li>• Specializes in breed-specific cuts</li>
//                 <li>• 8+ years of grooming experience</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Team Values */}
//       <section className="py-20 bg-background">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="font-serif text-3xl font-bold text-center text-foreground mb-12">
//             Loyal, Passionate, and Driven
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: '❤️',
//                 title: 'Passionate About Pets',
//                 desc: 'Every team member genuinely loves animals and is dedicated to their well-being.',
//               },
//               {
//                 icon: '🤝',
//                 title: 'Collaborative Approach',
//                 desc: 'We work together to provide comprehensive care and support for every pet.',
//               },
//               {
//                 icon: '📚',
//                 title: 'Continuous Learning',
//                 desc: 'Our team stays updated on latest pet care practices and veterinary advancements.',
//               },
//             ].map((value, idx) => (
//               <div key={idx} className="bg-secondary rounded-xl p-8 border border-border text-center">
//                 <div className="text-5xl mb-4">{value.icon}</div>
//                 <h3 className="font-serif font-bold text-lg text-foreground mb-3">
//                   {value.title}
//                 </h3>
//                 <p className="text-muted-foreground">{value.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Team Specialties */}
//       <section className="py-20 bg-secondary/30">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="font-serif text-3xl font-bold text-center text-foreground mb-12">
//             Our Expertise Areas
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               'Veterinary Medicine',
//               'Surgical Care',
//               'Dental Health',
//               'Emergency Care',
//               'Grooming Services',
//               'Behavioral Support',
//               'Nutritional Counseling',
//               'Preventative Care',
//             ].map((specialty) => (
//               <div key={specialty} className="bg-background rounded-xl p-6 border border-border text-center">
//                 <p className="font-serif font-bold text-foreground">{specialty}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials from Clients */}
//       <section className="py-20 bg-background">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="font-serif text-3xl font-bold text-center text-foreground mb-12">
//             What Pet Parents Say About Our Team
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 name: 'Jessica Hayes',
//                 role: 'Dog Owner',
//                 content:
//                   'The team at Meow Pet Clinic is absolutely incredible. They treat my golden retriever like family!',
//               },
//               {
//                 name: 'Robert Chang',
//                 role: 'Cat Owner',
//                 content:
//                   'Professional, caring, and knowledgeable. My cat actually looks forward to her appointments!',
//               },
//               {
//                 name: 'Maria Santos',
//                 role: 'Multiple Pets',
//                 content:
//                   'The best veterinary team in town. They go above and beyond for every pet that comes through the door.',
//               },
//             ].map((testimonial, idx) => (
//               <div key={idx} className="bg-secondary rounded-xl p-6 border border-border">
//                 <div className="flex items-start gap-1 mb-4">
//                   {[...Array(5)].map((_, i) => (
//                     <span key={i} className="text-primary">
//                       ★
//                     </span>
//                   ))}
//                 </div>
//                 <p className="text-foreground mb-4 leading-relaxed">
//                   "{testimonial.content}"
//                 </p>
//                 <div>
//                   <p className="font-serif font-bold text-foreground text-sm">
//                     {testimonial.name}
//                   </p>
//                   <p className="text-muted-foreground text-xs">{testimonial.role}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Join Our Team */}
//       <section className="py-20 bg-secondary/30">
//         <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
//             Join Our Growing Team
//           </h2>
//           <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
//             We're always looking for passionate individuals who share our commitment to pet care excellence. If you'd like to be part of our team, we'd love to hear from you.
//           </p>
//           <CTAButton href="mailto:careers@meowpetclinic.com">
//             Explore Careers
//           </CTAButton>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-primary text-primary-foreground">
//         <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="font-serif text-4xl font-bold mb-6">
//             Experience Our Team's Care
//           </h2>
//           <p className="text-lg mb-8">
//             Schedule your pet's appointment today and meet our dedicated professionals.
//           </p>
//           <CTAButton href="tel:5551234567" variant="secondary">
//             Call Us Now
//           </CTAButton>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }

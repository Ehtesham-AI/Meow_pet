import Image from 'next/image';
import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-background border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="text-primary text-4xl mb-4">{icon}</div>
      <h3 className="font-serif font-bold text-lg text-foreground mb-2">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}

interface TeamMemberProps {
  image: string;
  name: string;
  role: string;
  bio: string;
}

export function TeamMember({ image, name, role, bio }: TeamMemberProps) {
  return (
    <div className="bg-background rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow">
      <div className="relative h-64 w-full bg-muted">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="font-serif font-bold text-lg text-foreground mb-1">
          {name}
        </h3>
        <p className="text-primary font-medium text-sm mb-3">{role}</p>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {bio}
        </p>
      </div>
    </div>
  );
}

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  image?: string;
}

export function TestimonialCard({ name, role, content, image }: TestimonialProps) {
  return (
    <div className="bg-secondary rounded-xl p-6 border border-border">
      <div className="flex items-start gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-primary">
            ★
          </span>
        ))}
      </div>
      <p className="text-foreground mb-4 leading-relaxed">"{content}"</p>
      <div className="flex items-center gap-3">
        {image && (
          <Image
            src={image}
            alt={name}
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
        )}
        <div>
          <p className="font-serif font-bold text-foreground text-sm">
            {name}
          </p>
          <p className="text-muted-foreground text-xs">{role}</p>
        </div>
      </div>
    </div>
  );
}

interface CTAButtonProps {
  href: string;
  children: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

export function CTAButton({
  href,
  children,
  variant = 'primary',
}: CTAButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors';

  const variants = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    outline: 'border border-primary text-primary hover:bg-primary/10',
  };

  return (
    <a href={href} className={`${baseStyles} ${variants[variant]}`}>
      {children}
    </a>
  );
}

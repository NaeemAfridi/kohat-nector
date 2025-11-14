interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
}

export function SectionHeader({ title, subtitle, description }: SectionHeaderProps) {
  return (
    <div className="text-center mb-12 md:mb-16">
      {subtitle && <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-2">{subtitle}</p>}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">{title}</h2>
      {description && <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{description}</p>}
    </div>
  );
}

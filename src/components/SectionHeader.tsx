type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  intro?: string;
};

export default function SectionHeader({ eyebrow, title, intro }: SectionHeaderProps) {
  return (
    <div className="mb-10 max-w-6xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold leading-tight text-ink sm:text-4xl lg:whitespace-nowrap lg:text-4xl xl:text-5xl">{title}</h2>
      {intro && <p className="mt-5 text-base leading-8 text-muted sm:text-lg">{intro}</p>}
    </div>
  );
}

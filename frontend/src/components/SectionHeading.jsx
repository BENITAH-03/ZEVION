import Reveal from './Reveal.jsx';

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  const alignment = align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start';

  return (
    <Reveal className={`flex flex-col gap-4 max-w-3xl ${alignment}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      {title && <h2 className="heading-lg">{title}</h2>}
      {subtitle && <p className="body-text">{subtitle}</p>}
    </Reveal>
  );
}

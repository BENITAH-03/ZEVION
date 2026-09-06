import { ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import PrototypeNotice from '../components/PrototypeNotice.jsx';

const STEPS = [
  'Park the vehicle safely',
  'Switch the system off',
  'Prepare the ZEVION component',
  'Fit the electric drive component according to the vehicle-specific design',
  'Secure the mounting',
  'Connect the electrical system',
  'Check cables, wheel clearance and brakes',
  'Power on and perform a controlled test',
];

const SAFETY_POINTS = [
  'Always park on a flat, stable surface before starting any installation work.',
  'Switch off the vehicle and disconnect power before handling electrical connections.',
  'Never rush a fitting - check every connection and mounting point carefully.',
  'A trained or qualified person should perform installation and testing.',
  'Do not attempt to install on a vehicle model that has not been validated for this prototype design.',
];

export default function HowToFit() {
  return (
    <div>
      <SEO
        title="How to Fit ZEVION"
        description="A general concept overview of fitting the ZEVION emergency electric drive system. Exact installation depends on the vehicle model and final prototype design."
      />

      <section className="section text-center">
        <SectionHeading
          eyebrow="Installation Concept"
          title="How to Fit ZEVION"
          subtitle="A general step-by-step overview of the ZEVION fitting concept."
        />
      </section>

      <section className="section !pt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, index) => (
            <Reveal key={step} delay={index * 80}>
              <div className="card h-full flex flex-col gap-4">
                <span className="font-display text-4xl font-bold text-zevion-gold/40">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="font-display font-semibold text-white leading-snug">{step}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section !pt-0">
        <Reveal>
          <PrototypeNotice text="Exact installation depends on the vehicle model and final prototype design." />
        </Reveal>
      </section>

      <section className="section bg-zevion-charcoal !max-w-none">
        <div className="mx-auto max-w-4xl">
          <SectionHeading eyebrow="Safety First" title="Important Safety Information" />
          <Reveal delay={100} className="mt-10">
            <ul className="flex flex-col gap-4">
              {SAFETY_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-zevion-gold" aria-hidden="true" />
                  <span className="body-text">{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

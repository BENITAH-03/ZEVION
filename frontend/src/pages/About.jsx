import { UserRound, GraduationCap, Building2 } from 'lucide-react';
import SEO from '../components/SEO.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import PrototypeNotice from '../components/PrototypeNotice.jsx';

const FOUNDERS = [
  { name: 'Hemnath R', role: 'Founder' },
  { name: 'Benitah Joshi M', role: 'Founder' },
];

export default function About() {
  return (
    <div>
      <SEO
        title="About ZEVION"
        description="ZEVION is being developed from an idea toward a prototype by its founders at Easwari Engineering College, with the vision of providing reliable emergency mobility when fuel fails."
      />

      <section className="section text-center">
        <SectionHeading eyebrow="About ZEVION" title="Our Vision" />
        <Reveal delay={100} className="mt-6 mx-auto max-w-2xl">
          <p className="heading-md text-zevion-gold italic">
            &ldquo;To provide reliable emergency mobility when fuel fails.&rdquo;
          </p>
        </Reveal>
      </section>

      <section className="section !pt-0">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="body-text">
            ZEVION started as an idea to solve a simple but common problem - being stranded when fuel runs
            out. It is currently being developed from an idea toward a working prototype, moving step by
            step through research, design, building and testing.
          </p>
        </Reveal>
      </section>

      <section className="section bg-zevion-charcoal !max-w-none">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrow="Our Team" title="Meet the People Behind ZEVION" />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {FOUNDERS.map((founder, index) => (
              <Reveal key={founder.name} delay={index * 100}>
                <div className="card h-full flex flex-col items-center text-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-zevion-gold/10 border border-zevion-gold/30">
                    <UserRound className="h-8 w-8 text-zevion-gold" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="eyebrow mb-1">{founder.role}</p>
                    <h3 className="heading-md !text-xl">{founder.name}</h3>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={250} className="mt-8">
            <div className="card !p-6 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-center sm:text-left">
              <div className="flex items-center gap-3">
                <GraduationCap className="h-6 w-6 text-zevion-gold flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-zevion-gray">Faculty Mentor</p>
                  <p className="font-display font-semibold text-white">Karthick</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Building2 className="h-6 w-6 text-zevion-gold flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-zevion-gray">Institution</p>
                  <p className="font-display font-semibold text-white">Easwari Engineering College</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section text-center">
        <Reveal>
          <PrototypeNotice />
        </Reveal>
      </section>
    </div>
  );
}

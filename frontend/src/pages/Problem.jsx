import { Route, Fuel, MapPinOff, CarFront, Moon, Search, AlertTriangle, MapPin } from 'lucide-react';
import SEO from '../components/SEO.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import FlowDiagram from '../components/FlowDiagram.jsx';

const PROBLEM_FLOW = [
  { label: 'Travelling', icon: Route },
  { label: 'Fuel Runs Out', icon: Fuel },
  { label: 'No Petrol Bunk Nearby', icon: MapPinOff },
  { label: 'Vehicle Stops', icon: CarFront },
  { label: 'Rider Gets Stranded', icon: AlertTriangle },
];

const SITUATIONS = [
  { icon: Route, title: 'Long-Distance Travel', description: 'Fuel can run out unexpectedly during a long trip.' },
  { icon: AlertTriangle, title: 'Emergency Situations', description: 'Sudden fuel shortage during an urgent journey.' },
  { icon: Moon, title: 'Night Travel', description: 'Petrol bunks may be closed or hard to find after dark.' },
  { icon: MapPin, title: 'Rural Roads', description: 'Petrol bunks can be far apart in rural areas.' },
  { icon: Search, title: 'Unknown Places', description: 'Not knowing the area makes finding fuel harder.' },
];

export default function Problem() {
  return (
    <div>
      <SEO
        title="The Problem"
        description="Running out of fuel can leave riders stranded - especially during long-distance travel, at night, on rural roads, or in unfamiliar places."
      />

      <section className="section text-center">
        <SectionHeading eyebrow="The Problem" title="Running Out of Fuel Can Leave Us Stranded." />
      </section>

      <section className="section !pt-0">
        <Reveal className="mb-10 text-center">
          <p className="eyebrow mb-2">Imagine This...</p>
        </Reveal>
        <FlowDiagram steps={PROBLEM_FLOW} direction="horizontal" />
        <Reveal delay={200} className="mt-10 text-center">
          <p className="heading-md italic">&ldquo;When fuel runs out, the vehicle cannot move.&rdquo;</p>
        </Reveal>
      </section>

      <section className="section bg-zevion-charcoal !max-w-none">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Getting Stuck Can Happen Anywhere"
            title="Fuel Shortages Don't Wait For The Right Moment"
            subtitle="These situations can happen to anyone, anywhere, at any time."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {SITUATIONS.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 100}>
                  <div className="card h-full flex flex-col items-center text-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-zevion-gold/10 border border-zevion-gold/30">
                      <Icon className="h-7 w-7 text-zevion-gold" aria-hidden="true" />
                    </div>
                    <h3 className="font-display font-semibold text-white">{item.title}</h3>
                    <p className="text-sm text-zevion-gray">{item.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section text-center">
        <Reveal>
          <p className="heading-lg max-w-3xl mx-auto">
            &ldquo;Running out of fuel can leave us stranded.&rdquo;
          </p>
        </Reveal>
      </section>
    </div>
  );
}

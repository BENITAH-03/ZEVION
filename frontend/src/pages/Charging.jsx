import { Battery, PlugZap, BatteryCharging, Gauge, Power, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import FlowDiagram from '../components/FlowDiagram.jsx';
import PrototypeNotice from '../components/PrototypeNotice.jsx';

const CHARGING_FLOW = [
  { label: 'Battery', icon: Battery },
  { label: 'Connect Compatible Charger', icon: PlugZap },
  { label: 'Charge', icon: BatteryCharging },
  { label: 'Check Charging Indicator', icon: Gauge },
  { label: 'Disconnect', icon: Power },
  { label: 'Ready for Emergency Use', icon: CheckCircle2 },
];

const SAFETY_POINTS = [
  'Use the correct compatible charger.',
  'Charge in a dry and ventilated location.',
  'Do not use damaged batteries or chargers.',
  'Do not short-circuit battery terminals.',
  'Keep the battery away from extreme heat.',
  'Use appropriate battery protection / BMS (Battery Management System).',
  'Follow final manufacturer charging instructions once available.',
];

export default function Charging() {
  return (
    <div>
      <SEO
        title="Charging"
        description="The ZEVION battery concept is rechargeable and intended to be prepared before emergency use. Charging time and final specifications are under development."
      />

      <section className="section text-center">
        <SectionHeading
          eyebrow="Charging"
          title="Charge. Ready. Go."
          subtitle="The ZEVION battery concept is rechargeable and intended to be prepared before emergency use."
        />
      </section>

      <section className="section !pt-0">
        <FlowDiagram steps={CHARGING_FLOW} direction="horizontal" />
      </section>

      <section className="section bg-zevion-charcoal !max-w-none">
        <div className="mx-auto max-w-4xl">
          <SectionHeading eyebrow="Safety" title="Charging Safety Points" />
          <Reveal delay={100} className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SAFETY_POINTS.map((point) => (
              <div key={point} className="card !p-5 flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-zevion-gold" aria-hidden="true" />
                <span className="text-sm text-zevion-gray">{point}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section text-center">
        <Reveal>
          <PrototypeNotice text="Battery capacity, charging time and final specifications are under development." />
        </Reveal>
      </section>
    </div>
  );
}

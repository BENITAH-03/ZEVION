import { Battery, Sliders, Cog, Bike, Fuel, Zap, BatteryCharging, MapPin } from 'lucide-react';
import SEO from '../components/SEO.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import FlowDiagram from '../components/FlowDiagram.jsx';
import PrototypeNotice from '../components/PrototypeNotice.jsx';

const TECH_CHAIN = [
  { label: 'Battery', icon: Battery },
  { label: 'Smart Controller', icon: Sliders },
  { label: 'Electric Motor', icon: Cog },
  { label: 'Vehicle Moves', icon: Bike },
];

const EMERGENCY_FLOW = [
  { label: 'Fuel Runs Out', icon: Fuel },
  { label: 'Activate ZEVION', icon: Zap },
  { label: 'Battery Provides Power', icon: BatteryCharging },
  { label: 'Electric Motor Moves Vehicle', icon: Cog },
  { label: 'Reach Petrol Bunk / Safe Location', icon: MapPin },
];

export default function HowItWorks() {
  return (
    <div>
      <SEO
        title="How It Works"
        description="ZEVION's technology is simple: a battery connects to a smart controller, which drives an electric motor to move the vehicle when fuel runs out."
      />

      <section className="section text-center">
        <SectionHeading eyebrow="How It Works" title="Simple Technology. Smart Purpose." />
      </section>

      <section className="section !pt-0">
        <Reveal className="mb-6 text-center">
          <p className="font-display font-semibold uppercase tracking-widest text-sm text-zevion-gray">
            Core Engineering Concept
          </p>
        </Reveal>
        <FlowDiagram steps={TECH_CHAIN} direction="horizontal" />
      </section>

      <section className="section bg-zevion-charcoal !max-w-none">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Complete Emergency Flow" title="From Empty Tank to Safe Arrival" />
          <div className="mt-12">
            <FlowDiagram steps={EMERGENCY_FLOW} direction="horizontal" />
          </div>
        </div>
      </section>

      <section className="section text-center">
        <Reveal className="max-w-2xl mx-auto flex flex-col gap-6 items-center">
          <p className="body-text">
            Detailed engineering and prototype testing will be developed in the next stage.
          </p>
          <PrototypeNotice />
        </Reveal>
      </section>
    </div>
  );
}

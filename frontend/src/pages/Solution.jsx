import { Fuel, Zap, BatteryCharging, Bike, MapPin, CheckCircle2, XCircle } from 'lucide-react';
import SEO from '../components/SEO.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import FlowDiagram from '../components/FlowDiagram.jsx';
import PrototypeNotice from '../components/PrototypeNotice.jsx';

const SOLUTION_FLOW = [
  { label: 'Fuel Empty', icon: Fuel },
  { label: 'Activate ZEVION', icon: Zap },
  { label: 'Battery Powers Motor', icon: BatteryCharging },
  { label: 'Vehicle Moves', icon: Bike },
  { label: 'Reach Petrol Bunk / Safe Location', icon: MapPin },
];

const COMPARISON = [
  { without: 'Vehicle stops', with: 'Temporary electric movement' },
  { without: 'Need to push vehicle', with: 'Move toward nearby petrol bunk' },
  { without: 'Wait for help', with: 'Better emergency support' },
  { without: 'Search for petrol', with: 'Less chance of being stranded' },
];

export default function Solution() {
  return (
    <div>
      <SEO
        title="The ZEVION Solution"
        description="When petrol runs out, ZEVION provides temporary electric power to help the vehicle move again toward a nearby petrol bunk or safe location."
      />

      <section className="section text-center">
        <SectionHeading eyebrow="The Solution" title="Introducing ZEVION" />
        <Reveal delay={100} className="mx-auto mt-6 max-w-2xl">
          <p className="body-text">
            When petrol runs out, ZEVION provides temporary electric power to help the vehicle move again.
          </p>
        </Reveal>
      </section>

      <section className="section !pt-0">
        <FlowDiagram steps={SOLUTION_FLOW} direction="horizontal" />
        <Reveal delay={200} className="mt-12 text-center">
          <p className="heading-lg text-zevion-gold">DON&apos;T GET STUCK. MOVE TO SAFETY.</p>
        </Reveal>
      </section>

      <section className="section bg-zevion-charcoal !max-w-none">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrow="Comparison" title="Existing Problem vs ZEVION" />

          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[560px] border-separate border-spacing-y-3">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-display uppercase tracking-wider text-zevion-gray">
                    Without ZEVION
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-display uppercase tracking-wider text-zevion-gold">
                    With ZEVION
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr key={row.without} className="bg-zevion-panel">
                    <td className="rounded-l-lg border border-r-0 border-zevion-border px-4 py-4">
                      <span className="flex items-center gap-2 text-sm text-zevion-gray">
                        <XCircle className="h-4 w-4 flex-shrink-0 text-red-400" aria-hidden="true" />
                        {row.without}
                      </span>
                    </td>
                    <td className="rounded-r-lg border border-l-0 border-zevion-border px-4 py-4">
                      <span className="flex items-center gap-2 text-sm text-white">
                        <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-zevion-gold" aria-hidden="true" />
                        {row.with}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section">
        <Reveal>
          <PrototypeNotice />
        </Reveal>
      </section>
    </div>
  );
}

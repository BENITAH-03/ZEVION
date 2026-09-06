import {
  Bike,
  Fuel,
  Zap,
  Lightbulb,
  DollarSign,
  Wrench,
  Handshake,
  RefreshCw,
  Search,
  PenTool,
  ClipboardList,
  Rocket,
  MapPin,
  Shield,
  Leaf,
} from 'lucide-react';
import SEO from '../components/SEO.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import FlowDiagram from '../components/FlowDiagram.jsx';

const MARKET_POINTS = [
  { icon: Bike, text: 'Millions of fuel-powered vehicles' },
  { icon: Fuel, text: 'Petrol shortages happen every day' },
  { icon: Zap, text: 'Growing interest in electric mobility' },
  { icon: Lightbulb, text: 'Need for smarter mobility solutions' },
];

const BUSINESS_MODEL = [
  { icon: DollarSign, title: 'Product Sales', description: 'Sell the ZEVION system.' },
  { icon: Wrench, title: 'Installation', description: 'Install the system on suitable vehicles.' },
  { icon: Handshake, title: 'Partnerships', description: 'Work with workshops and vehicle companies.' },
  { icon: RefreshCw, title: 'Service', description: 'Maintenance and future upgrades.' },
];

const ROADMAP_STEPS = [
  { icon: Search, label: 'Research' },
  { icon: PenTool, label: 'Design' },
  { icon: Wrench, label: 'Build Prototype' },
  { icon: ClipboardList, label: 'Test' },
  { icon: RefreshCw, label: 'Improve' },
  { icon: Rocket, label: 'Launch' },
];

const TIMELINE = [
  { period: 'Month 1-2', title: 'Research & Design', description: 'Idea refinement and feasibility study.' },
  { period: 'Month 3-5', title: 'Build Prototype', description: 'Component sourcing and assembly.' },
  { period: 'Month 6-8', title: 'Testing & Improvement', description: 'Trials, feedback, and fixes.' },
  { period: 'Month 9-12', title: 'Demo & Presentation', description: 'Showcase the working prototype.' },
];

const IMPACT = [
  { icon: MapPin, title: 'Mobility', description: 'Helps reduce the chance of being stranded.' },
  { icon: Shield, title: 'Safety', description: 'Helps move toward a safer location.' },
  { icon: Lightbulb, title: 'Innovation', description: 'Introduces a new emergency mobility idea.' },
  { icon: Leaf, title: 'Future Technology', description: 'Supports electric mobility innovation.' },
];

export default function Market() {
  return (
    <div>
      <SEO
        title="Market Opportunity"
        description="Millions of fuel-powered vehicles, daily petrol shortages, and growing interest in electric mobility make ZEVION a timely emergency mobility concept."
      />

      {/* MARKET OPPORTUNITY */}
      <section className="section text-center">
        <SectionHeading eyebrow="Market" title="A Big Problem = A Big Opportunity" />
      </section>

      <section className="section !pt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MARKET_POINTS.map((point, index) => {
            const Icon = point.icon;
            return (
              <Reveal key={point.text} delay={index * 90}>
                <div className="card h-full flex flex-col items-center text-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-zevion-gold/10 border border-zevion-gold/30">
                    <Icon className="h-7 w-7 text-zevion-gold" aria-hidden="true" />
                  </div>
                  <p className="text-sm text-white font-medium">{point.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
        <Reveal delay={300} className="mt-10 text-center">
          <p className="heading-md text-zevion-gold">A common problem. A new mobility solution.</p>
        </Reveal>
      </section>

      {/* BUSINESS MODEL */}
      <section className="section bg-zevion-charcoal !max-w-none">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Business Model" title="How Can ZEVION Earn?" />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BUSINESS_MODEL.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 100}>
                  <div className="card h-full flex flex-col gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zevion-gold/10 border border-zevion-gold/30">
                      <Icon className="h-6 w-6 text-zevion-gold" aria-hidden="true" />
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

      {/* ROADMAP */}
      <section className="section">
        <SectionHeading eyebrow="Roadmap" title="From Idea to Product" />
        <div className="mt-12">
          <FlowDiagram steps={ROADMAP_STEPS} direction="horizontal" />
        </div>
        <Reveal delay={200} className="mt-8 text-center">
          <p className="body-text italic">We are currently at the idea and prototype stage.</p>
        </Reveal>
      </section>

      <section className="section !pt-0 bg-zevion-charcoal !max-w-none">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Duration & Timeline" title="Key Milestones for the Next 12 Months" />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TIMELINE.map((item, index) => (
              <Reveal key={item.period} delay={index * 100}>
                <div className="card h-full flex flex-col gap-2">
                  <span className="eyebrow">{item.period}</span>
                  <h3 className="font-display font-semibold text-white text-lg mt-1">{item.title}</h3>
                  <p className="text-sm text-zevion-gray">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={400} className="mt-10 text-center">
            <p className="heading-md text-zevion-gold">Clear plan. Steady progress.</p>
          </Reveal>
        </div>
      </section>

      {/* IMPACT */}
      <section className="section">
        <SectionHeading eyebrow="Impact" title="Why ZEVION Matters" />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {IMPACT.map((item, index) => {
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
      </section>
    </div>
  );
}

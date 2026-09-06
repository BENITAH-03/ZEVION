import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Fuel, Zap, Bike, Package, BatteryCharging, Sliders, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO.jsx';
import Reveal from '../components/Reveal.jsx';
import PrototypeNotice from '../components/PrototypeNotice.jsx';
import FlowDiagram from '../components/FlowDiagram.jsx';
import Logo from '../components/Logo.jsx';
import { useApi } from '../hooks/useApi.js';
import { contentApi } from '../services/api.js';

const FALLBACK_HERO = {
  title: 'ZEVION',
  subtitle: 'POWER WHEN FUEL FAILS.',
  body: 'When fuel runs out and help is far away, ZEVION is designed to provide temporary electric mobility support to help you reach a safer location or nearby petrol bunk.',
  metadata: { eyebrow: 'EMERGENCY ELECTRIC MOBILITY SUPPORT' },
};

const HOME_HIGHLIGHTS = [
  {
    icon: Package,
    title: 'Portable',
    description: 'Designed to be carried and stored conveniently.',
  },
  {
    icon: BatteryCharging,
    title: 'Rechargeable',
    description: 'Can be recharged and prepared for future emergencies.',
  },
  {
    icon: Zap,
    title: 'Emergency Power',
    description: 'Designed to provide temporary electric mobility support.',
  },
  {
    icon: Sliders,
    title: 'Smart Control',
    description: 'Controls the electric drive system.',
  },
];

const HERO_FLOW = [
  { label: 'Fuel Empty', icon: Fuel },
  { label: 'ZEVION Activated', icon: Zap },
  { label: 'Temporary Electric Movement', icon: Bike },
];

export default function Home() {
  const fetchHero = useCallback(() => contentApi.getBySectionKey('home_hero'), []);
  const { data } = useApi(fetchHero, []);
  const hero = data || FALLBACK_HERO;

  return (
    <div>
      <SEO
        title="Power When Fuel Fails"
        description="ZEVION is a prototype emergency electric mobility concept designed to provide temporary electric power when your fuel-powered vehicle runs out, helping you reach a petrol bunk or safe location."
      />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-zevion-border">
        <div className="absolute inset-0 bg-radial-fade" aria-hidden="true" />
        <div className="section relative flex flex-col items-center text-center gap-8">
          <Reveal className="flex flex-col items-center gap-6">
            <Logo variant="full" className="h-16 sm:h-20" />
            <span className="eyebrow">{hero.metadata?.eyebrow || 'EMERGENCY ELECTRIC MOBILITY SUPPORT'}</span>
            <h1 className="heading-xl max-w-4xl">{hero.subtitle}</h1>
            <p className="body-text max-w-2xl">{hero.body}</p>
          </Reveal>

          <Reveal delay={150} className="flex flex-col sm:flex-row items-center gap-4">
            <Link to="/solution" className="btn-primary">
              Explore ZEVION <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link to="/how-it-works" className="btn-secondary">
              How It Works
            </Link>
          </Reveal>

          <Reveal delay={250} className="w-full max-w-4xl pt-6">
            <FlowDiagram steps={HERO_FLOW} direction="horizontal" />
          </Reveal>
        </div>
      </section>

      {/* HIGHLIGHT CARDS */}
      <section className="section">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOME_HIGHLIGHTS.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 100}>
                <div className="card h-full flex flex-col items-center text-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-zevion-gold/10 border border-zevion-gold/30">
                    <Icon className="h-7 w-7 text-zevion-gold" aria-hidden="true" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-white uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zevion-gray">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="section !pt-0">
        <Reveal>
          <PrototypeNotice />
        </Reveal>
      </section>
    </div>
  );
}

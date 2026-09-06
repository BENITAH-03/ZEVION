import { useCallback } from 'react';
import { Package, BatteryCharging, Zap, Sliders, MapPin, Rocket } from 'lucide-react';
import SEO from '../components/SEO.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import LoadingState from '../components/LoadingState.jsx';
import ErrorState from '../components/ErrorState.jsx';
import { useApi } from '../hooks/useApi.js';
import { featuresApi } from '../services/api.js';

const ICON_MAP = {
  package: Package,
  'battery-charging': BatteryCharging,
  zap: Zap,
  sliders: Sliders,
  'map-pin': MapPin,
  rocket: Rocket,
};

const FALLBACK_FEATURES = [
  { slug: 'portable', title: 'Portable', description: 'Designed to be carried and stored conveniently.', icon: 'package' },
  { slug: 'rechargeable', title: 'Rechargeable', description: 'Can be recharged and prepared for future emergencies.', icon: 'battery-charging' },
  { slug: 'emergency-electric-drive', title: 'Emergency Electric Drive', description: 'Designed to provide temporary electric mobility support.', icon: 'zap' },
  { slug: 'smart-control', title: 'Smart Control', description: 'Controls the electric drive system.', icon: 'sliders' },
  { slug: 'temporary-vehicle-movement', title: 'Temporary Vehicle Movement', description: 'Designed to help the vehicle reach a petrol bunk or safe location.', icon: 'map-pin' },
  { slug: 'future-ready-technology', title: 'Future-Ready Technology', description: 'An innovative emergency mobility concept for future development.', icon: 'rocket' },
];

export default function Features() {
  const fetchFeatures = useCallback(() => featuresApi.list(), []);
  const { data, loading, error } = useApi(fetchFeatures, []);
  const features = data && data.length > 0 ? data : FALLBACK_FEATURES;

  return (
    <div>
      <SEO
        title="Key Features"
        description="ZEVION is designed to be portable, rechargeable, and provide temporary emergency electric mobility support with smart control."
      />

      <section className="section text-center">
        <SectionHeading eyebrow="Features" title="Key Features" subtitle="What ZEVION is designed to deliver." />
      </section>

      <section className="section !pt-0">
        {loading && <LoadingState label="Loading features..." />}
        {error && <ErrorState message={error} />}

        {!loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = ICON_MAP[feature.icon] || Package;
              return (
                <Reveal key={feature.slug} delay={index * 90}>
                  <div className="card h-full flex flex-col gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-zevion-gold/10 border border-zevion-gold/30">
                      <Icon className="h-7 w-7 text-zevion-gold" aria-hidden="true" />
                    </div>
                    <h3 className="font-display font-semibold text-lg text-white">{feature.title}</h3>
                    <p className="text-sm text-zevion-gray">{feature.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}

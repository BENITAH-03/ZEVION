import { useCallback } from 'react';
import {
  Battery,
  Zap,
  Bike,
  Sliders,
  BatteryCharging,
  Package,
  RefreshCw,
} from 'lucide-react';
import SEO from '../components/SEO.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import PrototypeNotice from '../components/PrototypeNotice.jsx';
import StatusTag from '../components/StatusTag.jsx';
import LoadingState from '../components/LoadingState.jsx';
import ErrorState from '../components/ErrorState.jsx';
import FrontWheelDiagram from '../components/diagrams/FrontWheelDiagram.jsx';
import { useApi } from '../hooks/useApi.js';
import { productsApi } from '../services/api.js';

const CONCEPT_ICONS = {
  'Battery Powered': Battery,
  'Emergency Electric Drive': Zap,
  'Temporary Vehicle Movement': Bike,
  'Smart Control': Sliders,
  'Rechargeable System': BatteryCharging,
  'Portable Concept': Package,
  'Removable System Concept': RefreshCw,
};

export default function Product() {
  const fetchProducts = useCallback(() => productsApi.list(), []);
  const { data: products, loading, error } = useApi(fetchProducts, []);

  const mainProduct = products?.find((p) => p.category === 'system');
  const components = products?.filter((p) => p.category === 'component') || [];

  return (
    <div>
      <SEO
        title="The ZEVION Product"
        description="ZEVION is being developed as a portable emergency electric mobility system intended to provide temporary electric movement when a fuel-powered vehicle runs out of fuel. Currently a prototype concept."
      />

      <section className="section text-center">
        <SectionHeading eyebrow="Product" title="The ZEVION Product" />
        <Reveal delay={100} className="mt-6 flex justify-center">
          <StatusTag variant="concept">Prototype Concept</StatusTag>
        </Reveal>
      </section>

      <section className="section !pt-0">
        {loading && <LoadingState label="Loading product information..." />}
        {error && <ErrorState message={error} />}

        {mainProduct && (
          <Reveal className="mx-auto max-w-3xl text-center mb-14">
            <h3 className="heading-md">{mainProduct.name}</h3>
            <p className="body-text mt-4">{mainProduct.description}</p>
          </Reveal>
        )}

        {mainProduct?.specs?.concepts && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mainProduct.specs.concepts.map((concept, index) => {
              const Icon = CONCEPT_ICONS[concept] || Package;
              return (
                <Reveal key={concept} delay={index * 80}>
                  <div className="card h-full flex flex-col items-center text-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zevion-gold/10 border border-zevion-gold/30">
                      <Icon className="h-6 w-6 text-zevion-gold" aria-hidden="true" />
                    </div>
                    <p className="font-display font-semibold text-white text-sm">{concept}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        )}
      </section>

      {/* Component concepts */}
      {components.length > 0 && (
        <section className="section bg-zevion-charcoal !max-w-none">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="System Components" title="What ZEVION Is Built Around (Concept)" />
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {components.map((component, index) => (
                <Reveal key={component.slug} delay={index * 100}>
                  <div className="card h-full flex flex-col gap-3">
                    <StatusTag variant="concept">Concept</StatusTag>
                    <h3 className="font-display font-semibold text-white">{component.name}</h3>
                    <p className="text-sm text-zevion-gray">{component.tagline}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Front-wheel concept */}
      <section className="section">
        <SectionHeading
          eyebrow="ZEVION Front-Wheel Electric Drive"
          title="Front-Wheel Electric Drive Concept"
          subtitle="An engineering-style illustration of the front-wheel electric drive concept being explored for emergency electric mobility."
        />

        <Reveal delay={150} className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="card !p-4 sm:!p-8">
            <FrontWheelDiagram />
          </div>
          <div className="flex flex-col gap-5">
            <StatusTag variant="development">Prototype Concept - Final Engineering Design Under Development</StatusTag>
            <p className="body-text">
              This illustration labels the general areas of a front-wheel electric drive concept - front
              fork, front wheel, electric hub motor, axle, brake area and motor cable - to explain the idea
              being explored for ZEVION.
            </p>
            <p className="body-text">
              Final mechanical design, battery placement, electrical architecture, braking compatibility,
              structural safety and vehicle compatibility require engineering validation.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="section !pt-0">
        <Reveal>
          <PrototypeNotice text="Do not claim the reference hub motor image is the final ZEVION product. This diagram is an original illustration used only as a visual/reference concept - not a manufactured or certified product." />
        </Reveal>
      </section>
    </div>
  );
}

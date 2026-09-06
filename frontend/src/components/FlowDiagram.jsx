import { ArrowDown, ArrowRight } from 'lucide-react';
import Reveal from './Reveal.jsx';

/**
 * Renders a sequence of labeled steps connected by animated arrows.
 * direction="vertical" stacks steps top to bottom (mobile-friendly);
 * direction="horizontal" lays them in a row on larger screens and
 * automatically falls back to vertical on small screens.
 */
export default function FlowDiagram({ steps, direction = 'horizontal' }) {
  if (direction === 'vertical') {
    return (
      <div className="flex flex-col items-center gap-2">
        {steps.map((step, index) => (
          <Reveal key={step.label} delay={index * 90} className="flex flex-col items-center gap-2 w-full max-w-sm">
            <StepCard step={step} index={index} />
            {index < steps.length - 1 && (
              <ArrowDown className="flow-arrow h-6 w-6" aria-hidden="true" />
            )}
          </Reveal>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-2 w-full">
      {steps.map((step, index) => (
        <div key={step.label} className="flex flex-col lg:flex-row items-center gap-3 lg:gap-2 w-full lg:w-auto lg:flex-1">
          <Reveal delay={index * 90} className="w-full">
            <StepCard step={step} index={index} />
          </Reveal>
          {index < steps.length - 1 && (
            <>
              <ArrowDown className="flow-arrow h-6 w-6 lg:hidden" aria-hidden="true" />
              <ArrowRight className="flow-arrow hidden h-6 w-6 lg:block flex-shrink-0" aria-hidden="true" />
            </>
          )}
        </div>
      ))}
    </div>
  );
}

function StepCard({ step, index }) {
  const Icon = step.icon;
  return (
    <div className="card flex w-full flex-col items-center gap-3 text-center py-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-gradient text-black font-display font-bold text-lg">
        {Icon ? <Icon className="h-6 w-6" aria-hidden="true" /> : index + 1}
      </div>
      <p className="font-display font-semibold text-white leading-snug">{step.label}</p>
      {step.description && <p className="text-sm text-zevion-gray">{step.description}</p>}
    </div>
  );
}

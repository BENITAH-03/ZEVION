import { AlertTriangle } from 'lucide-react';

const DEFAULT_TEXT =
  'ZEVION is currently a prototype concept. Technical specifications, safety validation, vehicle compatibility and road compliance are subject to engineering testing and certification.';

export default function PrototypeNotice({ text = DEFAULT_TEXT, className = '' }) {
  return (
    <div className={`disclaimer-box flex items-start gap-3 ${className}`} role="note">
      <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-zevion-gold" aria-hidden="true" />
      <p>{text}</p>
    </div>
  );
}

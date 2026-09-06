import { WifiOff } from 'lucide-react';

export default function ErrorState({ message = 'Unable to load this content right now.' }) {
  return (
    <div
      className="flex flex-col items-center justify-center gap-3 rounded-xl border border-zevion-border bg-zevion-panel py-16 text-center"
      role="alert"
    >
      <WifiOff className="h-8 w-8 text-zevion-gray" aria-hidden="true" />
      <p className="text-sm text-zevion-gray">{message}</p>
    </div>
  );
}

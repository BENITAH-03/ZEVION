export default function LoadingState({ label = 'Loading...' }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-16" role="status" aria-live="polite">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-zevion-border border-t-zevion-gold" />
      <p className="text-sm text-zevion-gray">{label}</p>
    </div>
  );
}

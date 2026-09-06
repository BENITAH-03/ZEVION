const styles = {
  concept: 'border-zevion-gold/40 bg-zevion-gold/10 text-zevion-gold-light',
  prototype: 'border-blue-400/30 bg-blue-400/10 text-blue-300',
  development: 'border-purple-400/30 bg-purple-400/10 text-purple-300',
  future: 'border-zevion-gray/30 bg-white/5 text-zevion-gray',
};

export default function StatusTag({ children, variant = 'concept' }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-display font-bold uppercase tracking-widest ${styles[variant] || styles.concept}`}
    >
      {children}
    </span>
  );
}

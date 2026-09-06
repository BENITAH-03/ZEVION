import { useScrollReveal } from '../hooks/useScrollReveal.js';

/**
 * Fades and slides its children into view the first time they scroll
 * into the viewport. Pure CSS animation - no layout thrash, respects
 * reduced-motion via the animation utility class in index.css.
 */
export default function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }) {
  const [ref, isVisible] = useScrollReveal();

  return (
    <Tag
      ref={ref}
      className={className}
      style={
        isVisible
          ? { opacity: 0, animation: `fadeInUp 0.7s ease-out ${delay}ms forwards` }
          : { opacity: 0 }
      }
    >
      {children}
    </Tag>
  );
}

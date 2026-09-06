import { useLayoutEffect, useRef, useState } from 'react';

/**
 * Returns a ref to attach to an element and a boolean that flips to true
 * once the element scrolls into view. Used for subtle fade-in-up reveals.
 *
 * An element already inside (or close to) the viewport on first render is
 * marked visible synchronously via getBoundingClientRect, rather than
 * waiting on the IntersectionObserver callback (which fires on a later
 * frame). Without this, above-the-fold content briefly - or in some
 * browsers/timing conditions, permanently - never renders past opacity: 0.
 */
export function useScrollReveal(options = { threshold: 0.15 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useLayoutEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return undefined;
    }

    const rect = node.getBoundingClientRect();
    const alreadyInView = rect.top < window.innerHeight && rect.bottom > 0;
    if (alreadyInView) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, options);

    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, isVisible];
}

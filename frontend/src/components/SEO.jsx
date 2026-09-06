import { useEffect } from 'react';

/**
 * Lightweight per-page SEO: sets document title and meta description
 * without pulling in a routing-aware head library.
 */
export default function SEO({ title, description }) {
  useEffect(() => {
    const previousTitle = document.title;
    if (title) {
      document.title = `${title} | ZEVION`;
    }

    let descriptionTag = document.querySelector('meta[name="description"]');
    const previousDescription = descriptionTag?.getAttribute('content');

    if (description && descriptionTag) {
      descriptionTag.setAttribute('content', description);
    }

    return () => {
      document.title = previousTitle;
      if (descriptionTag && previousDescription) {
        descriptionTag.setAttribute('content', previousDescription);
      }
    };
  }, [title, description]);

  return null;
}

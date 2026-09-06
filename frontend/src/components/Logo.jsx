import { Link } from 'react-router-dom';
import logoMark from '../assets/images/zevion-logo-mark.png';
import logoFull from '../assets/images/zevion-logo-full.png';

/**
 * Renders the official ZEVION logo supplied by the founders.
 * `variant="mark"` shows the icon only (compact spaces, favicons-adjacent
 * UI); `variant="full"` shows the complete icon + wordmark lockup.
 */
export default function Logo({ variant = 'full', className = '', linkToHome = true }) {
  const image =
    variant === 'mark' ? (
      <img
        src={logoMark}
        alt="ZEVION logo mark"
        className={`h-10 w-10 rounded-md object-cover ${className}`}
      />
    ) : (
      <img
        src={logoFull}
        alt="ZEVION - Power When Fuel Fails"
        className={`h-9 w-auto object-contain ${className}`}
      />
    );

  if (!linkToHome) return image;

  return (
    <Link to="/" aria-label="ZEVION home" className="flex items-center gap-2">
      {image}
    </Link>
  );
}

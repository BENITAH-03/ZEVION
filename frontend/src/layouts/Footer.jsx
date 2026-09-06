import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail } from 'lucide-react';
import Logo from '../components/Logo.jsx';

const QUICK_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/problem', label: 'Problem' },
  { to: '/solution', label: 'Solution' },
  { to: '/product', label: 'Product' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zevion-border bg-zevion-charcoal">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <Logo variant="full" className="h-9" />
          <p className="text-sm font-display font-semibold uppercase tracking-widest text-zevion-gold">
            Power When Fuel Fails.
          </p>
          <p className="text-sm text-zevion-gray leading-relaxed">
            Emergency Electric Mobility Support - currently in the idea and prototype development stage.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-display font-semibold uppercase tracking-wider text-white text-sm">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2.5">
            {QUICK_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-sm text-zevion-gray hover:text-zevion-gold transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-display font-semibold uppercase tracking-wider text-white text-sm">
            Contact
          </h3>
          <ul className="flex flex-col gap-3">
            <li>
              <a
                href="mailto:zevion.innovation@gmail.com"
                className="flex items-center gap-2 text-sm text-zevion-gray hover:text-zevion-gold transition-colors break-all"
              >
                <Mail className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                zevion.innovation@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/zevion.innovation/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-zevion-gray hover:text-zevion-gold transition-colors"
              >
                <Instagram className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                @zevion.innovation
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/zevion-undefined-a25857433"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-zevion-gray hover:text-zevion-gold transition-colors"
              >
                <Linkedin className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                ZEVION on LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-display font-semibold uppercase tracking-wider text-white text-sm">
            Founders
          </h3>
          <ul className="flex flex-col gap-2 text-sm text-zevion-gray">
            <li>Hemnath R</li>
            <li>Benitah Joshi M</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-zevion-border">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zevion-gray">
          <p>&copy; {year} ZEVION. All rights reserved.</p>
          <p className="text-center sm:text-right max-w-xl">
            ZEVION is a prototype concept currently under engineering development. Not yet commercially
            available, road certified, or safety certified.
          </p>
        </div>
      </div>
    </footer>
  );
}

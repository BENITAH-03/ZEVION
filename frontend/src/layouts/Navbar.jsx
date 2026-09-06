import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '../components/Logo.jsx';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/problem', label: 'Problem' },
  { to: '/solution', label: 'Solution' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/product', label: 'Product' },
  { to: '/how-to-fit', label: 'How to Fit' },
  { to: '/charging', label: 'Charging' },
  { to: '/features', label: 'Features' },
  { to: '/market', label: 'Market' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, []);

  const linkClass = ({ isActive }) =>
    `text-sm font-medium tracking-wide transition-colors duration-200 ${
      isActive ? 'text-zevion-gold' : 'text-zevion-gray hover:text-white'
    }`;

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors duration-300 ${
        isScrolled
          ? 'border-zevion-border bg-zevion-black/95 backdrop-blur-md'
          : 'border-transparent bg-zevion-black/70 backdrop-blur-sm'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12 py-3" aria-label="Primary">
        <Logo variant="full" className="h-8" />

        <ul className="hidden xl:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={linkClass} end={link.to === '/'}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden xl:block">
          <NavLink to="/contact" className="btn-primary !px-5 !py-2.5 !text-xs">
            Get Started
          </NavLink>
        </div>

        <button
          type="button"
          className="xl:hidden inline-flex items-center justify-center rounded-md p-2 text-white"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {isOpen && (
        <div className="xl:hidden border-t border-zevion-border bg-zevion-black">
          <ul className="flex flex-col gap-1 px-5 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-md px-3 py-3 text-base font-medium ${
                      isActive ? 'bg-zevion-gold/10 text-zevion-gold' : 'text-zevion-gray hover:text-white'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-2">
              <NavLink to="/contact" onClick={() => setIsOpen(false)} className="btn-primary w-full">
                Get Started
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

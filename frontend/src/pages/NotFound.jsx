import { Link } from 'react-router-dom';
import SEO from '../components/SEO.jsx';
import Logo from '../components/Logo.jsx';

export default function NotFound() {
  return (
    <div className="section flex min-h-[70vh] flex-col items-center justify-center text-center gap-6">
      <SEO title="Page Not Found" description="The page you are looking for does not exist." />
      <Logo variant="mark" className="h-16 w-16 opacity-80" />
      <p className="eyebrow">404</p>
      <h1 className="heading-lg">This page took a wrong turn.</h1>
      <p className="body-text max-w-md">
        The page you are looking for does not exist or may have moved. Let's get you back on track.
      </p>
      <Link to="/" className="btn-primary">
        Back to Home
      </Link>
    </div>
  );
}

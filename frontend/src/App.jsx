import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout.jsx';
import LoadingState from './components/LoadingState.jsx';

const Home = lazy(() => import('./pages/Home.jsx'));
const Problem = lazy(() => import('./pages/Problem.jsx'));
const Solution = lazy(() => import('./pages/Solution.jsx'));
const HowItWorks = lazy(() => import('./pages/HowItWorks.jsx'));
const Product = lazy(() => import('./pages/Product.jsx'));
const HowToFit = lazy(() => import('./pages/HowToFit.jsx'));
const Charging = lazy(() => import('./pages/Charging.jsx'));
const Features = lazy(() => import('./pages/Features.jsx'));
const Market = lazy(() => import('./pages/Market.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

export default function App() {
  return (
    <Suspense fallback={<LoadingState label="Loading ZEVION..." />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/problem" element={<Problem />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/product" element={<Product />} />
          <Route path="/how-to-fit" element={<HowToFit />} />
          <Route path="/charging" element={<Charging />} />
          <Route path="/features" element={<Features />} />
          <Route path="/market" element={<Market />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

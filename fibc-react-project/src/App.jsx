import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import MinistriesPage from './pages/MinistriesPage';
import EventsPage from './pages/EventsPage';
import SermonsPage from './pages/SermonsPage';
import ContactPage from './pages/ContactPage';
import GivingPage from './pages/GivingPage';
import StaffPage from './pages/StaffPage';
import BeliefsPage from './pages/BeliefsPage';
import FAQPage from './pages/FAQPage';
import VisitPage from './pages/VisitPage';
import SalvationPage from './pages/SalvationPage';
import NextStepsPage from './pages/NextStepsPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <ErrorBoundary>
      <a href="#main" className="skip-link">Skip to content</a>
      <ScrollToTop />
      <Navigation />
      <main id="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/staff" element={<StaffPage />} />
          <Route path="/beliefs" element={<BeliefsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/visit" element={<VisitPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/salvation" element={<SalvationPage />} />
          <Route path="/next-steps" element={<NextStepsPage />} />
          <Route path="/ministries" element={<MinistriesPage />} />
          <Route path="/sermons" element={<SermonsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/giving" element={<GivingPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </ErrorBoundary>
  );
}

export default App;
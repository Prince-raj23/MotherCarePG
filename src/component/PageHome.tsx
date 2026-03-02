import  { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

// --- Section Imports ---
import AboutUs from "./About";
import BlogPage from "./blog";
import ContactUs from "./CtontactPage";
import PGDashboard from "./Home";
import Foother from './Foother';

// --- Registration Pop-up Component ---
const PGRankPromo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [loading, setLoading] = useState(false);
  const promoRef = useRef<HTMLFormElement>(null);

  // EmailJS Keys - Using Vite Environment Variables
  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "your_service_id";
  // prefer a promo-specific template, otherwise fall back to the main template ID
  const promoTemplate = import.meta.env.VITE_EMAILJS_PROMO_TEMPLATE_ID || import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "your_public_key";

  // initialize EmailJS with public key if available
  useEffect(() => {
    if (publicKey && !publicKey.includes('your_')) {
      try {
        emailjs.init(publicKey);
      } catch (err) {
        console.error('EmailJS init error:', err);
      }
    }
  }, [publicKey]);

  useEffect(() => {
    // Initial popup delay
    const timer = setTimeout(() => setIsVisible(true), 1500);

    const handleScroll = () => {
      // Toggle minimized state based on scroll position
      if (window.scrollY > 200) {
        setIsMinimized(true);
      } else {
        setIsMinimized(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isVisible) return null;

  // --- VIEW 1: MINIMIZED (The Vibrating Logo/Button) ---
  if (isMinimized) {
    return (
      <div className="fixed bottom-6 right-6 z-[1000] flex flex-col items-end gap-2">
        <button 
          onClick={() => setIsVisible(false)}
          className="bg-red-500 text-white rounded-full w-6 h-6 text-xs flex items-center justify-center shadow-lg hover:bg-red-600 transition-colors"
        >
          ✕
        </button>
        
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setIsMinimized(false);
          }}
          className="bg-blue-600 text-white p-4 rounded-full shadow-2xl animate-vibrate hover:scale-110 transition-transform flex flex-col items-center justify-center border-4 border-white"
        >
          <span className="text-[10px] font-bold">CLAIM</span>
          <span className="text-xs font-black">₹2000</span>
        </button>

        <style>{`
          @keyframes vibrate {
            0% { transform: rotate(0deg); }
            25% { transform: rotate(3deg); }
            50% { transform: rotate(0eg); }
            75% { transform: rotate(-3deg); }
            100% { transform: rotate(0deg); }
          }
          .animate-vibrate {
            animation: vibrate 0.3s linear infinite;
            animation-iteration-count: 3;
            animation-delay: 3s;
          }
        `}</style>
      </div>
    );
  }

  // --- VIEW 2: FULL FORM ---
  return (
    <div className="fixed bottom-6 right-6 z-[999] w-80 animate-in fade-in slide-in-from-bottom-5 duration-500">
      <div className="bg-white rounded-2xl shadow-2xl border border-blue-100 overflow-hidden relative">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-3 text-gray-400 hover:text-gray-700 text-xl font-bold"
        >
          &times;
        </button>

        <div className="bg-blue-600 p-4 text-white">
          <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Mother Care PG Exclusive</p>
          <h3 className="text-lg font-bold">Register for PG</h3>
        </div>

        <div className="px-5 py-3 bg-blue-50 border-b border-blue-100">
          <p className="text-xs text-blue-900 font-semibold mb-1">First 50 Students Only:</p>
          <div className="flex items-center gap-3">
            <span className="text-2xl font-black text-gray-900">₹8,000</span>
            <span className="text-sm text-gray-400 line-through">₹10,000</span>
            <span className="bg-green-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">20% OFF</span>
          </div>
        </div>

        <form
          ref={promoRef}
          className="p-5 space-y-3"
          onSubmit={async (e) => {
            e.preventDefault();
            if (!promoRef.current) return;
            // validate env keys are present and not placeholders
            if (!serviceID || serviceID.includes('your_') || !promoTemplate || promoTemplate === '' || promoTemplate.includes('your_') || !publicKey || publicKey.includes('your_')) {
              alert('EmailJS configuration is missing or invalid. Set VITE_EMAILJS_PROMO_TEMPLATE_ID (or VITE_EMAILJS_TEMPLATE_ID) and restart the dev server.');
              console.error('Invalid EmailJS env values', { serviceID, promoTemplate, publicKey });
              return;
            }

            try {
              setLoading(true);
              const res = await emailjs.sendForm(serviceID, promoTemplate, promoRef.current, publicKey);
              console.log('EmailJS send success', res);
              alert('Offer registered – Check your email!');
              setIsVisible(false);
            } catch (err) {
              console.error('Email error:', err);
              try {
                // @ts-ignore
                if (err && err.status) console.error('status:', err.status, 'text:', err.text || err.message);
              } catch (ex) {
                // ignore
              }
              alert('Failed to send request. Check console for details and verify EmailJS keys.');
            } finally {
              setLoading(false);
            }
          }}
        >
          <div className="space-y-2">
            <input name="studentId" type="text" placeholder="Student ID" className="w-full text-sm px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-black bg-gray-50" required />
            <input name="email" type="email" placeholder="Email Address" className="w-full text-sm px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-black bg-gray-50" required />
            <input name="phone" type="tel" placeholder="Contact Number" className="w-full text-sm px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-black bg-gray-50" required />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-xl shadow-lg transition-transform active:scale-95 text-sm disabled:opacity-50"
          >
            {loading ? 'Processing...' : 'Claim ₹2,000 Discount'}
          </button>
        </form>
        <p className="text-[9px] text-center text-gray-400 pb-3 italic">*Offer valid until seats are filled</p>
      </div>
    </div>
  );
};

// --- Main Page Home Component ---
export default function PageHome() {
  return (
    <div className="relative min-h-screen scroll-smooth">
      {/* Floating Promo */}
      <PGRankPromo />

      {/* Page Content */}
      <div id="home">
        <PGDashboard />
      </div>

      <div id="about">
        <AboutUs />
      </div>

      <div id="blog">
        <BlogPage />
      </div>

      <div id="contact">
        <ContactUs />
      </div>
      <Foother />
    </div>
  );
}
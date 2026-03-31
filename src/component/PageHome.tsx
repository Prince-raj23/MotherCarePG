import  { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

// --- Section Imports ---
import AboutUs from "./About";
import BlogPage from "./blog";
import ContactUs from "./CtontactPage";
import PGDashboard from "./Home";

import RulesPanel from "./RulesPanel";
import Foother from './Foother';


const PGRankPromo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [loading, setLoading] = useState(false);
  const promoRef = useRef<HTMLFormElement>(null);

  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "your_service_id";
  const promoTemplate = import.meta.env.VITE_EMAILJS_PROMO_TEMPLATE_ID || import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "your_public_key";

  useEffect(() => {
    if (publicKey && !publicKey.includes('your_')) {
      try { emailjs.init(publicKey); } catch (err) { console.error(err); }
    }
  }, [publicKey]);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1500);
    const handleScroll = () => {
      setIsMinimized(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isVisible) return null;

  // --- VIEW 1: MINIMIZED (Floating Bike Icon) ---
  if (isMinimized) {
    return (
      <div className="fixed bottom-6 right-6 z-[1000] flex flex-col items-end gap-2">
        <button 
          onClick={() => setIsVisible(false)}
          className="bg-red-500 text-white rounded-full w-6 h-6 text-xs flex items-center justify-center shadow-lg hover:bg-red-600 transition-colors"
        >✕</button>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setIsMinimized(false);
          }}
          className="bg-orange-500 text-white p-4 rounded-full shadow-2xl animate-bounce hover:scale-110 transition-transform flex flex-col items-center justify-center border-4 border-white"
        >
          <span className="text-[18px]">🏍️</span>
          <span className="text-[9px] font-bold">RIDE FREE </span>
        </button>
      </div>
    );
  }

  // --- VIEW 2: FULL FORM ---
  return (
    <div className="fixed bottom-6 right-6 z-[999] w-80 animate-in fade-in slide-in-from-bottom-5 duration-500">
      <div className="bg-white rounded-2xl shadow-2xl border border-orange-100 overflow-hidden relative">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-3 text-gray-400 hover:text-gray-700 text-xl font-bold z-10"
        >&times;</button>

        {/* Image Header */}
        <div className="relative h-32 w-full bg-gray-200">
          <img 
            src="/path-to-your-bike-image.jpg" // REPLACE WITH YOUR IMAGE URL
            alt="Student on Bike"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-3">
            <h3 className="text-white font-bold text-sm">More Than Just a Room!</h3>
          </div>
        </div>

        <div className="p-4 bg-orange-50">
          <p className="text-xs text-orange-900 leading-relaxed font-medium">
            <strong>Running late for college?</strong> Can’t find an auto? Don't worry — we provide <strong>bikes and scooties</strong> for students to reach college or markets easily!
          </p>
        </div>

        <form
          ref={promoRef}
          className="p-5 space-y-3"
          onSubmit={async (e) => {
            e.preventDefault();
            if (!promoRef.current || !serviceID || !publicKey) return;
            try {
              setLoading(true);
              await emailjs.sendForm(serviceID, promoTemplate, promoRef.current, publicKey);
              alert('Request Sent! We will contact you regarding the PG & Bike facilities.');
              setIsVisible(false);
            } catch (err) {
              alert('Submission failed. Please check your connection.');
            } finally {
              setLoading(false);
            }
          }}
        >
          <div className="space-y-2">
            <input name="user_name" type="text" placeholder="Your Name" className="w-full text-sm px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none bg-gray-50 text-black" required />
            <input name="user_phone" type="tel" placeholder="Phone Number" className="w-full text-sm px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none bg-gray-50 text-black" required />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-2.5 rounded-xl shadow-lg transition-transform active:scale-95 text-sm disabled:opacity-50"
          >
            {loading ? 'Sending...' : 'Register for Facility'}
          </button>
        </form>
        <p className="text-[9px] text-center text-gray-400 pb-3 italic">Our PG offers facilities others don't!</p>
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

      <div id="rules">
        <RulesPanel />
      </div>

      <div id="contact">
        <ContactUs />
      </div>
      <Foother />
    </div>
  );
}
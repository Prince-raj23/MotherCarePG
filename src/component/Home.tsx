import React, { useState, useEffect } from 'react';
import { Building2, Menu, X, Globe, UserCircle } from 'lucide-react';

const IMAGES = [
  "https://images.pexels.com/photos/4907226/pexels-photo-4907226.jpeg",
  "https://images.pexels.com/photos/4907209/pexels-photo-4907209.jpeg",
  "https://images.pexels.com/photos/4907189/pexels-photo-4907189.jpeg"
];

const PGDashboard: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % IMAGES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // smooth scroll helper
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 pt-20">
      {/* WIX-STYLE NAV BAR */}
      <nav className="bg-white border-b border-gray-100 fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo Section */}
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2 cursor-pointer">
                <Building2 className="w-8 h-8 text-indigo-600" />
                <span className="text-2xl font-bold tracking-tight text-black">Mothers Care PG</span>
              </div>

              {/* Desktop Menu Items */}
              <div className="hidden md:flex items-center gap-6 ml-4">
                <button onClick={() => scrollTo('home')} className="text-[15px] font-medium text-gray-600 hover:text-indigo-600 transition-colors">Home</button>
                <button onClick={() => scrollTo('about')} className="text-[15px] font-medium text-gray-600 hover:text-indigo-600 transition-colors">About Us</button>
                <button onClick={() => scrollTo('blog')} className="text-[15px] font-medium text-gray-600 hover:text-indigo-600 transition-colors">Blog</button>
                <button onClick={() => scrollTo('contact')} className="text-[15px] font-medium text-gray-600 hover:text-indigo-600 transition-colors">Contact Us</button>
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="hidden md:flex items-center gap-5">
              <div className="flex items-center gap-1 text-gray-600 cursor-pointer hover:text-black">
                <Globe className="w-5 h-5" />
              </div>
              <div className="flex items-center gap-1 text-gray-600 cursor-pointer hover:text-black font-medium text-[15px]">
                <UserCircle className="w-5 h-5" />
                <span>Log In</span>
              </div>
              <button className="bg-[#0058ff] hover:bg-[#0046cc] text-white px-7 py-2.5 rounded-full font-medium transition-all text-[15px]">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Sidebar */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-100 p-4 space-y-4 shadow-lg">
            <button onClick={() => { setIsMenuOpen(false); scrollTo('home'); }} className="block font-medium text-left w-full">Home</button>
            <button onClick={() => { setIsMenuOpen(false); scrollTo('about'); }} className="block font-medium text-left w-full">About Us</button>
            <button onClick={() => { setIsMenuOpen(false); scrollTo('blog'); }} className="block font-medium text-left w-full">Blog</button>
            <button onClick={() => { setIsMenuOpen(false); scrollTo('contact'); }} className="block font-medium text-left w-full">Contact Us</button>
            <hr />
            <button className="w-full bg-[#0058ff] text-white py-2 rounded-full">Get Started</button>
          </div>
        )}
      </nav>

      {/* Main Content with Vertical Scrolling Image */}
      <main className="relative">
        {/* Background Image Scroller (similar to the mountains in the image) */}
        <div className="relative h-[80vh] w-full overflow-hidden">
          <div 
            className="flex flex-col h-full transition-transform duration-[1200ms] ease-in-out"
            style={{ transform: `translateY(-${index * 100}%)` }}
          >
            {IMAGES.map((url, i) => (
              <div key={i} className="h-full w-full shrink-0 relative">
                <img src={url} alt="PG Interior" className="w-full h-full object-cover" />
                {/* Darker overlay to make text pop */}
                <div className="absolute inset-0 bg-black/30" />
              </div>
            ))}
          </div>

          
          

          {/* Scrolling Dots */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
            {IMAGES.map((_, i) => (
              <div key={i} className={`w-2.5 h-2.5 rounded-full transition-all ${index === i ? 'bg-white scale-125' : 'bg-white/50'}`} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};


export default PGDashboard;

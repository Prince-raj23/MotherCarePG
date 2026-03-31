import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, Menu, X, ShieldAlert, DollarSign } from 'lucide-react';

const IMAGES = [
  "https://images.pexels.com/photos/4907226/pexels-photo-4907226.jpeg",
  "https://images.pexels.com/photos/4907209/pexels-photo-4907209.jpeg",
  "https://images.pexels.com/photos/4907189/pexels-photo-4907189.jpeg"
];

const PGDashboard = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % IMAGES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Navigation helper
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* GLASSMORPHIC NAV BAR */}
      <nav className="glass-nav fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">

            {/* Logo Section */}
            <div className="flex items-center gap-8">
              <div
                onClick={() => scrollTo('home')}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <div className="bg-primary-600 p-2 rounded-xl group-hover:rotate-6 transition-transform">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-extrabold tracking-tight text-slate-900">Mothers Care <span className="text-primary-600">PG</span></span>
              </div>

              {/* Desktop Menu Items */}
              <div className="hidden md:flex items-center gap-8 ml-4">
                {[
                  { label: 'Home', id: 'home' },
                  { label: 'About Us', id: 'about' },
                  { label: 'Pricing', path: '/pricing' },
                  { label: 'Blog', id: 'blog' },
                  { label: 'Rules', path: '/rules' },
                  { label: 'Contact', id: 'contact' }
                ].map((item) => (
                  <button
                    key={item.label}
                    onClick={() => item.path ? navigate(item.path) : scrollTo(item.id!)}
                    className="text-sm font-semibold text-slate-600 hover:text-primary-600 transition-colors relative group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all group-hover:w-full"></span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={() => navigate('/rooms')}
                className="btn-primary"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-slate-600 hover:text-primary-600 transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[500px] border-b border-slate-100 bg-white shadow-xl' : 'max-h-0'}`}>
          <div className="p-6 space-y-4">
            {[
              { label: 'Home', id: 'home' },
              { label: 'About Us', id: 'about' },
              { label: 'Pricing', path: '/pricing' },
              { label: 'Blog', id: 'blog' },
              { label: 'Rules', path: '/rules' },
              { label: 'Contact', id: 'contact' }
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => { setIsMenuOpen(false); item.path ? navigate(item.path) : scrollTo(item.id!); }}
                className="block text-lg font-semibold text-slate-700 hover:text-primary-600 w-full text-left"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-slate-100">
              <button
                onClick={() => { setIsMenuOpen(false); navigate('/rooms'); }}
                className="w-full btn-primary text-center block"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content with Vertical Scrolling Image */}
      <main className="relative">
        <div className="relative h-[85vh] w-full overflow-hidden">
          <div
            className="flex flex-col h-full transition-transform duration-[1200ms] cubic-bezier(0.4, 0, 0.2, 1)"
            style={{ transform: `translateY(-${index * 100}%)` }}
          >
            {IMAGES.map((url, i) => (
              <div key={i} className="h-full w-full shrink-0 relative">
                <img src={url} alt="PG Interior" className="w-full h-full object-cover" />
                {/* Modern Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-slate-900/40 to-transparent" />

                {/* Hero Text Content */}
                <div className="absolute inset-0 flex items-center px-6 md:px-20 lg:px-32">
                  <div className="max-w-2xl text-white">
                    <span className="inline-block px-4 py-1 rounded-full bg-primary-600/30 backdrop-blur-sm border border-primary-400/30 text-primary-100 text-xs font-bold tracking-widest uppercase mb-6 animate-fade-in">
                      Premium PG Accommodations
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 animate-slide-up">
                      Elevate Your <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-200">Student Life</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-100 mb-10 max-w-lg leading-relaxed animate-fade-in delay-200">
                      Experience more than just a room. Discover professional laundry, gourmet meals, and a vibrant community.
                    </p>
                    <div className="flex flex-wrap gap-4 animate-fade-in delay-300">
                      <button onClick={() => navigate('/rooms')} className="btn-primary px-10 py-4 text-base">
                        Reserve Your Room
                      </button>
                      <button onClick={() => scrollTo('about')} className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 px-10 py-4 rounded-full font-semibold transition-all">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scrolling Dots */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
            {IMAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`transition-all duration-300 ${index === i ? 'w-10 h-2.5 bg-primary-500 rounded-full' : 'w-2.5 h-2.5 bg-white/50 rounded-full hover:bg-white'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};


export default PGDashboard;




// --- Registration Pop-up Component ---
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-12 pb-8 px-6 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Section */}
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Mother Care PG</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            A premium "home away from home" experience. We prioritize safety, 
            hygienic food, and a comfortable living environment for students and professionals.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-slate-400 text-sm">
            <li className="hover:text-blue-400 cursor-pointer transition-colors">Room Availability</li>
            <li className="hover:text-blue-400 cursor-pointer transition-colors">Mess Menu</li>
            <li className="hover:text-blue-400 cursor-pointer transition-colors">Rules & Regulations</li>
            <li className="hover:text-blue-400 cursor-pointer transition-colors">Book a Visit</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-white">Contact Us</h3>
          <ul className="space-y-3 text-slate-400 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-blue-400">📍</span> 
              Near Parul University, Vadodara, Gujarat
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-400">📞</span> 
              +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-400">✉️</span> 
              support@mothercarepg.com
            </li>
          </ul>
        </div>

        {/* Social & Support */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-white">Follow Us</h3>
          <div className="flex gap-4 mb-4">
            <div className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all cursor-pointer">
              <span className="text-xs font-bold">FB</span>
            </div>
            <div className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-all cursor-pointer">
              <span className="text-xs font-bold">IG</span>
            </div>
            <div className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-400 transition-all cursor-pointer">
              <span className="text-xs font-bold">TW</span>
            </div>
          </div>
          <p className="text-[10px] text-slate-500 uppercase font-bold tracking-[2px]">
            Security Managed 24/7
          </p>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-slate-800 mt-10 pt-6 text-center text-slate-500 text-xs">
        <p>&copy; {new Date().getFullYear()} Mother Care PG. All rights reserved.</p>
        <p className="mt-1">Built for comfort and convenience.</p>
      </div>
    </footer>
  );
};

export default Footer;
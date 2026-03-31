import { useNavigate } from 'react-router-dom';

const PricingDashboard = () => {
  const navigate = useNavigate();

  const plans = [
    {
      title: "Essential Stay",
      duration: "1 Month",
      currentPrice: "8,000",
      originalPrice: null,
      savings: null,
      features: ["Standard Shared Room", "Basic Mess (3 Meals)", "WiFi Access"],
      isFeatured: false,
      tag: "Flexible"
    },
    {
      title: "Student Semester",
      duration: "6 Months",
      currentPrice: "46,500",
      originalPrice: "48,000",
      savings: "1,500",
      features: ["Priority Selection", "Full Mess + Specials", "Laundry Service"],
      isFeatured: false,
      tag: "Popular"
    },
    {
      title: "Royal Property",
      duration: "Yearly",
      currentPrice: "90,000",
      originalPrice: "96,000",
      savings: "6,000",
      features: ["Premium AC Unit", "VIP Buffet Access", "Zero Maintenance"],
      isFeatured: true,
      tag: "Best Value"
    }
  ];

  return (
    <section className="bg-slate-50 min-h-screen w-full flex flex-col justify-center py-24 px-4 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-bold tracking-widest uppercase mb-4">
              Transparent Pricing
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              Mother Care <span className="text-primary-600">Residence.</span>
            </h2>
            <p className="text-slate-500 font-medium text-lg mt-4 leading-relaxed">
              Premium student living with transparent property rates. No hidden charges, just pure comfort.
            </p>
          </div>

          {/* Floating Deposit Badge */}
          <div className="bg-white shadow-2xl shadow-primary-900/10 border border-primary-100 p-6 rounded-[2rem] flex items-center gap-4 animate-bounce-slow max-w-fit">
            <div className="h-14 w-14 bg-primary-600 rounded-2xl flex items-center justify-center text-white text-2xl font-black shadow-lg shadow-primary-600/30">₹</div>
            <div>
              <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest mb-1">Refundable Deposit</p>
              <p className="text-2xl font-black text-slate-900 leading-none">₹5,000</p>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative group rounded-[2.5rem] p-px transition-all duration-500 ${plan.isFeatured
                  ? 'bg-gradient-to-br from-primary-500 to-indigo-600 shadow-2xl scale-100 md:scale-105 z-10'
                  : 'bg-white shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-primary-200'
                }`}
            >
              <div className="bg-white rounded-[2.4rem] h-full p-10 flex flex-col justify-between">

                <div>
                  {/* Plan Title & Tag */}
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <h3 className="text-primary-600 text-[10px] font-black uppercase tracking-widest mb-2">{plan.title}</h3>
                      <p className="text-2xl font-black text-slate-900">{plan.duration}</p>
                    </div>
                    <span className={`text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-wider ${plan.isFeatured ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30' : 'bg-slate-100 text-slate-500'
                      }`}>
                      {plan.tag}
                    </span>
                  </div>

                  {/* Price Display */}
                  <div className="mb-10">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-black text-slate-900 leading-none tracking-tighter">₹{plan.currentPrice}</span>
                      {plan.originalPrice && (
                        <span className="text-xl text-slate-300 line-through font-bold">₹{plan.originalPrice}</span>
                      )}
                    </div>
                    {plan.savings && (
                      <div className="inline-block bg-green-50 text-green-700 text-[11px] font-black mt-3 px-3 py-1 rounded-full uppercase tracking-tight border border-green-100">
                        Save ₹{plan.savings} Instantly
                      </div>
                    )}
                  </div>

                  {/* Unique Features List */}
                  <div className="space-y-4 mb-10">
                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Included Facilities</p>
                    <ul className="space-y-4">
                      {plan.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-slate-600 font-semibold text-sm">
                          <div className={`h-2 w-2 rounded-full ${plan.isFeatured ? 'bg-primary-600' : 'bg-slate-300'} shrink-0`}></div>
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => navigate('/contact')}
                  className={`w-full py-5 rounded-2xl font-black text-[11px] uppercase tracking-[2px] transition-all active:scale-95 group-hover:scale-[1.02] ${plan.isFeatured
                      ? 'bg-primary-600 text-white shadow-xl shadow-primary-600/40 hover:bg-primary-700'
                      : 'bg-slate-900 text-white shadow-xl shadow-slate-900/20 hover:bg-black'
                    }`}
                >
                  Book {plan.duration} Stay
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-20 text-center">
          <p className="text-slate-400 text-[11px] font-black uppercase tracking-[6px] mb-4">
            — Official Property Rates 2026 —
          </p>
          <div className="inline-flex items-center gap-2 text-primary-600 font-bold text-sm bg-primary-50 px-6 py-2 rounded-full border border-primary-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            Available for Booking
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default PricingDashboard;
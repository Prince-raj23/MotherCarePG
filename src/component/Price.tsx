const PricingDashboard = () => {
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
    <section className="bg-slate-50 min-h-screen w-full flex flex-col justify-center py-6 px-4 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Header Section - Compact */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-none">
              Mother Care <span className="text-blue-600">Residence.</span>
            </h2>
            <p className="text-slate-500 font-medium text-sm mt-2">
              Premium student living with transparent property rates.
            </p>
          </div>

          {/* Floating Deposit Badge - Smaller for Screen Fit */}
          <div className="bg-white shadow-lg border border-slate-100 p-3 rounded-2xl flex items-center gap-3 animate-bounce-slow max-w-fit">
            <div className="h-10 w-10 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 text-lg font-bold">₹</div>
            <div>
              <p className="text-[8px] uppercase font-black text-slate-400 tracking-widest">Refundable Deposit</p>
              <p className="text-lg font-black text-slate-800 leading-none">₹5,000</p>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid - Responsive & Screen Fitting */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`relative group rounded-[2rem] p-0.5 transition-all duration-500 ${
                plan.isFeatured 
                ? 'bg-gradient-to-br from-blue-500 to-indigo-600 shadow-2xl scale-100 md:scale-105 z-10' 
                : 'bg-white shadow-md border border-slate-100'
              }`}
            >
              <div className="bg-white rounded-[1.9rem] h-full p-6 md:p-8 flex flex-col justify-between">
                
                <div>
                  {/* Plan Title & Tag */}
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">{plan.title}</h3>
                      <p className="text-xl md:text-2xl font-bold text-slate-800">{plan.duration}</p>
                    </div>
                    <span className={`text-[9px] font-black px-2 py-1 rounded-md uppercase tracking-tighter ${
                      plan.isFeatured ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'
                    }`}>
                      {plan.tag}
                    </span>
                  </div>

                  {/* Price Display */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl md:text-5xl font-black text-slate-900 leading-none tracking-tighter">₹{plan.currentPrice}</span>
                      {plan.originalPrice && (
                        <span className="text-lg text-slate-300 line-through font-bold">₹{plan.originalPrice}</span>
                      )}
                    </div>
                    {plan.savings && (
                      <p className="text-green-600 text-[10px] font-bold mt-1 uppercase tracking-tight">Save ₹{plan.savings} Instantly</p>
                    )}
                  </div>

                  {/* Unique Features List */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-slate-600 font-medium text-xs">
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0"></div>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <button className={`w-full py-3.5 rounded-xl font-black text-xs uppercase tracking-[2px] transition-all active:scale-95 ${
                  plan.isFeatured 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 hover:bg-blue-700' 
                  : 'bg-slate-900 text-white hover:bg-black'
                }`}>
                  Secure {plan.duration}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note - Compact */}
        <p className="text-center mt-8 text-slate-400 text-[10px] font-bold uppercase tracking-[4px]">
          — Official Property Rates 2026 —
        </p>
      </div>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default PricingDashboard;
import { useNavigate } from 'react-router-dom';
import { Check, DollarSign, TrendingUp } from 'lucide-react';

const PricingPanel = () => {
  const navigate = useNavigate();

  const tiers = [
    {
      name: "Essential Stay",
      duration: "1 Month",
      price: "₹8,000",
      description: "Perfect for short-term stays",
      features: ["Shared Room", "Basic Meals", "WiFi Access"],
      popular: false,
      color: "blue"
    },
    {
      name: "Student Semester",
      duration: "6 Months",
      price: "₹46,500",
      description: "Most popular choice",
      features: ["Priority Selection", "Full Meals", "Laundry Service"],
      popular: true,
      color: "indigo"
    },
    {
      name: "Royal Property",
      duration: "Yearly",
      price: "₹90,000",
      description: "Premium all-in package",
      features: ["Premium AC Unit", "VIP Buffet", "Zero Maintenance"],
      popular: false,
      color: "purple"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
            <DollarSign size={18} />
            <span className="font-bold text-sm uppercase tracking-widest">Transparent Pricing</span>
          </div>
          <h2 className="text-5xl font-black text-slate-900 mb-4 tracking-tighter">
            Choose Your <span className="text-blue-600">Perfect Plan</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Flexible pricing options designed for students at every stage of their journey.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {tiers.map((tier, idx) => (
            <div 
              key={idx}
              className={`relative rounded-2xl transition-all duration-300 overflow-hidden group ${
                tier.popular 
                  ? 'md:scale-105 shadow-2xl' 
                  : 'shadow-lg hover:shadow-xl hover:scale-105'
              }`}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${
                tier.color === 'blue' ? 'from-blue-500 to-blue-600' :
                tier.color === 'indigo' ? 'from-indigo-500 to-indigo-600' :
                'from-purple-500 to-purple-600'
              } opacity-0 group-hover:opacity-5 transition-opacity`} />

              <div className="relative bg-white p-8 rounded-2xl h-full flex flex-col">
                {/* Popular Badge */}
                {tier.popular && (
                  <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full font-black text-white text-xs uppercase tracking-widest ${
                    tier.color === 'indigo' ? 'bg-indigo-600' : 'bg-blue-600'
                  }`}>
                    ⭐ Most Popular
                  </div>
                )}

                {/* Plan Name */}
                <h3 className="text-2xl font-black text-slate-900 mb-2">{tier.name}</h3>
                <p className="text-sm text-slate-500 font-medium mb-4">{tier.duration}</p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black text-slate-900">{tier.price}</span>
                    <span className="text-slate-500">per stay</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-2">{tier.description}</p>
                </div>

                {/* Deposit Info */}
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-6">
                  <p className="text-xs font-bold text-amber-900 uppercase">Refundable Deposit</p>
                  <p className="text-lg font-black text-amber-700">₹5,000</p>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Check size={18} className={tier.color === 'blue' ? 'text-blue-500' : tier.color === 'indigo' ? 'text-indigo-500' : 'text-purple-500'} />
                      <span className="text-sm text-slate-600 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => navigate('/contact')}
                  className={`w-full py-3 rounded-lg font-black text-sm uppercase tracking-wider transition-all active:scale-95 hover:scale-105 ${
                    tier.popular
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg'
                      : 'bg-slate-900 text-white hover:bg-black'
                  }`}
                >
                  Secure Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-white rounded-2xl p-8 border-2 border-blue-100">
          <div className="flex items-center justify-center gap-2 mb-4">
            <TrendingUp className="text-blue-600" size={24} />
            <h3 className="text-2xl font-black text-slate-900">View Full Pricing Dashboard</h3>
          </div>
          <p className="text-slate-600 mb-6">Explore room availability, detailed features, and special offers.</p>
          <button
            onClick={() => navigate('/pricing')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-black py-3 px-8 rounded-lg text-sm uppercase tracking-wider transition-all active:scale-95"
          >
            Open Dashboard →
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingPanel;

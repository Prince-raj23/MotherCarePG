import { useNavigate } from 'react-router-dom';
import { ShieldAlert, AlertCircle, Coffee, Users, Zap } from 'lucide-react';

const RulesPanel = () => {
  const navigate = useNavigate();

  const rules = [
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Mess & Food",
      description: "Daily meals with separate veg & non-veg options",
      color: "orange"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Guest Policy",
      description: "Friends allowed with noise level restrictions",
      color: "blue"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Vehicle Care",
      description: "Bikes shared & maintained with full responsibility",
      color: "purple"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 to-slate-50 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full mb-6">
            <ShieldAlert size={18} />
            <span className="font-bold text-sm uppercase tracking-widest">Important</span>
          </div>
          <h2 className="text-5xl font-black text-slate-900 mb-4 tracking-tighter">
            Property <span className="text-red-600">Rules & Regulations</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Maintain a safe, comfortable community for everyone through our clear guidelines.
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {rules.map((rule, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group border-l-4 ${
                rule.color === 'orange' ? 'border-orange-500' :
                rule.color === 'blue' ? 'border-blue-500' :
                'border-purple-500'
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                rule.color === 'orange' ? 'bg-orange-100 text-orange-600' :
                rule.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                'bg-purple-100 text-purple-600'
              } group-hover:scale-110 transition-transform`}>
                {rule.icon}
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">{rule.title}</h3>
              <p className="text-slate-600 text-sm font-medium">{rule.description}</p>
            </div>
          ))}
        </div>

        {/* Detail Section */}
        <div className="bg-white rounded-2xl p-10 mb-10 border-2 border-red-100 shadow-xl">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-lg p-3 flex-shrink-0">
              <AlertCircle className="text-red-600" size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">Zero Tolerance Policy</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                Violation of any property rule may lead to forfeiture of your ₹5,000 security deposit. We maintain strict discipline to ensure a premium living experience for all residents.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-black text-slate-900 mb-4 flex items-center gap-2">
                <span className="text-red-600">✓</span> Allowed
              </h4>
              <ul className="space-y-2 text-slate-700">
                <li className="font-medium">• Visitors during designated hours</li>
                <li className="font-medium">• Personal vehicle usage for travel</li>
                <li className="font-medium">• Laundry service twice weekly</li>
                <li className="font-medium">• 24/7 caretaker assistance</li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-slate-900 mb-4 flex items-center gap-2">
                <span className="text-red-600">✗</span> Strictly Prohibited
              </h4>
              <ul className="space-y-2 text-red-700">
                <li className="font-medium">• Illegal substances</li>
                <li className="font-medium">• Property damage</li>
                <li className="font-medium">• Loud noise after 10 PM</li>
                <li className="font-medium">• Vehicle sharing with outsiders</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-white rounded-2xl p-8 border-2 border-red-100">
          <h3 className="text-2xl font-black text-slate-900 mb-4">Read Complete Rules & Regulations</h3>
          <p className="text-slate-600 mb-6">Access detailed policies for all facility usage guidelines.</p>
          <button
            onClick={() => navigate('/rules')}
            className="bg-red-600 hover:bg-red-700 text-white font-black py-3 px-8 rounded-lg text-sm uppercase tracking-wider transition-all active:scale-95"
          >
            View Full Compliance Guide →
          </button>
        </div>
      </div>
    </section>
  );
};

export default RulesPanel;

import { useState } from 'react';
import { Coffee, Sun, Moon, Sparkles, UtensilsCrossed } from 'lucide-react';
import { motion } from 'framer-motion';

const MessMenu = () => {
  const [activeTab, setActiveTab] = useState('Breakfast');

  const menuData = {
    Breakfast: {
      time: "7:30 AM - 9:30 AM",
      icon: <Coffee className="text-amber-500" />,
      items: ["Sprouts & Boiled Eggs", "Aloo Paratha / Poha", "Banana & Milk", "Tea / Coffee"],
      highlight: "High Protein Start"
    },
    Lunch: {
      time: "12:30 PM - 2:30 PM",
      icon: <Sun className="text-blue-500" />,
      items: ["Steamed Rice & Roti", "Dal Tadka", "Seasonal Veg / Paneer", "Fresh Curd & Salad"],
      highlight: "Balanced Carbs"
    },
    Dinner: {
      time: "8:00 PM - 10:00 PM",
      icon: <Moon className="text-indigo-500" />,
      items: ["Mixed Veg Khichdi", "Roti & Sabzi", "Special Chicken (Wed/Sun)", "Gulab Jamun (Sunday)"],
      highlight: "Light & Nutritious"
    }
  };

  return (
    <section className="py-16 bg-white px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
            <Sparkles size={14} />
            Hygienic Home Food
          </div>
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter">Daily <span className="text-blue-600">Nutrition.</span></h2>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center p-1.5 bg-slate-100 rounded-[2rem] mb-8 max-w-md mx-auto shadow-inner">
          {Object.keys(menuData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 rounded-[1.8rem] text-xs font-black uppercase tracking-widest transition-all ${
                activeTab === tab 
                ? 'bg-white text-blue-600 shadow-lg' 
                : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Menu Card */}
        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-slate-900 rounded-[3rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl"
        >
          {/* Background Decor */}
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <UtensilsCrossed size={120} />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10">
                {menuData[activeTab as keyof typeof menuData].icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold">{activeTab}</h3>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">
                  {menuData[activeTab as keyof typeof menuData].time}
                </p>
              </div>
            </div>
            <span className="bg-blue-600/20 text-blue-400 border border-blue-500/30 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
              {menuData[activeTab as keyof typeof menuData].highlight}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {menuData[activeTab as keyof typeof menuData].items.map((item, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors group"
              >
                <div className="h-2 w-2 rounded-full bg-blue-500 group-hover:scale-125 transition-transform" />
                <span className="text-slate-200 font-semibold tracking-tight">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-center mt-10 text-[10px] text-slate-500 font-bold uppercase tracking-[4px]">
            — Separate Veg & Non-Veg Kitchens —
          </p>
        </motion.div>

        {/* Special Property Note */}
        <div className="mt-8 text-center text-slate-400 text-xs font-medium">
          *Menu rotated weekly to ensure variety and hygiene.
        </div>
      </div>
    </section>
  );
};

export default MessMenu;
import React from 'react';
import { BookOpen, Dumbbell, Clock, Flame, Apple, Trophy } from 'lucide-react';

const FitnessDashboard = () => {
  const strategies = [
    {
      title: "The 6:00 AM Club",
      subtitle: "Training Strategy",
      content: "Hit your biceps/triceps before lectures start. This ensures Parul University assignments don't interfere with your 78kg weight goal.",
      icon: <Clock className="text-orange-400" />,
      color: "border-orange-500/20 bg-orange-500/5",
    },
    {
      title: "Macro-Nutrient Bulk",
      subtitle: "Diet Management",
      content: "Keep bananas and oats in your hostel. Ensure roti, rice, and dal at the mess are supplemented with eggs and milk for protein.",
      icon: <Apple className="text-green-400" />,
      color: "border-green-500/20 bg-green-500/5",
    },
    {
      title: "Campus Movement",
      subtitle: "NEAT Activity",
      content: "Walk between departments at Parul. At 6'1\", your body burns calories fast; use campus walking as active recovery, not cardio.",
      icon: <Flame className="text-blue-400" />,
      color: "border-blue-500/20 bg-blue-500/5",
    }
  ];

  return (
    <section className="bg-[#0f172a] min-h-screen flex flex-col justify-center py-10 px-6 font-sans">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Header - Modern & Clean */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none mb-4">
              Balance <span className="text-blue-500">College</span> <br /> 
              & Bodybuilding.
            </h2>
            <p className="text-slate-400 font-medium">
              Optimized for B.Tech CS Students. Building 78kg+ of pure mass.
            </p>
          </div>
          
          {/* Status Badge */}
          <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700 p-4 rounded-2xl flex items-center gap-4">
            <div className="p-3 bg-blue-500/20 rounded-xl">
              <Dumbbell className="text-blue-500" size={24} />
            </div>
            <div>
              <p className="text-[10px] uppercase font-black text-slate-500 tracking-widest leading-none mb-1">Current Goal</p>
              <p className="text-xl font-black text-white">Muscle Mass <span className="text-xs text-blue-500">+ Strength</span></p>
            </div>
          </div>
        </div>

        {/* Dashboard Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {strategies.map((item, i) => (
            <div 
              key={i} 
              className={`p-8 rounded-[2.5rem] border transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between h-full ${item.color}`}
            >
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div className="p-4 bg-slate-800 rounded-2xl shadow-inner">
                    {item.icon}
                  </div>
                  <Trophy size={16} className="text-slate-700" />
                </div>
                
                <div className="mb-6">
                  <h3 className="text-[10px] font-black uppercase tracking-[3px] text-slate-500 mb-1">
                    {item.subtitle}
                  </h3>
                  <p className="text-2xl font-bold text-white tracking-tight leading-none">
                    {item.title}
                  </p>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed font-medium">
                  {item.content}
                </p>
              </div>

              <div className="mt-10 pt-6 border-t border-slate-700/30 flex items-center justify-between text-[10px] font-black text-blue-500 uppercase tracking-widest">
                <span>Phase 01</span>
                <BookOpen size={14} />
              </div>
            </div>
          ))}
        </div>

        {/* Performance Footer */}
        <div className="mt-12 text-center">
           <p className="text-slate-600 text-[10px] font-bold uppercase tracking-[6px] animate-pulse">
             Consistency Over Intensity
           </p>
        </div>
      </div>
    </section>
  );
};

export default FitnessDashboard;
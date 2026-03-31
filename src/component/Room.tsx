import { BedDouble, Users, Timer, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const RoomAvailability = () => {
  const navigate = useNavigate();
  const units = [
    {
      plan: "Standard Residence",
      term: "1 Month / 6 Months",
      sharing: "3 Sharing Unit",
      total: 15,
      available: 4,
      price: "8,000",
      status: "Filling Fast",
      color: "blue"
    },
    {
      plan: "Premium Property",
      term: "Yearly Contract",
      sharing: "2 Sharing Unit",
      total: 8,
      available: 2,
      price: "90,000",
      status: "Limited Units",
      color: "indigo"
    }
  ];

  return (
    <section className="py-16 bg-[#f8fafc] px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div>
            <div className="flex items-center gap-2 text-blue-600 font-bold text-[10px] uppercase tracking-[3px] mb-2">
              <Timer size={14} className="animate-pulse" />
              Live Inventory Tracker
            </div>
            <h2 className="text-4xl font-black text-slate-900 tracking-tighter">
              Unit <span className="text-blue-600">Availability.</span>
            </h2>
          </div>
          
          <div className="hidden md:flex items-center gap-3 bg-white p-3 rounded-2xl border border-slate-100 shadow-sm">
            <ShieldCheck className="text-green-500" size={20} />
            <p className="text-[10px] font-bold text-slate-500 uppercase leading-none">
              Deposit Locked <br /> <span className="text-slate-900 text-sm italic">₹5,000 Fixed</span>
            </p>
          </div>
        </div>

        {/* Units Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {units.map((unit, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2.5rem] border-2 border-slate-50 p-8 shadow-sm hover:shadow-xl transition-all relative overflow-hidden group"
            >
              {/* Status Ribbon */}
              <div className={`absolute top-6 right-6 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${
                unit.color === 'blue' ? 'bg-blue-50 text-blue-600' : 'bg-indigo-50 text-indigo-600'
              }`}>
                {unit.status}
              </div>

              <div className="mb-8">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[2px] mb-1">{unit.term}</p>
                <h3 className="text-2xl font-black text-slate-900 mb-4">{unit.plan}</h3>
                
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-100">
                    <Users size={16} className="text-slate-500" />
                    <span className="text-xs font-bold text-slate-700">{unit.sharing}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-100">
                    <BedDouble size={16} className="text-slate-500" />
                    <span className="text-xs font-bold text-slate-700">Fully Furnished</span>
                  </div>
                </div>
              </div>

              {/* Occupancy Progress */}
              <div className="mb-10">
                <div className="flex justify-between items-end mb-2">
                  <p className="text-[10px] font-black text-slate-400 uppercase">Occupancy</p>
                  <p className="text-xs font-bold text-slate-900">{unit.available} Units Left</p>
                </div>
                <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden flex gap-1 p-0.5">
                   {[...Array(unit.total)].map((_, idx) => (
                     <div 
                      key={idx}
                      className={`h-full flex-1 rounded-full transition-all duration-1000 ${
                        idx < (unit.total - unit.available) ? 'bg-slate-200' : (unit.color === 'blue' ? 'bg-blue-500' : 'bg-indigo-600')
                      }`}
                     />
                   ))}
                </div>
              </div>

              {/* Footer CTA */}
              <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                <div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter leading-none">Price Starting</p>
                  <p className="text-2xl font-black text-slate-900 tracking-tighter">₹{unit.price}</p>
                </div>
                
                <button 
                  onClick={() => navigate('/contact')}
                  className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all active:scale-95 hover:scale-105 text-white shadow-lg ${
                    unit.color === 'blue' ? 'bg-blue-600 shadow-blue-100 hover:bg-blue-700' : 'bg-indigo-600 shadow-indigo-100 hover:bg-indigo-700'
                  }`}>
                  Select Unit <ArrowUpRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Guarantee */}
        <p className="text-center mt-12 text-slate-400 text-[9px] font-bold uppercase tracking-[5px]">
          Verified Mother Care PG Inventory
        </p>
      </div>
    </section>
  );
};

export default RoomAvailability;
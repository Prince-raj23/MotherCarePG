
import { ShieldAlert, Bike, Coffee, Volume2, Wrench, Fuel } from 'lucide-react';
import { motion } from 'framer-motion';

const PGPolicy = () => {
  const policies = [
    {
      title: "Mess & Tiffin Policy",
      icon: <Coffee className="text-orange-500" />,
      content: "Breakfast is served daily. On 2 Sundays per month, the mess remains closed. For college days, we provide Tiffins so you never miss a meal during your lunch break.",
      color: "bg-orange-50 border-orange-100"
    },
    {
      title: "Vehicle Allocation",
      icon: <Bike className="text-blue-500" />,
      content: "1 Bike is shared between 2 roommates. Bikes are strictly for personal use. Sharing with friends or other PG students is prohibited.",
      color: "bg-blue-50 border-blue-100"
    },
    {
      title: "Maintenance & Fuel",
      icon: <Fuel className="text-purple-500" />,
      content: "Initial maintenance is provided by PG. Post-handover, all maintenance costs and petrol charges must be paid by the students assigned to the bike.",
      color: "bg-purple-50 border-purple-100"
    },
    {
      title: "Vehicle Responsibility",
      icon: <Wrench className="text-red-500" />,
      content: "Full responsibility for the vehicle (theft, damage, or fines) lies with the assigned students. Ensure safe parking at all times.",
      color: "bg-red-50 border-red-100"
    },
    {
      title: "Guest & Noise Policy",
      icon: <Volume2 className="text-indigo-500" />,
      content: "Friends are allowed to visit, but noise levels must be kept low. Disturbing the society or other residents will result in a penalty.",
      color: "bg-indigo-50 border-indigo-100"
    },
    {
      title: "Strict Discipline",
      icon: <ShieldAlert className="text-slate-600" />,
      content: "Possession of illegal substances or damaging PG property is grounds for immediate eviction without refund of the security deposit.",
      color: "bg-slate-50 border-slate-100"
    }
  ];

  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-4">
            Residential <span className="text-blue-600">Compliance.</span>
          </h2>
          <p className="text-slate-500 font-medium max-w-2xl">
            To ensure a premium living environment at Mother Care PG, all residents are 
            required to adhere to the following property guidelines.
          </p>
        </div>

        {/* Policy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {policies.map((policy, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`p-8 rounded-[2.5rem] border-2 transition-all hover:shadow-xl flex flex-col ${policy.color}`}
            >
              <div className="mb-6 bg-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm">
                {policy.icon}
              </div>
              
              <h3 className="text-lg font-bold text-slate-900 mb-3 tracking-tight">
                {policy.title}
              </h3>
              
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                {policy.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Final Warning Footer */}
        <div className="mt-12 p-6 bg-slate-900 rounded-[2rem] text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <ShieldAlert size={80} />
          </div>
          <p className="text-[10px] font-black uppercase tracking-[5px] mb-2 opacity-60">Important Note</p>
          <p className="text-sm font-medium">
            Violation of any property rule may lead to the forfeiture of your <span className="text-blue-400 font-bold underline">₹5,000 Security Deposit</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PGPolicy;
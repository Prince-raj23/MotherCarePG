import type { FC, ReactNode } from 'react';
import { Clock, ShieldCheck, Droplets, Bike, Shirt, Sparkles, UtensilsCrossed } from 'lucide-react';

const AboutUs: FC = () => {
  return (
    <div className="bg-white min-h-screen font-sans text-slate-800 pt-20">
      {/* --- HERO SECTION --- */}
      <section className="relative py-24 px-6 bg-slate-50 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-primary-50 rounded-full blur-3xl opacity-50" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="inline-block px-4 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-bold tracking-widest uppercase mb-6">
            Premium Living Experience
          </span>
          <h1 className="text-4xl md:text-6xl font-black mt-4 mb-8 text-slate-900 tracking-tight">
            A New Standard of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">Student Living in India</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We don’t just provide a room; we provide a lifestyle. From home-style meals to 24/7 security, we’ve thought of everything so you can focus on your future.
          </p>
        </div>
      </section>

      {/* --- CORE FACILITIES GRID --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">World-Class Facilities</h2>
          <div className="w-20 h-1.5 bg-primary-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* 1. Meals Section */}
          <FacilityCard
            img="https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=600"
            icon={<UtensilsCrossed className="w-6 h-6 text-white" />}
            iconBg="bg-orange-500"
            title="3-Time Gourmet Meals"
            content={
              <div className="space-y-4 text-sm">
                <p>Enjoy fresh Veg & Non-Veg options daily. We maintain separate cooking zones for pure-veg preferences.</p>
                <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100">
                  <p className="font-bold text-orange-700 mb-2">Mess Timings:</p>
                  <div className="space-y-1 text-orange-900/80">
                    <p><span className="font-semibold text-orange-700">Veg:</span> 7:30 AM | 12:30 PM | 7:30 PM</p>
                    <p><span className="font-semibold text-orange-700">Non-Veg:</span> 8:00 AM | 1:15 PM | 8:15 PM</p>
                  </div>
                </div>
              </div>
            }
          />

          {/* 2. Laundry Section */}
          <FacilityCard
            img="https://images.pexels.com/photos/8774513/pexels-photo-8774513.jpeg"
            icon={<Shirt className="w-6 h-6 text-white" />}
            iconBg="bg-blue-500"
            title="Professional Laundry"
            content="Never worry about your whites again. Our in-house laundry team collects and delivers your clothes ironed and folded twice a week."
          />

          {/* 3. Cleaning Services */}
          <FacilityCard
            img="https://images.pexels.com/photos/9462636/pexels-photo-9462636.jpeg"
            icon={<Sparkles className="w-6 h-6 text-white" />}
            iconBg="bg-yellow-500"
            title="Deep Cleaning Staff"
            content="Dedicated room maids and specialized bathroom cleaners ensure 5-star hygiene levels daily. We take 'Clean' very seriously."
          />

          {/* 4. Water Quality */}
          <FacilityCard
            img="https://images.pexels.com/photos/8595127/pexels-photo-8595127.jpeg"
            icon={<Droplets className="w-6 h-6 text-white" />}
            iconBg="bg-cyan-500"
            title="24/7 Sweet Water"
            content="No more harsh salted water. We provide RO-purified, soft 'Sweet' water 24/7 for both bathing and drinking to protect your skin and hair."
          />

          {/* 5. Travel Facility */}
          <FacilityCard
            img="https://images.pexels.com/photos/12440389/pexels-photo-12440389.jpeg"
            icon={<Bike className="w-6 h-6 text-white" />}
            iconBg="bg-red-500"
            title="College Commute"
            content="Late for a lecture? We provide a fleet of Bikes and Scooties available for residents to travel to nearby colleges and markets."
          />

          {/* 6. Protection */}
          <FacilityCard
            img="https://images.pexels.com/photos/5211478/pexels-photo-5211478.jpeg"
            icon={<ShieldCheck className="w-6 h-6 text-white" />}
            iconBg="bg-green-600"
            title="24/7 Caretaker"
            content="A dedicated on-site caretaker is available day and night. Whether it's a medical emergency or a late-night check-in, you are protected."
          />

        </div>
      </section>

      {/* --- WHY US SECTION --- */}
      <section className="bg-slate-900 py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/20 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/20 rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 text-white relative z-10">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight italic text-primary-100">
              "A home away from home, built with safety and luxury."
            </h2>
            <div className="flex gap-6">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex-1">
                <p className="text-3xl font-black text-primary-400">100%</p>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Safety Record</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex-1">
                <p className="text-3xl font-black text-primary-400">0%</p>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Salt Water</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 bg-primary-600 p-10 rounded-[2.5rem] shadow-2xl shadow-primary-900/50">
            <Clock className="w-14 h-14 text-white mb-6" />
            <h3 className="text-2xl font-bold mb-4">Punctuality is Our Core</h3>
            <p className="text-primary-50 text-lg leading-relaxed">
              We understand the student schedule. That’s why our meal timings and cleaning schedules are strictly followed, ensuring you never miss a meal or a class.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

// Reusable Facility Card Component
const FacilityCard: FC<{ img: string; icon: ReactNode; iconBg: string; title: string; content: ReactNode }> = ({ img, icon, iconBg, title, content }) => (
  <div className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col">
    <div className="h-64 overflow-hidden relative">
      <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
      <div className={`absolute top-6 left-6 ${iconBg} p-4 rounded-2xl shadow-xl transform group-hover:rotate-6 transition-all duration-500`}>
        {icon}
      </div>
    </div>
    <div className="p-10 flex-1 flex flex-col">
      <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-primary-600 transition-colors">{title}</h3>
      <div className="text-slate-600 leading-relaxed text-base flex-1">
        {content}
      </div>
    </div>
  </div>
);

export default AboutUs;
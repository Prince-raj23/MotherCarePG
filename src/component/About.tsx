import type { FC, ReactNode } from 'react';
import { Clock, ShieldCheck, Droplets, Bike, Shirt, Sparkles, UtensilsCrossed } from 'lucide-react';

const AboutUs: FC = () => {
  return (
    <div className="bg-white min-h-screen font-sans text-slate-800">
      {/* --- HERO SECTION --- */}
      <section className="relative py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm">Premium Living</span>
          <h1 className="text-4xl md:text-6xl font-black mt-4 mb-6 text-slate-900">
            A New Standard of <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Student Living in India</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We don’t just provide a room; we provide a lifestyle. From home-style meals to 24/7 security, we’ve thought of everything so you can focus on your future.
          </p>
        </div>
      </section>

      {/* --- CORE FACILITIES GRID --- */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* 1. Meals Section */}
          <FacilityCard 
            img="https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=600"
            icon={<UtensilsCrossed className="w-6 h-6 text-orange-500" />}
            title="3-Time Gourmet Meals"
            content={
              <div className="space-y-2 text-sm">
                <p>Enjoy fresh Veg & Non-Veg options daily. We maintain separate cooking zones for pure-veg preferences.</p>
                <div className="bg-orange-50 p-3 rounded-lg border border-orange-100">
                  <p className="font-bold text-orange-700">Mess Timings:</p>
                  <p>Veg: 7:30 AM | 12:30 PM | 7:30 PM</p>
                  <p>Non-Veg: 8:00 AM | 1:15 PM | 8:15 PM</p>
                </div>
              </div>
            }
          />

          {/* 2. Laundry Section */}
          <FacilityCard 
            img="https://images.pexels.com/photos/8774513/pexels-photo-8774513.jpeg"
            icon={<Shirt className="w-6 h-6 text-blue-500" />}
            title="Professional Laundry"
            content="Never worry about your whites again. Our in-house laundry team collects and delivers your clothes ironed and folded twice a week."
          />

          {/* 3. Cleaning Services */}
          <FacilityCard 
            img="https://images.pexels.com/photos/9462636/pexels-photo-9462636.jpeg"
            icon={<Sparkles className="w-6 h-6 text-yellow-500" />}
            title="Deep Cleaning Staff"
            content="Dedicated room maids and specialized bathroom cleaners ensure 5-star hygiene levels daily. We take 'Clean' very seriously."
          />

          {/* 4. Water Quality */}
          <FacilityCard 
            img="https://images.pexels.com/photos/8595127/pexels-photo-8595127.jpeg"
            icon={<Droplets className="w-6 h-6 text-cyan-500" />}
            title="24/7 Sweet Water"
            content="No more harsh salted water. We provide RO-purified, soft 'Sweet' water 24/7 for both bathing and drinking to protect your skin and hair."
          />

          {/* 5. Travel Facility */}
          <FacilityCard 
            img="https://images.pexels.com/photos/12440389/pexels-photo-12440389.jpeg"
            icon={<Bike className="w-6 h-6 text-red-500" />}
            title="College Commute"
            content="Late for a lecture? We provide a fleet of Bikes and Scooties available for residents to travel to nearby colleges and markets."
          />

          {/* 6. Protection */}
          <FacilityCard 
            img="https://images.pexels.com/photos/5211478/pexels-photo-5211478.jpeg"
            icon={<ShieldCheck className="w-6 h-6 text-green-600" />}
            title="24/7 Caretaker"
            content="A dedicated on-site caretaker is available day and night. Whether it's a medical emergency or a late-night check-in, you are protected."
          />

        </div>
      </section>

      {/* --- WHY US SECTION --- */}
      <section className="bg-indigo-900 py-20 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 text-white">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 italic">"A home away from home, built with the safety of a fortress and the comfort of a luxury stay."</h2>
            <div className="flex gap-4">
              <div className="bg-indigo-800 p-4 rounded-xl">
                <p className="text-2xl font-bold">100%</p>
                <p className="text-xs text-indigo-300">Safety Track Record</p>
              </div>
              <div className="bg-indigo-800 p-4 rounded-xl">
                <p className="text-2xl font-bold">0%</p>
                <p className="text-xs text-indigo-300">Salt Water Usage</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 bg-white/10 p-8 rounded-3xl backdrop-blur-md border border-white/20">
            <Clock className="w-12 h-12 text-orange-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Punctuality is Our Core</h3>
            <p className="text-indigo-100">
              We understand the student schedule. That’s why our meal timings and cleaning schedules are strictly followed, ensuring you never miss a meal or a class.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

// Reusable Facility Card Component
const FacilityCard: FC<{ img: string; icon: ReactNode; title: string; content: ReactNode }> = ({ img, icon, title, content }) => (
  <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100">
    <div className="h-56 overflow-hidden relative">
      <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
      <div className="absolute top-4 left-4 bg-white p-3 rounded-2xl shadow-lg">
        {icon}
      </div>
    </div>
    <div className="p-8">
      <h3 className="text-2xl font-bold text-slate-900 mb-4">{title}</h3>
      <div className="text-slate-600 leading-relaxed">
        {content}
      </div>
    </div>
  </div>
);

export default AboutUs;
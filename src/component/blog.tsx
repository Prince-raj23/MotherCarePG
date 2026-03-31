import { useRef, useState, useEffect } from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  image: string;
}

const posts: BlogPost[] = [
  {
    id: 1,
    title: "How to Balance College Life and Fitness",
    excerpt: "Living in a PG doesn't mean skipping the gym. Here is how our residents use the local hubs and our healthy meal plans to stay fit...",
    category: "Lifestyle",
    author: "Pranjal",
    date: "Feb 24, 2026",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800"
  },
  {
    id: 2,
    title: "Why 'Sweet Water' Matters for Your Hair & Skin",
    excerpt: "Hard water is a student's worst enemy in the city. Learn how our RO-purified water systems keep you looking fresh every day.",
    category: "Health",
    author: "Management",
    date: "Feb 20, 2026",
    image: "https://images.unsplash.com/photo-1559839734-2b71f1e3c7e5?q=80&w=800"
  },
  {
    id: 3,
    title: "5 Weekend Getaways You Can Reach on our PG Scooters",
    excerpt: "Grab the keys to the house scooty and explore these hidden cafes and parks located just 15 minutes away from the hostel.",
    category: "Travel",
    author: "Community Lead",
    date: "Feb 15, 2026",
    image: "https://images.unsplash.com/photo-1498644035638-2c3357894b10?q=80&w=800"
  },
  {
    id: 4,
    title: "Veg vs Non-Veg: Our Separate Kitchen Philosophy",
    excerpt: "We respect your food choices. Here is a look behind the scenes at how we maintain hygiene and separate meal timings.",
    category: "Food",
    author: "Head Chef",
    date: "Feb 10, 2026",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800"
  }
];

const BlogPage = () => {
  const newsletterRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const newsletterTemplate = import.meta.env.VITE_EMAILJS_NEWSLETTER_TEMPLATE_ID || import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  useEffect(() => {
    if (publicKey) emailjs.init(publicKey);
  }, [publicKey]);

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterRef.current) return;
    if (!serviceID || !newsletterTemplate || !publicKey) {
      alert('Newsletter variables missing');
      return;
    }
    try {
      setLoading(true);
      await emailjs.sendForm(serviceID, newsletterTemplate, newsletterRef.current);
      alert('Thanks for subscribing!');
      newsletterRef.current.reset();
    } catch (err) {
      console.error('newsletter send error', err);
      alert('Failed to subscribe');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* --- HEADER --- */}
      <header className="pt-20 pb-16 px-6 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-4">
            The PG <span className="text-indigo-600">Insider</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Tips for student life, health hacks, and updates from the coolest community in town.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* --- FEATURED POST --- */}
        <div className="relative group overflow-hidden rounded-3xl bg-indigo-900 mb-16 h-[500px] shadow-2xl">
          <img 
            src={posts[0].image} 
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" 
            alt="Featured"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-0 p-8 md:p-12 text-white">
            <span className="bg-orange-500 px-4 py-1 rounded-full text-sm font-bold mb-4 inline-block tracking-wide">
              {posts[0].category}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 max-w-3xl leading-tight">
              {posts[0].title}
            </h2>
            <div className="flex items-center gap-6 text-slate-300 mb-6">
              <span className="flex items-center gap-2"><User size={18} /> {posts[0].author}</span>
              <span className="flex items-center gap-2"><Calendar size={18} /> {posts[0].date}</span>
            </div>
            <button className="flex items-center gap-2 bg-white text-indigo-900 px-6 py-3 rounded-xl font-bold hover:bg-indigo-50 transition-colors">
              Read Article <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* --- BLOG GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.slice(1).map((post) => (
            <article key={post.id} className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={post.image} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  alt={post.title} 
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold text-indigo-600 uppercase tracking-tighter">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <button className="text-indigo-600 font-bold text-sm flex items-center gap-1 group-hover:gap-3 transition-all">
                  Continue Reading <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* --- NEWSLETTER SECTION --- */}
        <section className="mt-20 bg-orange-500 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-400 rounded-full blur-3xl opacity-50" />
          <div className="relative z-10">
            <h2 className="text-3xl font-black mb-4 tracking-tight">Don't miss a beat!</h2>
            <p className="text-orange-100 mb-8">Get the latest news on room availability and PG events.</p>
            <form ref={newsletterRef} className="max-w-md mx-auto flex flex-col sm:flex-row gap-2" onSubmit={handleNewsletter}>
              <input
                name="phone"
                type="tel"
                placeholder="Enter your Mobile Number"
                required
                className="flex-1 px-6 py-4 rounded-2xl text-slate-900 focus:outline-none focus:ring-4 focus:ring-orange-300"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Subscribe'}
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BlogPage;
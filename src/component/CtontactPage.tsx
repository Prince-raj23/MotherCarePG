import { useRef, useState, useEffect } from "react";
import { Phone, Send, MessageCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  // ✅ Vite Environment Variables
  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // ✅ Initialize EmailJS
  useEffect(() => {
    if (publicKey) {
      emailjs.init(publicKey);
    } else {
      console.error("Public Key missing in .env file");
    }
  }, [publicKey]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    if (!serviceID || !templateID || !publicKey) {
      alert("EmailJS environment variables are missing.");
      console.error("Check your VITE_ env variables");
      return;
    }

    try {
      setLoading(true);

      await emailjs.sendForm(serviceID, templateID, formRef.current);

      alert("Message sent successfully!");
      formRef.current.reset();
    } catch (error) {
      console.error("Email send error:", error);
      alert("Failed to send message. Check console.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Get in <span className="text-indigo-600">Touch</span>
          </h1>
          <p className="text-slate-600 max-w-xl mx-auto text-lg">
            Have questions about room availability or facilities? Our team is here to help you 24/7.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side: Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Send us a Message
            </h2>

            <form ref={formRef} className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Full Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 outline-none transition-all"
                    placeholder="Prince rajput"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 outline-none transition-all"
                    placeholder="+91 00000 00000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 outline-none transition-all"
                  placeholder="prince@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 outline-none transition-all"
                  placeholder="I'm interested in a single sharing room..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-indigo-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Message"} <Send size={18} />
              </button>
            </form>
          </div>

          {/* Right Side */}
          {/* Map Placeholder/Integration */}
          
<div className="bg-white p-4 rounded-3xl shadow-lg border border-slate-100 overflow-hidden">
  <div className="relative h-80 rounded-2xl overflow-hidden bg-slate-200">
    {/* Embed Google Map iframe here for real integration */}
    <iframe
      title="PG Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.300!2d73.2685672!3d22.2790069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc30f365ef:0xb8dc787fc10aa1b8!2sAnanta%20Shubh%20Laxmi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
      className="absolute inset-0 w-full h-full border-0"
      allowFullScreen
      loading="lazy"
    ></iframe>
  </div>
  <div className="mt-4 p-2">
    <h3 className="font-bold text-slate-900">Visit Us At:</h3>
    <p className="text-slate-600 text-sm">Ananta Shubh Laxmi, Shankarpura, Vadodara, Gujarat 390019</p>
  </div>
</div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3">
                <Phone size={20} />
                <div>
                  <h4 className="font-bold text-slate-900">Call Us</h4>
                  <p className="text-sm text-slate-600">+91 98765 43210</p>
                </div>
              </div>
            </div>

            <div className="bg-white  p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3">
                <MessageCircle size={20} />
                <div>
                  <h4 className="font-bold text-slate-900">WhatsApp</h4>
                  <p className="text-sm text-slate-600">
                    Chat with Caretaker
                  </p>
                </div>
              </div>
            </div>
          </div>
          

        </div>
      </div>
    </div>
  );
};

export default ContactUs;
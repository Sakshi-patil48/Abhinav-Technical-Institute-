import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

interface Inquiry {
  id: string;
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  date: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'General Enquiry',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const getLiveStatus = () => {
    const now = new Date();
    const day = now.getDay(); // 0 is Sunday, 1 is Monday, ..., 6 is Saturday
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const timeVal = hours * 60 + minutes;

    // Working hours: 09:00 AM to 06:00 PM -> 9*60 = 540 to 18*60 = 1080
    const start = 9 * 60;
    const end = 18 * 60;

    if (day === 0) {
      return {
        open: false,
        text: 'Closed Now',
        desc: 'Opens Monday at 09:00 AM',
        color: 'text-red-600 bg-red-50 border-red-200'
      };
    }

    if (timeVal >= start && timeVal < end) {
      return {
        open: true,
        text: 'Open Now',
        desc: 'Closes at 06:00 PM',
        color: 'text-emerald-600 bg-emerald-50 border-emerald-200'
      };
    } else {
      const isLate = timeVal >= end;
      return {
        open: false,
        text: 'Closed Now',
        desc: isLate && day === 6 ? 'Opens Monday at 09:00 AM' : 'Opens tomorrow at 09:00 AM',
        color: 'text-red-600 bg-red-50 border-red-200'
      };
    }
  };

  const status = getLiveStatus();


  // Check URL query parameters to pre-fill the service dropdown
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.includes('?subject=')) {
        const subject = decodeURIComponent(hash.split('?subject=')[1]);
        setFormData(prev => ({ ...prev, service: subject }));
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial check
    if (window.location.hash.includes('?subject=')) {
      handleHashChange();
    }

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create inquiry object
    const newInquiry: Inquiry = {
      id: Date.now().toString(),
      ...formData,
      date: new Date().toLocaleString(),
    };

    // Save to localStorage
    const existingInquiries = JSON.parse(localStorage.getItem('abhinav_inquiries') || '[]');
    existingInquiries.push(newInquiry);
    localStorage.setItem('abhinav_inquiries', JSON.stringify(existingInquiries));

    setIsSubmitted(true);
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: 'General Enquiry',
      message: '',
    });

    // Auto-close success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const servicesList = [
    'General Enquiry',
    'Colleges / Higher Education',
    'Institutes & Academy',
    'Online Computer Training',
    'Technical Institutes Trade',
    'Electrician Trade Training',
    'Vocational Training Centres',
    'Consultancy Services',
    'Technical Installation',
    'Doorstep Delivery',
    'Annual Maintenance (AMC)',
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-orangeAccent">Connect With Us</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-serif">
            Get In Touch
          </h2>
          <div className="h-1 w-12 bg-orangeAccent mx-auto rounded-full" />
          <p className="text-slate-600 text-base">
            Have questions about admissions, trades, or technical services? Send us a message or call directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Info cards left */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-start space-x-4">
              <div className="p-3 bg-orange-100 rounded-xl text-orangeAccent shrink-0">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Our Office Address</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Mansingh Market, Near Railway Station / Near Ramnivas Hotel,<br />
                  Z P Road, Navi Peth Jalgaon, Jalgaon, Maharashtra 425001
                </p>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-start space-x-4">
              <div className="p-3 bg-blue-50 rounded-xl text-blue-500 shrink-0">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Call Us</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Mobile: <a href="tel:+919423488174" className="hover:text-orangeAccent font-semibold">+91 94234 88174</a>
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  Landline: <a href="tel:02572220036" className="hover:text-orangeAccent font-semibold">0257-2220036</a>
                </p>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-start space-x-4">
              <div className="p-3 bg-emerald-50 rounded-xl text-emerald-500 shrink-0">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Email Us</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Primary: <a href="mailto:abhinav.prp@gmail.com" className="hover:text-orangeAccent font-semibold">abhinav.prp@gmail.com</a>
                </p>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-start space-x-4">
              <div className="p-3 bg-purple-50 rounded-xl text-purple-500 shrink-0">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Working Hours</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Mon - Sat: 09:00 AM - 06:00 PM
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  Sunday: Closed
                </p>
                
                {/* Live Status Indicator */}
                <div className={`mt-2 inline-flex items-center gap-1.5 px-2.5 py-0.5 border text-[10px] font-bold uppercase rounded-full shadow-inner ${status.color}`}>
                  {status.open ? (
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                  ) : (
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                  )}
                  <span>{status.text} • {status.desc}</span>
                </div>
              </div>
            </div>

            {/* Simple Map Iframe */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 h-64 shadow-inner">
              <iframe
                title="Abhinav Technical Institute Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.3040375493035!2d75.5642033!3d21.0169502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd90fbeaaaaaaab%3A0x868b449b2518e38d!2sAbhinav%20Technical%20Institute!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
              />
            </div>

          </div>

          {/* Form right */}
          <div className="lg:col-span-7 bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden">
            
            <div className="relative space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 font-serif">Send an Inquiry</h3>
                <p className="text-xs text-slate-500 mt-1">Fill out the form below, and we will get back to you within 24 operational hours.</p>
              </div>

              {isSubmitted && (
                <div className="p-4 bg-emerald-50 text-emerald-800 rounded-xl border border-emerald-200 flex items-center space-x-3 animate-slideIn">
                  <CheckCircle2 className="h-6 w-6 text-emerald-500 shrink-0" />
                  <div>
                    <p className="font-bold text-sm">Thank You!</p>
                    <p className="text-xs">Your enquiry has been submitted. Our team will contact you shortly.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Punjo Patil"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 focus:border-orangeAccent focus:ring-1 focus:ring-orangeAccent outline-none text-sm"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      pattern="[0-9]{10,12}"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="9423488174"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 focus:border-orangeAccent focus:ring-1 focus:ring-orangeAccent outline-none text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="abhinav.prp@gmail.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 focus:border-orangeAccent focus:ring-1 focus:ring-orangeAccent outline-none text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">Select Course / Service</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 focus:border-orangeAccent focus:ring-1 focus:ring-orangeAccent outline-none text-sm"
                    >
                      {servicesList.map((svc) => (
                        <option key={svc} value={svc}>{svc}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">Your Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your queries here..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 focus:border-orangeAccent focus:ring-1 focus:ring-orangeAccent outline-none text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-semibold rounded-xl text-white bg-orangeAccent hover:bg-orangeAccent-dark shadow-sm hover:shadow transition-all duration-200 mt-2"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Submit Inquiry
                </button>

              </form>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
export type { Inquiry };

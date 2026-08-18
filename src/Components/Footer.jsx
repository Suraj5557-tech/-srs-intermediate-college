import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const primaryNumber = "9918585358";

  return (
    <footer className="bg-slate-950 text-gray-300 pt-12 pb-6 border-t border-slate-800 relative">
      
      {/* FontAwesome Icons Link Fallback */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
          
          {/* Col 1: Institute Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white tracking-wide">
              स्व० सीताराम सिंह सेवा शिक्षण संस्थान
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              त्रिकौलिया (शिवनगर) खुटहन, जौनपुर (उ.प्र.)
            </p>
            <p className="text-xs text-gray-400 leading-relaxed">
              UP Board द्वारा मान्यता प्राप्त संस्थान। हम विद्यार्थियों के सर्वांगीण विकास, नैतिक मूल्यों और गुणवत्तापूर्ण शिक्षा के लिए समर्पित हैं।
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a 
                href={`https://wa.me/91${primaryNumber}`} 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-emerald-600/20 text-emerald-400 border border-emerald-600/40 flex items-center justify-center text-sm hover:bg-emerald-600 hover:text-white transition"
                aria-label="WhatsApp"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a 
                href="tel:9918585358" 
                className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center text-sm hover:bg-amber-500 hover:text-slate-950 transition"
                aria-label="Phone"
              >
                <i className="fa-solid fa-phone"></i>
              </a>
              <a 
                href="#contact" 
                className="w-8 h-8 rounded-full bg-blue-600/20 text-blue-400 border border-blue-600/40 flex items-center justify-center text-sm hover:bg-blue-600 hover:text-white transition"
                aria-label="Email"
              >
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-yellow-400 uppercase tracking-wider">
              क्विक लिंक्स (Quick Links)
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <Link to="/" className="hover:text-yellow-400 transition flex items-center gap-2">
                  <i className="fa-solid fa-chevron-right text-[10px] text-yellow-500"></i> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-yellow-400 transition flex items-center gap-2">
                  <i className="fa-solid fa-chevron-right text-[10px] text-yellow-500"></i> About Us (हमारे बारे में)
                </Link>
              </li>
              <li>
                <Link to="/academics" className="hover:text-yellow-400 transition flex items-center gap-2">
                  <i className="fa-solid fa-chevron-right text-[10px] text-yellow-500"></i> Academics (पाठ्यक्रम)
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="hover:text-yellow-400 transition flex items-center gap-2">
                  <i className="fa-solid fa-chevron-right text-[10px] text-yellow-500"></i> Facilities (सुविधाएं)
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-yellow-400 transition flex items-center gap-2">
                  <i className="fa-solid fa-chevron-right text-[10px] text-yellow-500"></i> Contact Us (संपर्क करें)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Address */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-yellow-400 uppercase tracking-wider">
              संपर्क सूत्र (Contact Us)
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <i className="fa-solid fa-location-dot text-yellow-400 mt-0.5"></i>
                <span className="text-gray-300">
                  त्रिकौलिया (शिवनगर) खुटहन, जौनपुर (उ.प्र.) - 222142
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <i className="fa-solid fa-phone text-yellow-400"></i>
                <a href={`tel:${primaryNumber}`} className="hover:text-white transition font-semibold">
                  +91 {primaryNumber}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <i className="fa-solid fa-clock text-yellow-400"></i>
                <span>Mon - Sat: 08:00 AM - 02:00 PM</span>
              </li>
              <li className="flex items-center gap-2.5">
                <i className="fa-solid fa-[#25D366] fa-brands text-emerald-400"></i>
                <a 
                  href={`https://wa.me/91${primaryNumber}`} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-emerald-400 transition"
                >
                  WhatsApp Helpdesk
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Location & Admission CTA */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-yellow-400 uppercase tracking-wider">
              एडमिशन हेल्पलाइन
            </h4>
            <p className="text-xs text-gray-400">
              नवीन सत्र में LKG से 12वीं तक में प्रवेश हेतु विद्यालय कार्यालय में संपर्क करें।
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-slate-950 font-bold text-xs px-4 py-2.5 rounded-xl transition shadow"
            >
              Apply Online Now ➔
            </Link>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500 text-center sm:text-left">
          <p>© 2026 स्व० सीताराम सिंह सेवा शिक्षण संस्थान. All Rights Reserved.</p>
          <p className="flex items-center gap-1 justify-center">
            Designed & Developed with <span className="text-red-500">❤️</span> for Education
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
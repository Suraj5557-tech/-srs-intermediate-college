import React, { useState } from 'react';

const ContactSection = () => {
  const primaryNumber = "9918585358"; // Main Contact & WhatsApp Number


 const GOOGLE_SHEET_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzp5P-9Qa0g5fSeLeVut7VLDfWwzkoIioPjQH9BvQLhIPmb2zoNkX9_93dzGVFXi26x/exec";
  const [formData, setFormData] = useState({
    studentName: '',
    selectedClass: '',
    mobileNumber: '',
    address: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.studentName || !formData.mobileNumber) {
      alert('कृपया छात्र का नाम और मोबाइल नंबर भरें!');
      return;
    }

    setIsSubmitting(true);

    try {
      // Google Sheet & Mail Script को डेटा भेजना
      await fetch(GOOGLE_SHEET_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      setIsSubmitting(false);
      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ studentName: '', selectedClass: '', mobileNumber: '', address: '' });
      }, 5000);

    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
      alert('फॉर्म सबमिट करने में समस्या आई, कृपया पुनः प्रयास करें।');
    }
  };

  return (
    <section id="contact" className="py-12 px-4 max-w-7xl mx-auto">
      
      {/* FontAwesome Icons Link Fallback */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Side: Campus Info Card */}
        <div className="lg:col-span-5 bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-950 text-white rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between relative overflow-hidden border border-blue-800">
          
          <div className="space-y-6 relative z-10">
            <div>
              <span className="bg-yellow-400 text-blue-950 text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                GET IN TOUCH
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mt-3 text-white">
                Admission Enquiry & Campus Info
              </h2>
              <p className="text-blue-200 text-xs sm:text-sm mt-1 leading-relaxed">
                आप डायरेक्ट कॉल करके या फॉर्म भर कर एडमिशन की जानकारी ले सकते हैं।
              </p>
            </div>

            <div className="space-y-5 pt-2">
              
              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-800/80 text-yellow-400 flex items-center justify-center text-lg shadow-sm shrink-0 mt-1">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold text-blue-300 tracking-wider">College Address</h4>
                  <p className="text-sm font-medium text-white leading-snug mt-0.5">
                    त्रिकौलिया (शिवनगर) खुटहन, जौनपुर (उ.प्र.) - 222142
                  </p>
                </div>
              </div>

              {/* Contact Numbers */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-800/80 text-yellow-400 flex items-center justify-center text-lg shadow-sm shrink-0 mt-1">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold text-blue-300 tracking-wider">Helpline & WhatsApp Number</h4>
                  <p className="text-base font-extrabold text-yellow-300 mt-0.5 tracking-wide">
                    +91 {primaryNumber}
                  </p>
                  <p className="text-[11px] text-blue-200">
                    Alt: 9721401140, 9450087755
                  </p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-800/80 text-yellow-400 flex items-center justify-center text-lg shadow-sm shrink-0 mt-1">
                  <i className="fa-solid fa-clock"></i>
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold text-blue-300 tracking-wider">Office Hours</h4>
                  <p className="text-sm font-medium text-white mt-0.5">
                    Monday - Saturday: 08:00 AM to 02:00 PM
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="pt-8 grid grid-cols-2 gap-3 relative z-10">
            <a 
              href={`tel:${primaryNumber}`}
              className="bg-yellow-400 hover:bg-yellow-500 text-blue-950 font-bold text-xs sm:text-sm py-3 px-4 rounded-xl text-center transition flex items-center justify-center gap-2 shadow-md"
            >
              <i className="fa-solid fa-phone"></i>
              <span>Call Now</span>
            </a>
            
            <a 
              href={`https://wa.me/91${primaryNumber}?text=नमस्ते,%20मुझे%20एडमिशन%20के%20संबंध%20में%20जानकारी%20चाहिए।`}
              target="_blank" 
              rel="noreferrer" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl text-center transition flex items-center justify-center gap-2 shadow-md"
            >
              <i className="fa-brands fa-whatsapp text-lg"></i>
              <span>WhatsApp</span>
            </a>
          </div>

        </div>

        {/* Right Side: Admission Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-xl flex flex-col justify-between">
          <div>
            <div className="border-b border-gray-100 pb-4 mb-6">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <i className="fa-solid fa-file-signature text-blue-900"></i>
                Online Admission Inquiry
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Form bharein, college administration aapko jaldi call karega.
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl p-6 text-center space-y-2 animate-fadeIn">
                <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl mx-auto">
                  <i className="fa-solid fa-check"></i>
                </div>
                <h4 className="font-bold text-lg">इन्क्वायरी सफलतापूर्वक भेज दी गई है!</h4>
                <p className="text-xs text-emerald-700">डेटा रिकॉर्ड हो गया है एवं आपके ईमेल पर सूचना भेज दी गई है। हम जल्द ही आपसे संपर्क करेंगे!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Student Name */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    STUDENT NAME (छात्र का नाम) *
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400">
                      <i className="fa-solid fa-user text-xs"></i>
                    </span>
                    <input 
                      type="text" 
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleChange}
                      placeholder="Enter full name" 
                      required
                      className="w-full pl-10 pr-4 py-2.5 text-sm bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-900 focus:bg-white transition outline-none"
                    />
                  </div>
                </div>

                {/* Class & Mobile Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Select Class */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      CLASS (कक्षा)
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400">
                        <i className="fa-solid fa-graduation-cap text-xs"></i>
                      </span>
                      <select 
                        name="selectedClass"
                        value={formData.selectedClass}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2.5 text-sm bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-900 focus:bg-white transition outline-none appearance-none"
                      >
                        <option value="">Select Class</option>
                        <option value="LKG / UKG">LKG / UKG</option>
                        <option value="Class 1 to 5">Class 1 to 5</option>
                        <option value="Class 6 to 8">Class 6 to 8</option>
                        <option value="Class 9 & 10">Class 9 & 10</option>
                        <option value="Class 11 & 12 (Science)">Class 11 & 12 (Science)</option>
                        <option value="Class 11 & 12 (Arts)">Class 11 & 12 (Arts)</option>
                      </select>
                    </div>
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                      MOBILE NUMBER *
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400">
                        <i className="fa-solid fa-mobile-screen text-xs"></i>
                      </span>
                      <input 
                        type="tel" 
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        placeholder="10-digit number" 
                        maxLength={10}
                        required
                        className="w-full pl-10 pr-4 py-2.5 text-sm bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-900 focus:bg-white transition outline-none"
                      />
                    </div>
                  </div>

                </div>

                {/* Address */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    VILLAGE / ADDRESS (पता)
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400">
                      <i className="fa-solid fa-house-chimney text-xs"></i>
                    </span>
                    <input 
                      type="text" 
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Enter your area/village" 
                      className="w-full pl-10 pr-4 py-2.5 text-sm bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-900 focus:bg-white transition outline-none"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-xl transition duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer mt-2 disabled:opacity-50"
                >
                  <i className="fa-solid fa-paper-plane"></i>
                  <span>{isSubmitting ? "भेजा जा रहा है..." : "Submit Inquiry"}</span>
                </button>

              </form>
            )}
          </div>

          <div className="mt-6 pt-4 border-t border-gray-100 text-center">
            <p className="text-[11px] text-gray-500">
              🔒 आपकी जानकारी सुरक्षित है। हम केवल एडमिशन संबंधी जानकारी के लिए संपर्क करेंगे।
            </p>
          </div>
        </div>

      </div>

    </section>
  );
};

export default ContactSection;
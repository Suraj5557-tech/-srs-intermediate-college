import React from 'react';

const ContactSection = () => {
  return (
    <section id="apply" className="bg-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="bg-blue-900 text-white p-8 rounded-xl shadow-lg space-y-6">
          <div>
            <span className="bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-full uppercase">Get In Touch</span>
            <h3 className="text-2xl font-bold mt-2">Admission Enquiry & Campus Info</h3>
            <p className="text-blue-200 text-sm mt-1">Aap direct call karke ya form bhar kar admission ki jankari le sakte hain.</p>
          </div>

          <div className="space-y-4 pt-2">
            <div className="flex items-start space-x-3">
              <i className="fa-solid fa-location-dot text-yellow-400 text-xl mt-1"></i>
              <div>
                <p className="font-bold text-sm">College Address:</p>
                <p className="text-xs text-blue-200">त्रिकौलिया (शिवनगर) खुटहन, जौनपुर (उ.प्र.) - 222142</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <i className="fa-solid fa-phone text-yellow-400 text-xl mt-1"></i>
              <div>
                <p className="font-bold text-sm">Contact Numbers:</p>
                <p className="text-xs text-blue-200">9918585358, 9721401140, 9450087755</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <i className="fa-solid fa-clock text-yellow-400 text-xl mt-1"></i>
              <div>
                <p className="font-bold text-sm">Office Hours:</p>
                <p className="text-xs text-blue-200">Monday - Saturday: 08:00 AM to 02:00 PM</p>
              </div>
            </div>
          </div>

          <div className="pt-4 flex gap-3">
            <a href="tel:9918585358" className="bg-yellow-400 text-blue-900 font-bold px-4 py-2 rounded-lg text-sm flex items-center hover:bg-yellow-300 transition">
              <i className="fa-solid fa-phone mr-2"></i> Call Now
            </a>
            <a href="https://wa.me/919918585358" target="_blank" rel="noreferrer" className="bg-green-600 text-white font-bold px-4 py-2 rounded-lg text-sm flex items-center hover:bg-green-500 transition">
              <i className="fa-brands fa-whatsapp mr-2"></i> WhatsApp
            </a>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-1">Online Admission Inquiry</h3>
          <p className="text-xs text-gray-500 mb-6">Form bharein, college administration aapko jaldi call karega.</p>

          <form className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Student Name (छात्र का नाम)</label>
              <input type="text" placeholder="Enter full name" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-none text-sm" required />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Class (कक्षा)</label>
                <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-none text-sm bg-white">
                  <option>Select Class</option>
                  <option>Nursery - LKG - UKG</option>
                  <option>Class I - V</option>
                  <option>Class VI - VIII</option>
                  <option>Class IX - X</option>
                  <option>Class XI - XII (Arts/Science)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Mobile Number</label>
                <input type="tel" placeholder="10-digit number" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-none text-sm" required />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Village / Address (पता)</label>
              <input type="text" placeholder="Enter your area/village" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-none text-sm" />
            </div>

            <button type="button" onClick={() => alert('Inquiry Submitted Successfully!')} className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition shadow-md">
              Submit Inquiry
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
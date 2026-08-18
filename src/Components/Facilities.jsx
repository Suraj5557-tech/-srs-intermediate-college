import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Facilities = () => {
  const [selectedFacility, setSelectedFacility] = useState(null);

  const facilitiesList = [
    {
      id: 1,
      title: 'स्मार्ट क्लासरूम (Smart Classrooms)',
      shortDesc: 'डिजिटल बोर्ड और ऑडियो-विजुअल माध्यमों से आधुनिक शिक्षा।',
      fullDesc: 'हमारे सभी क्लासरूम्स में आधुनिक स्मार्ट बोर्ड्स, प्रोजेक्टर्स और ऑडियो-विजुअल सेटअप उपलब्ध हैं। इसके माध्यम से छात्र जटिल विषयों को 3D एनिमेशन और विजुअल कंटेंट के जरिए आसानी से समझ पाते हैं।',
      icon: 'fa-chalkboard-user',
      badge: 'Interactive',
      gradient: 'from-blue-600 to-indigo-700',
      lightBg: 'bg-blue-50 text-blue-700'
    },
    {
      id: 2,
      title: 'विज्ञान प्रयोगशाला (Science Labs)',
      shortDesc: 'Physics, Chemistry aur Biology ki alag-alag high-tech labs.',
      fullDesc: 'छात्रों के प्रयोगात्मक ज्ञान (Practical Knowledge) के लिए हमारे पास भौतिकी, रसायन विज्ञान और जीव विज्ञान की सर्वसुविधायुक्त प्रयोगशालाएं हैं। यहाँ सभी आवश्यक उपकरण, केमिकल्स और सुरक्षा साधन उपलब्ध हैं।',
      icon: 'fa-flask',
      badge: 'Practical',
      gradient: 'from-emerald-500 to-teal-700',
      lightBg: 'bg-emerald-50 text-emerald-700'
    },
    {
      id: 3,
      title: 'कंप्यूटर लैब (Computer Lab)',
      shortDesc: 'हाई-स्पीड इंटरनेट और लेटेस्ट पीसी के साथ डिजिटल एजुकेशन।',
      fullDesc: 'विद्यालय में 30+ आधुनिक कंप्यूटरों से सुसज्जित लैब है। यहाँ छात्रों को बेसिक कंप्यूटर ज्ञान, प्रोग्रामिंग, एमएस ऑफिस और सुरक्षित इंटरनेट ब्राउज़िंग सिखाई जाती है।',
      icon: 'fa-laptop-code',
      badge: 'Digital',
      gradient: 'from-purple-600 to-indigo-800',
      lightBg: 'bg-purple-50 text-purple-700'
    },
    {
      id: 4,
      title: 'समृद्ध पुस्तकालय (Library)',
      shortDesc: 'हजारों शैक्षणिक पुस्तकें, पत्र-पत्रिकाएं और शांत अध्ययन कक्ष।',
      fullDesc: 'लाइब्रेरी में NCERT, प्रतियोगी परीक्षाओं, संदर्भ पुस्तकों (Reference Books) और बाल साहित्य का विशाल संग्रह है। शांत माहौल में बैठकर पढ़ने के लिए विशेष व्यवस्था है।',
      icon: 'fa-book-open',
      badge: 'Knowledge',
      gradient: 'from-amber-500 to-orange-600',
      lightBg: 'bg-amber-50 text-amber-700'
    },
    {
      id: 5,
      title: 'खेल का मैदान (Sports & Games)',
      icon: 'fa-futbol',
      badge: 'Fitness',
      shortDesc: 'विशाल प्लेग्राउंड, क्रिकेट, वॉलीबॉल और एथलेटिक्स फैसिलिटी।',
      fullDesc: 'छात्रों के शारीरिक विकास के लिए विशाल खेल का मैदान उपलब्ध है। यहाँ क्रिकेट, वॉलीबॉल, बैडमिंटन, खो-खो और वार्षिक खेलकूद प्रतियोगिताओं का आयोजन किया जाता है।',
      gradient: 'from-green-600 to-emerald-800',
      lightBg: 'bg-green-50 text-green-700'
    },
    {
      id: 6,
      title: 'परिवहन सुविधा (Bus & Transport)',
      icon: 'fa-bus',
      badge: 'Safe Travel',
      shortDesc: 'खुटहन एवं आस-पास के सभी गांवों से सुरक्षित बस सेवा।',
      fullDesc: 'दूर-दराज के गांवों से आने वाले छात्र-छात्राओं के लिए सुरक्षित और समयबद्ध बस/वाहन सेवा उपलब्ध है। प्रत्येक वाहन में प्रशिक्षित चालक और अटेंडेंट तैनात रहते हैं।',
      gradient: 'from-yellow-500 to-amber-700',
      lightBg: 'bg-yellow-50 text-yellow-800'
    },
    {
      id: 7,
      title: 'CCTV Surveillance & Security',
      icon: 'fa-shield-halved',
      badge: '24x7 Safety',
      shortDesc: 'पूरा कैंपस 24/7 CCTV और बाउंड्री वॉल से सुरक्षित है।',
      fullDesc: 'छात्रों की सुरक्षा हमारी प्राथमिकता है। पूरे कैंपस, कक्षाओं और खेल के मैदान में CCTV कैमरे लगे हैं। मुख्य गेट पर 24/7 सुरक्षा गार्ड तैनात रहते हैं।',
      gradient: 'from-rose-600 to-red-700',
      lightBg: 'bg-rose-50 text-rose-700'
    },
    {
      id: 8,
      title: 'शुद्ध RO जल & पावर बैकअप',
      icon: 'fa-droplet',
      badge: 'Health Care',
      shortDesc: 'RO वाटर प्यूरीफायर और जनरेटर/इनवर्टर बैकअप सिस्टम।',
      fullDesc: 'छात्रों के उत्तम स्वास्थ्य के लिए शीतल एवं शुद्ध RO पेयजल की व्यवस्था है। बिजली कटने पर निर्बाध पढ़ाई के लिए हैवी-ड्यूटी जनरेटर बैकअप उपलब्ध है।',
      gradient: 'from-cyan-600 to-blue-700',
      lightBg: 'bg-cyan-50 text-cyan-700'
    }
  ];

  return (
    <section id="facilities" className="py-12 px-4 max-w-7xl mx-auto space-y-10">
      
      {/* FontAwesome Link fallback */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
      />

      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="bg-blue-100 text-blue-900 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
          Modern Infrastructure & Campus Facilities
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3">
          🏫 विद्यालय की प्रमुख सुविधाएं
        </h2>
        <p className="text-gray-600 text-sm mt-2 leading-relaxed">
          स्व० सीताराम सिंह सेवा शिक्षण संस्थान में विद्यार्थियों के सर्वांगीण विकास के लिए विश्वस्तरीय वातावरण तैयार किया गया है।
        </p>
      </div>

      {/* Facilities Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {facilitiesList.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedFacility(item)}
            className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between group hover:-translate-y-1.5 cursor-pointer relative overflow-hidden"
          >
            {/* Top Accent Line */}
            <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${item.gradient}`}></div>

            <div>
              <div className="flex justify-between items-start mb-4">
                {/* Icon Box with Gradient & Shadow */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} text-white flex items-center justify-center text-2xl shadow-md group-hover:scale-110 transition duration-300`}>
                  <i className={`fa-solid ${item.icon}`}></i>
                </div>

                {/* Badge */}
                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${item.lightBg}`}>
                  {item.badge}
                </span>
              </div>

              <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-blue-900 transition">
                {item.title}
              </h3>

              <p className="text-gray-600 text-xs leading-relaxed">
                {item.shortDesc}
              </p>
            </div>

            {/* Read Details Interactive Link */}
            <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-blue-900 group-hover:text-blue-600">
              <span>Read Details</span>
              <span className="w-7 h-7 rounded-full bg-blue-50 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition duration-300">
                ➔
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Modal / Popup */}
      {selectedFacility && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-gray-100">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedFacility(null)}
              className="absolute top-4 right-4 w-9 h-9 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full flex items-center justify-center text-lg font-bold transition cursor-pointer"
            >
              ✕
            </button>

            {/* Modal Content */}
            <div className="flex items-center gap-4 mb-4">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${selectedFacility.gradient} text-white flex items-center justify-center text-2xl shadow-lg`}>
                <i className={`fa-solid ${selectedFacility.icon}`}></i>
              </div>
              <div>
                <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${selectedFacility.lightBg}`}>
                  {selectedFacility.badge}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mt-1">
                  {selectedFacility.title}
                </h3>
              </div>
            </div>

            <p className="text-gray-700 text-sm leading-relaxed mb-6 bg-gray-50 p-4 rounded-xl border border-gray-100">
              {selectedFacility.fullDesc}
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => setSelectedFacility(null)}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs font-bold py-3 rounded-xl transition cursor-pointer"
              >
                Close
              </button>
              <Link
                to="/contact"
                onClick={() => setSelectedFacility(null)}
                className="flex-1 bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold py-3 rounded-xl text-center transition cursor-pointer"
              >
                Enquire Now ➔
              </Link>
            </div>

          </div>
        </div>
      )}

      {/* Bottom CTA Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-950 text-white rounded-2xl p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center md:text-left">
          <h3 className="text-xl sm:text-2xl font-bold">
            क्या आप कैंपस विजिट करना चाहते हैं?
          </h3>
          <p className="text-blue-200 text-xs sm:text-sm">
            हमारे विद्यालय आकर आधुनिक इंफ्रास्ट्रक्चर और कक्षाओं का प्रत्यक्ष अनुभव करें।
          </p>
        </div>

        <div>
          <Link
            to="/contact"
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-950 font-bold text-xs sm:text-sm px-6 py-3 rounded-xl transition shadow-md whitespace-nowrap inline-block"
          >
            📋 Contact For Visit
          </Link>
        </div>
      </div>

    </section>
  );
};

export default Facilities;
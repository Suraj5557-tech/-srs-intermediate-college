import React from 'react';
import { Link } from 'react-router-dom';

const Academics = () => {
  const classesInfo = [
    {
      title: 'प्राथमिक स्तर (Primary Section)',
      classes: 'LKG, UKG, Class 1 to 5',
      badge: 'Foundational',
      color: 'from-amber-500 to-orange-600',
      bgLight: 'bg-amber-50 text-amber-900 border-amber-200',
      icon: 'fa-child-reaching',
      details: [
        'खेल-खेल में शिक्षा (Activity Based Learning)',
        'बुनियादी भाषा (हिंदी/अंग्रेजी) और गणित ज्ञान',
        'संस्कार, अनुशासन और नैतिक शिक्षा पर जोर'
      ]
    },
    {
      title: 'उच्च प्राथमिक स्तर (Junior High School)',
      classes: 'Class 6 to 8',
      badge: 'Middle School',
      color: 'from-blue-600 to-indigo-700',
      bgLight: 'bg-blue-50 text-blue-900 border-blue-200',
      icon: 'fa-book-open-reader',
      details: [
        'UP Board पाठ्यक्रम पर आधारित मजबूत आधार',
        'विज्ञान, गणित और कंप्यूटर शिक्षा की विशेष व्यवस्था',
        'प्रतियोगी परीक्षाओं के लिए बेसिक गाइडेंस'
      ]
    },
    {
      title: 'माध्यमिक स्तर (High School)',
      classes: 'Class 9 & 10',
      badge: 'Secondary',
      color: 'from-emerald-600 to-teal-700',
      bgLight: 'bg-emerald-50 text-emerald-900 border-emerald-200',
      icon: 'fa-graduation-cap',
      details: [
        'UP Board परीक्षा की गहन एवं सुनियोजित तैयारी',
        'नियमित टेस्ट (Weekly & Monthly Tests)',
        'प्रयोगशाला (Practical Labs) और डाउट सेशन'
      ]
    },
    {
      title: 'उच्चतर माध्यमिक स्तर (Intermediate)',
      classes: 'Class 11 & 12 (Arts & Science)',
      badge: 'Senior Secondary',
      color: 'from-purple-600 to-indigo-800',
      bgLight: 'bg-purple-50 text-purple-900 border-purple-200',
      icon: 'fa-user-graduate',
      details: [
        'विज्ञान (Physics, Chem, Bio/Maths) एवं कला वर्ग',
        'अनुभवी शिक्षकों द्वारा बोर्ड परीक्षा ओरिएंटेड पढ़ाई',
        'करियर काउंसलिंग और बोर्ड एग्जाम स्पेशल गाइडेंस'
      ]
    }
  ];

  const features = [
    { title: 'अनुभवी शिक्षक (Expert Faculty)', desc: 'विषय विशेषज्ञ एवं समर्पित शिक्षकों द्वारा गुणवत्तापूर्ण अध्यापन।', icon: 'fa-chalkboard-user' },
    { title: 'नियमित मूल्यांकन (Regular Assessment)', desc: 'सप्ताहिक व मासिक परीक्षाओं द्वारा छात्रों की प्रगति का आकलन।', icon: 'fa-clipboard-check' },
    { title: 'स्मार्ट टीचिंग (Digital Learning)', desc: 'कठिन विषयों को आसान बनाने हेतु ऑडियो-विजुअल और स्मार्ट क्लास।', icon: 'fa-display' },
    { title: 'नैतिक & अनुशासन (Moral Values)', desc: 'शिक्षा के साथ-साथ उत्तम चरित्र और अनुशासन का निर्माण।', icon: 'fa-hands-praying' }
  ];

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto space-y-12">
      
      {/* FontAwesome Link fallback */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
      />

      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm inline-block">
          Academic Excellence & Curriculum
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3">
          📚 शैक्षणिक व्यवस्था (Academics)
        </h2>
        <p className="text-amber-600 text-sm mt-1 font-semibold">
          UP Board मान्यता प्राप्त - LKG से कक्षा 12वीं तक की बेहतर शिक्षा
        </p>
      </div>

      {/* Classes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {classesInfo.map((item, idx) => (
          <div 
            key={idx} 
            className="bg-white rounded-3xl border border-gray-100 shadow-md hover:shadow-xl transition duration-300 overflow-hidden relative flex flex-col justify-between group hover:-translate-y-1"
          >
            <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>

            <div className="p-6 sm:p-8">
              <div className="flex justify-between items-start mb-4">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center text-xl shadow-md`}>
                  <i className={`fa-solid ${item.icon}`}></i>
                </div>
                <span className={`text-[11px] font-extrabold px-3 py-1 rounded-full border ${item.bgLight}`}>
                  {item.badge}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
              <p className="text-blue-900 font-bold text-sm mt-1">{item.classes}</p>

              <hr className="my-4 border-gray-100" />

              <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                {item.details.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2">
                    <i className="fa-solid fa-circle-check text-blue-800 mt-1"></i>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 px-6 py-3 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs text-gray-500 font-medium">Medium: Hindi / English Mix</span>
              <Link to="/contact" className="text-xs font-bold text-blue-900 hover:text-blue-600">
                Admission Info ➔
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Academic Features */}
      <div className="bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h3 className="text-2xl font-bold text-yellow-300">✨ हमारी शैक्षणिक मुख्य विशेषताएं</h3>
          <p className="text-blue-200 text-xs sm:text-sm">
            विद्यार्थियों की नींव मजबूत करने और उन्हें बोर्ड परीक्षा में उत्कृष्ट प्रदर्शन हेतु तैयार करने की रणनीति।
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, fIdx) => (
            <div key={fIdx} className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 hover:bg-white/20 transition">
              <div className="w-10 h-10 rounded-xl bg-yellow-400 text-blue-950 flex items-center justify-center text-lg font-bold mb-3">
                <i className={`fa-solid ${f.icon}`}></i>
              </div>
              <h4 className="font-bold text-base text-white mb-1">{f.title}</h4>
              <p className="text-blue-100 text-xs leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Footer Banner */}
      <div className="bg-amber-400 text-blue-950 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
        <div>
          <h4 className="text-lg font-bold">नए शैक्षणिक सत्र हेतु एडमिशन प्रारंभ</h4>
          <p className="text-xs font-medium text-blue-900">LKG से कक्षा 12वीं में प्रवेश के लिए आज ही संपर्क करें।</p>
        </div>
        <Link 
          to="/contact" 
          className="bg-blue-950 hover:bg-blue-900 text-white font-bold text-xs px-6 py-3 rounded-xl transition whitespace-nowrap shadow"
        >
          Apply For Admission ➔
        </Link>
      </div>

    </section>
  );
};

export default Academics;
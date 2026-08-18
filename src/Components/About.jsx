import React from 'react';
import { Link } from 'react-router-dom';

// Imports
import founderImg from '../assets/founder.jpg.jpeg';
import mdImg from '../assets/md.jpg.jpeg';
import principalImg from '../assets/principal.jpg.jpeg';

const AboutUs = () => {
  const leadership = [
    {
      id: 1,
      role: 'संस्थाध्यक्ष / संस्थापक',
      name: 'श्री नरसिंह बहादुर सिंह',
      image: founderImg,
      desc: 'विद्यालय की स्थापना एवं विकास में संस्थाध्यक्ष का मार्गदर्शन और नेतृत्व महत्वपूर्ण रहा है। उनके मार्गदर्शन में संस्थान शिक्षा के क्षेत्र में निरंतर प्रगति कर रहा है।',
      badgeBg: 'bg-amber-100 text-amber-900 border-amber-300'
    },
    {
      id: 2,
      role: 'प्रबंध निदेशक',
      name: 'श्री कृष्णा सिंह',
      image: mdImg,
      desc: 'प्रबंध निदेशक के रूप में आप प्रशासनिक एवं विकासात्मक कार्यों में सक्रिय भूमिका निभाते हैं। आपका प्रयास शैक्षिक व्यवस्था को बेहतर और अनुशासित बनाना है।',
      badgeBg: 'bg-blue-100 text-blue-900 border-blue-300'
    },
    {
      id: 3,
      role: 'प्रधानाचार्य',
      name: 'श्री बिपिन कुमार सिंह',
      image: principalImg,
      desc: 'प्रधानाचार्य के नेतृत्व में शैक्षणिक एवं प्रशासनिक गतिविधियों का संचालन किया जाता है। विद्यार्थियों के सर्वांगीण विकास को प्राथमिकता दी जाती है।',
      badgeBg: 'bg-emerald-100 text-emerald-900 border-emerald-300'
    }
  ];

  return (
    <section id="about" className="py-12 px-4 max-w-7xl mx-auto space-y-12">
      
      {/* FontAwesome Link fallback */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
      />

      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm inline-block">
          स्थापना वर्ष : 2002 | UP Board
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-3">
          स्व० सीताराम सिंह सेवा शिक्षण संस्थान
        </h2>
        <p className="text-amber-600 text-sm mt-1 font-semibold">
          त्रिकौलिया, खुटहन, जौनपुर, उत्तर प्रदेश (LKG से कक्षा 12 तक)
        </p>
      </div>

      {/* About Description & Quote */}
      <div className="bg-white p-6 md:p-8 rounded-3xl border border-blue-100 shadow-xl space-y-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-yellow-400 to-indigo-600"></div>

        <div>
          <h3 className="text-2xl font-bold text-blue-950 border-b border-gray-100 pb-3 mb-4 flex items-center gap-2">
            <span className="p-2 bg-pink-100 text-pink-600 rounded-xl text-lg">🌸</span>
            विद्यालय के बारे में
          </h3>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            <strong className="text-blue-900">स्व० सीताराम सिंह सेवा शिक्षण संस्थान</strong>, त्रिकौलिया, खुटहन, जौनपुर की स्थापना वर्ष <strong>2002</strong> में क्षेत्र के विद्यार्थियों को गुणवत्तापूर्ण एवं संस्कारयुक्त शिक्षा प्रदान करने के उद्देश्य से की गई थी। यह संस्थान <strong className="text-blue-900">उत्तर प्रदेश माध्यमिक शिक्षा परिषद (UP Board)</strong> से मान्यता प्राप्त है एवं ट्रस्ट द्वारा संचालित है।
          </p>
        </div>

        {/* Quote Box */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-950 text-white p-6 rounded-2xl shadow-lg border-l-4 border-yellow-400 relative">
          <blockquote className="italic text-sm sm:text-base font-medium leading-relaxed text-yellow-100">
            “विद्यालय में केवल शिक्षा ही पढ़ना नहीं है, इसके साथ-साथ चरित्र बनाना भी है। ज्ञान और चरित्र दोनों का मेल कर देने से संसार में मान और गौरव प्राप्त होता है।”
          </blockquote>
        </div>
      </div>

      {/* Vision & Mission Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Vision Box */}
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50/50 p-6 sm:p-8 rounded-3xl border border-emerald-200 shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-emerald-950 mb-3 flex items-center gap-2.5">
            <span className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center text-base shadow">🌱</span>
            हमारा Vision
          </h3>
          <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
            ऐसा आदर्श शिक्षण वातावरण तैयार करना जहाँ प्रत्येक विद्यार्थी को गुणवत्तापूर्ण शिक्षा के साथ अच्छे संस्कार, नैतिक मूल्य और जीवनोपयोगी ज्ञान प्राप्त हो तथा वह अपने परिवार, समाज और राष्ट्र के लिए उपयोगी नागरिक बन सके।
          </p>
        </div>

        {/* Mission Box */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50/50 p-6 sm:p-8 rounded-3xl border border-indigo-200 shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-indigo-950 mb-3 flex items-center gap-2.5">
            <span className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center text-base shadow">🚀</span>
            हमारा Mission
          </h3>
          <ul className="text-gray-700 text-xs sm:text-sm space-y-2">
            <li className="flex items-start gap-2">
              <i className="fa-solid fa-circle-check text-indigo-600 mt-0.5"></i>
              <span>विद्यार्थियों को गुणवत्तापूर्ण एवं प्रभावी शिक्षा प्रदान करना।</span>
            </li>
            <li className="flex items-start gap-2">
              <i className="fa-solid fa-circle-check text-indigo-600 mt-0.5"></i>
              <span>शिक्षा के साथ चरित्र एवं व्यक्तित्व का निर्माण करना।</span>
            </li>
            <li className="flex items-start gap-2">
              <i className="fa-solid fa-circle-check text-indigo-600 mt-0.5"></i>
              <span>अनुशासन, ईमानदारी और जिम्मेदारी की भावना विकसित करना।</span>
            </li>
            <li className="flex items-start gap-2">
              <i className="fa-solid fa-circle-check text-indigo-600 mt-0.5"></i>
              <span>बदलते समय के साथ आधुनिक शिक्षा और संस्कार देना।</span>
            </li>
          </ul>
        </div>

      </div>

      {/* 👨‍💼 Management & Leadership Cards */}
      <div>
        <div className="text-center mb-8">
          <span className="bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
            MANAGEMENT TEAM
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-2">
            👨‍💼 विद्यालय का प्रबंधन
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {leadership.map((person) => (
            <div 
              key={person.id} 
              className="bg-white rounded-3xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col text-center group hover:-translate-y-1.5"
            >
              {/* Photo Container */}
              <div className="h-64 bg-gradient-to-b from-gray-50 to-blue-50/30 flex items-center justify-center p-4 border-b border-gray-100 relative">
                <img 
                  src={person.image} 
                  alt={person.name} 
                  className="max-h-full max-w-full object-contain rounded-2xl group-hover:scale-105 transition duration-300 shadow-sm"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className={`text-[11px] font-extrabold px-3 py-1 rounded-full uppercase border ${person.badgeBg}`}>
                    {person.role}
                  </span>
                  <h4 className="text-lg font-bold text-gray-900 mt-3">{person.name}</h4>
                  <p className="text-gray-600 text-xs mt-2 leading-relaxed">
                    {person.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Faculty Link Banner */}
      <div className="bg-gradient-to-r from-blue-950 via-indigo-900 to-blue-900 text-white rounded-3xl p-6 sm:p-8 text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl border border-blue-800">
        <div className="text-center sm:text-left">
          <h4 className="font-bold text-lg text-yellow-300">हमारी शिक्षण व्यवस्था & फैकल्टी</h4>
          <p className="text-blue-200 text-xs sm:text-sm mt-0.5">हमारे सभी अनुभवी शिक्षक-शिक्षिकाओं की सूची देखें।</p>
        </div>
        
        <Link 
          to="/faculty" 
          className="bg-yellow-400 hover:bg-yellow-500 text-blue-950 font-bold text-xs sm:text-sm px-6 py-3 rounded-xl transition whitespace-nowrap shadow-md inline-block"
        >
          View All Faculty Members ➔
        </Link>
      </div>

    </section>
  );
};

export default AboutUs;
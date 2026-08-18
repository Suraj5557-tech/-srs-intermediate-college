import React from 'react';

const NoticeBoard = () => {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Notice Board */}
        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-red-600">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-gray-800 flex items-center">
              <i className="fa-solid fa-bell text-red-600 mr-2"></i> Notice Board
            </h3>
            <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded font-bold">Latest</span>
          </div>
          
          <div className="space-y-3 h-64 overflow-y-auto pr-2">
            <div className="p-3 bg-gray-50 border-l-4 border-blue-900 rounded shadow-sm">
              <p className="text-xs text-red-600 font-bold">JULY 2026</p>
              <p className="text-sm font-semibold text-gray-800">Admission Open for Session 2026-27 (Nursery to Class XII).</p>
            </div>
            <div className="p-3 bg-gray-50 border-l-4 border-yellow-500 rounded shadow-sm">
              <p className="text-xs text-gray-500 font-bold">IMPORTANT</p>
              <p className="text-sm font-semibold text-gray-800">Direct Admission & Counseling at Main Campus Office.</p>
            </div>
            <div className="p-3 bg-gray-50 border-l-4 border-green-600 rounded shadow-sm">
              <p className="text-xs text-gray-500 font-bold">FACILITIES</p>
              <p className="text-sm font-semibold text-gray-800">Experienced faculty & all-round development programs.</p>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="md:col-span-2 space-y-6">
          <div>
            <span className="text-blue-900 font-bold text-sm uppercase tracking-wide">Welcome to Our College</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-1">Providing Quality Education With Values</h2>
            <p className="text-gray-600 mt-2 leading-relaxed">
              स्व० सीताराम सिंह सेवा शिक्षण संस्थान में हम बच्चों के उज्ज्वल भविष्य और मजबूत नींव के लिए प्रतिबद्ध हैं। हमारे यहाँ अनुभवी शिक्षकों द्वारा आधुनिक और संस्कारयुक्त शिक्षा दी जाती है।
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-lg shadow border border-gray-100 flex items-start space-x-3">
              <div className="p-3 bg-blue-100 text-blue-900 rounded-lg text-xl"><i className="fa-solid fa-graduation-cap"></i></div>
              <div>
                <h4 className="font-bold text-gray-800">Quality Education</h4>
                <p className="text-xs text-gray-500">Nursery to XII standard with strong fundamentals.</p>
              </div>
            </div>

            <div className="p-4 bg-white rounded-lg shadow border border-gray-100 flex items-start space-x-3">
              <div className="p-3 bg-yellow-100 text-yellow-800 rounded-lg text-xl"><i className="fa-solid fa-chalkboard-user"></i></div>
              <div>
                <h4 className="font-bold text-gray-800">Experienced Faculty</h4>
                <p className="text-xs text-gray-500">Dedicated teachers focused on individual attention.</p>
              </div>
            </div>

            <div className="p-4 bg-white rounded-lg shadow border border-gray-100 flex items-start space-x-3">
              <div className="p-3 bg-green-100 text-green-800 rounded-lg text-xl"><i className="fa-solid fa-child-reaching"></i></div>
              <div>
                <h4 className="font-bold text-gray-800">All Round Dev.</h4>
                <p className="text-xs text-gray-500">Sports, cultural activities & personality development.</p>
              </div>
            </div>

            <div className="p-4 bg-white rounded-lg shadow border border-gray-100 flex items-start space-x-3">
              <div className="p-3 bg-red-100 text-red-800 rounded-lg text-xl"><i className="fa-solid fa-award"></i></div>
              <div>
                <h4 className="font-bold text-gray-800">Discipline & Values</h4>
                <p className="text-xs text-gray-500">Focusing on ethics, culture & bright moral values.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default NoticeBoard;
import React from 'react';
import campusImg from '../assets/campus.jpg';

const HeroBanner = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        <div className="md:w-1/2 space-y-4">
          <span className="bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-full uppercase">
            Strong Foundation ➔ Bright Future
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Cross the Bridge to Your <span className="text-yellow-400">FUTURE</span>
          </h2>
          <p className="text-blue-100 text-lg">
            DREAM • LEARN • ACHIEVE <br />
            <span className="text-sm text-gray-300">Where Dreams Take Shape & Futures Shine.</span>
          </p>
          <div className="pt-4 flex gap-4">
            <a href="#apply" className="bg-yellow-400 text-blue-900 font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-300 transition">
              Enquire Admission
            </a>
            <a href="tel:9918585358" className="border border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white hover:text-blue-900 transition flex items-center">
              <i className="fa-solid fa-phone mr-2"></i> Call Us
            </a>
          </div>
        </div>

        <div className="md:w-1/2 bg-white p-2 rounded-xl shadow-2xl border-4 border-yellow-400">
          <div className="relative overflow-hidden rounded-lg">
            <img src={campusImg} alt="Campus" className="w-full h-64 md:h-80 object-cover rounded-lg" />
            <div className="bg-blue-900 text-white p-3 text-center">
              <p className="font-bold text-sm text-yellow-400">SEETARAM SINGH INTERMEDIATE COLLEGE</p>
              <p className="text-xs text-gray-200">Nursery to Class XII | Trikuliya, Khuthan, Jaunpur</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroBanner;
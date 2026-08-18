import React, { useState, useEffect } from 'react';

// Exact File Names (Sabhi me .jpg.jpeg extension hai)
import g1 from '../assets/gallery/g1.jpg.jpeg';
import g2 from '../assets/gallery/g2.jpg.jpeg';
import g3 from '../assets/gallery/g3.jpg.jpeg';
import g4 from '../assets/gallery/g4.jpg.jpeg';
import g5 from '../assets/gallery/g5.jpg.jpeg';
import g7 from '../assets/gallery/g7.jpg.jpeg';
import g8 from '../assets/gallery/g8.jpg.jpeg';
import g9 from '../assets/gallery/g9.jpg.jpeg';
import g10 from '../assets/gallery/g10.jpg.jpeg';
import g11 from '../assets/gallery/g11.jpg.jpeg';
import g12 from '../assets/gallery/g12.jpg.jpeg';
import g13 from '../assets/gallery/g13.jpg.jpeg';
import g14 from '../assets/gallery/g14.jpg.jpeg';
import g15 from '../assets/gallery/g15.jpg.jpeg';

const Gallery = () => {
  // Total 14 photos array (g6 folder me nahi hai)
  const photos = [g1, g2, g3, g4, g5, g7, g8, g9, g10, g11, g12, g13, g14, g15];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto Slider (3.5 Seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [photos.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? photos.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  return (
    <section id="gallery" className="py-12 px-4 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <span className="bg-blue-100 text-blue-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          Campus Life & Highlights
        </span>
        <h2 className="text-3xl font-extrabold text-gray-900 mt-2">Campus Glimpses</h2>
        <p className="text-gray-600 text-sm mt-1">
          Take a visual tour of स्व० सीताराम सिंह सेवा शिक्षण संस्थान
        </p>
      </div>

      {/* Main Slider Container */}
      <div className="relative w-full h-[350px] sm:h-[480px] md:h-[550px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-gray-900 group">
        
        {/* Main Photo - object-cover for full frame fit */}
        <img
          src={photos[currentIndex]}
          alt={`Campus Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover object-center transition-all duration-700 ease-in-out"
        />

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white w-10 h-10 rounded-full flex items-center justify-center transition cursor-pointer"
          aria-label="Previous Slide"
        >
          ❮
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white w-10 h-10 rounded-full flex items-center justify-center transition cursor-pointer"
          aria-label="Next Slide"
        >
          ❯
        </button>

        {/* Counter Badge */}
        <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm font-semibold">
          {currentIndex + 1} / {photos.length}
        </div>
      </div>

      {/* Thumbnail Bar */}
      <div className="flex gap-2.5 mt-4 overflow-x-auto pb-2 scrollbar-thin">
        {photos.map((img, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition cursor-pointer ${
              index === currentIndex 
                ? 'border-blue-600 scale-105 shadow-md' 
                : 'border-transparent opacity-50 hover:opacity-100'
            }`}
          >
            <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
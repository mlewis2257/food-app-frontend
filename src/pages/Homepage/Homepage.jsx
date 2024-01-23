import React, { useEffect } from 'react';


export default function Homepage() {
    
return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      {/* Main Content Container */}
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Slogan */}
        <h1 className="text-2xl font-semibold text-center text-gray-800">
          "Deliver Delight, Elevate Efficiency: Your Business, Our Priority!"
        </h1>

        {/* Mission Statement */}
        <p className="text-gray-600 text-center mt-4">
          At LunchBreak, our mission is to seamlessly connect businesses with a culinary journey that not only satisfies appetites but also fuels success. We strive to deliver convenience, choice, and quality, transforming every lunch break into a moment of delight for our valued partners.
        </p>

        {/* Get Started/Order Now */}
        <div className="relative mt-8">
          <img
            src="/background-image.jpg" // Replace with your background image source
            alt="Background Image"
            className="w-full h-auto rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-blue-500 text-white text-center p-4 rounded-lg">
              <h2 className="text-xl font-semibold">
                Get Started/Order Now
              </h2>
              <p className="text-sm mt-2">
                Ready to transform your lunch breaks?
              </p>
              <button className="bg-white text-blue-500 hover:bg-blue-400 mt-4 py-2 px-4 rounded-full">
                Start Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
);
};

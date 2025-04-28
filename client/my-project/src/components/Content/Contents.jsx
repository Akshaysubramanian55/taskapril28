import React from "react";
import contentimage from './images/contentpageimage.png';

const Contents = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center p-8 mx-auto" 
             style={{ 
                background: "linear-gradient(135deg, #ffffff 0%, #a2c6ff 1%, #0649E7 90%)" 
             }}>
            
            <div className="w-full md:w-1/2 mb-8 md:mb-0 flex flex-col items-start pl-8 md:pl-24">
                <h2 className="text-5xl font-bold mb-2 text-white">Land job interviews</h2>
                <h2 className="text-5xl font-bold mb-4 text-white">
                    <span style={{ color: "#0649E7" }} className="px-2 py-1 rounded">10x</span> faster
                </h2>
                <p className="text-lg mb-6 text-white max-w-md">
                    Custom-built resumes that match your goals, keywords, and recruiter expectations.
                </p>
                <button className="bg-white hover:bg-gray-100 text-blue-600 font-semibold py-3 px-4 rounded-full w-32 transition duration-300">
                    Get Started
                </button>
            </div>
            
            {/* Right side with image */}
            <div className="w-full md:w-1/2 flex justify-center">
                <img 
                    src={contentimage} 
                    alt="Content page illustration" 
                    className="max-w-full h-auto"
                />
            </div>
        </div>
    );
};

export default Contents;
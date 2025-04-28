import React from "react";
import whychooseusimg from './images/chooseus.png';

const Whychooseus = () => {
    return (
        <div className="flex flex-col items-start justify-center px-8 py-12 min-h-[90vh]">
            
            <div className="mb-8 lg:ml-50">
                <h1 className="text-3xl font-bold text-[#0649E7]">What our clients have to say</h1>
            </div>

            <div className="flex items-center gap-20 w-[70vw] lg:ml-60">
                {[1, 2, 3].map((_, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center w-full border-2 border-[#0649E7] rounded-lg overflow-hidden"
                    >
                        {/* Image Div */}
                        <div className="w-full h-32 flex items-center justify-center bg-white">
                            <img
                                src={whychooseusimg}
                                alt="Client"
                                className="object-contain w-20 h-20"
                            />
                        </div>

                        {/* Text Div */}
                        <div className="w-full bg-blue-600 text-white p-4 text-center">
                            <p className="text-base font-medium">
                                Holly is a senior executive who got over 10 job interviews and an offer she accepted.
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Buttons Container */}
            <div className="flex justify-center items-center gap-8 mt-16 w-full">
                {/* Button 1 */}
                <div className="w-[350px] h-[62px] flex items-center justify-center">
                    <button
                        className="w-full h-full bg-white text-[#0649E7] border-2 border-[#0649E7] rounded-[36px]">
                        More customer testimonials ↗
                    </button>
                </div>

                {/* Button 2 */}
                <div className="w-[211px] h-[62px] flex items-center justify-center">
                    <button
                        className="w-full h-full bg-[#0649E7] text-white border-2 border-[#0649E7] rounded-[36px]">
                        Get Started →
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Whychooseus;

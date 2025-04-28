import React from "react";
import tickmark from './imaages/tickmark.png'; // Make sure your image path is correct

const Advance = () => {
    return (
        <div className="bg-[#0649E7] p-10 rounded-[1vw] mt-12 mb-12 mx-36 relative">
           
            <div className="flex justify-between items-center text-white mb-6">
                <div>
                    <h1 className="text-2xl font-bold">Advance</h1>
                    <p className="text-lg">Top-tier support for serious job hunters:</p>

                    <div className="w-[30vw] h-[.1vh] bg-white mt-10"></div>
                </div>
                <div>
                    <h1 className="text-3xl font-extrabold">$150/week</h1>
                </div>
            </div>

            {/* Features List */}
            <div className="space-y-6 mb-20">
                {/* Row 1 */}
                <div className="flex items-center">
                    <div className="flex items-center mr-10">
                        <img src={tickmark} alt="tick" className="w-5 h-5 mr-2" />
                        <p className="text-white">Everything in Plus</p>
                    </div>
                    <div className="flex items-center">
                        <img src={tickmark} alt="tick" className="w-5 h-5 mr-2" />
                        <p className="text-white">Custom Resumes & Cover Letters</p>
                    </div>
                </div>

                {/* Row 2 */}
                <div className="flex items-center">
                    <div className="flex items-center mr-10">
                        <img src={tickmark} alt="tick" className="w-5 h-5 mr-2" />
                        <p className="text-white">20 fully customized applications/week</p>
                    </div>
                    <div className="flex items-center">
                        <img src={tickmark} alt="tick" className="w-5 h-5 mr-2" />
                        <p className="text-white">Help with complex job searches</p>
                    </div>
                </div>

                {/* Row 3 */}
                <div className="flex items-center">
                    <div className="flex items-center mr-10">
                        <img src={tickmark} alt="tick" className="w-5 h-5 mr-2" />
                        <p className="text-white">Access to senior resume experts, Founder & Exec Coaches</p>
                    </div>
                </div>
            </div>

            {/* Get Started Button */}
            <div className="absolute bottom-8 right-10">
                <button className="bg-white text-[#0649E7] font-semibold py-2 px-6 rounded-full text-lg flex items-center gap-2 hover:bg-gray-200 transition">
                    Get Started →
                </button>
            </div>
        </div>
    );
}

export default Advance;

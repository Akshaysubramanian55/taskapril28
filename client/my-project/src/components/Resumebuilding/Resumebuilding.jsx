import React from "react";
import Tickmark from './images/tickmark.png';

const Resumebuilding = () => {
    const plans = [
        {
            title: "Resume Rebuild",
            description: "Crafted for senior to VP-level professionals ready for their next big step.",
            price: "$1000",
            duration: "One Time",
            features: [
                "3× 30-min coaching",
                "Focused on storytelling, not just formatting",
                "Analyst + full application team on Pacific hours",
                "Tailored to your target industry, company, or role",
                "Direct work with our co-founder (ex-Google, JP Morgan)",
                "Executive coaching from UC Berkeley alum with 10+ yrs experience",
                "Resume Rebuild portfolio available upon request"
            ]
        },
        {
            title: "Interview Prep",
            description: "Two sessions to sharpen your story, confidence, and clarity — fast.",
            price: "$500",
            duration: "One Time",
            features: [
                "2× 45-min live coaching with our co-founder",
                "Real-time, practical feedback",
                "Build clarity, empathy & executive presence",
                "For senior and leadership roles — technical & non-technical",
            ]
        },
    ];

    return (
        <div className="flex flex-col items-center px-8 py-12 min-h-[90vh]">

            <div className="w-full max-w-[1100px] mb-12">
                <h1 className="text-4xl font-bold text-[#0649E7] text-left pl-2">
                    Resume Building & Coaching
                </h1>
                <p className="text-lg font-medium text-[#0649E7] text-left pl-2 w-[40vw] mt-4">
                    Let’s talk about where you’re headed — and how your resume can get you there. Schedule a call to get started.
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-10">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className="border-2 border-[#0649E7] rounded-[20px] w-[350px] p-6 flex flex-col justify-between items-center shadow-md hover:shadow-lg transition-all duration-300 text-[#0649E7]"
                    >
                        <div className="flex flex-col items-center flex-grow">
                            {/* Title */}
                            <h2 className="text-2xl font-semibold mb-2">{plan.title}</h2>

                            {/* Description */}
                            <p className="text-center text-[16px] font-normal mb-6 leading-snug">
                                {plan.description}
                            </p>

                            {/* Price and Duration */}
                            <div className="flex items-baseline mb-4">
                                <p className="text-5xl font-extrabold">{plan.price}</p>
                                <span className="text-lg ml-1">{plan.duration}</span>
                            </div>

                            {/* Features */}
                            <div className="flex flex-col gap-4 mb-6">
                                {plan.features.map((feature, idx) => (
                                    <div className="flex items-start gap-2" key={idx}>
                                        <img src={Tickmark} alt="Tick" className="w-5 h-5 mt-1" />
                                        <p className="text-[16px] leading-tight">{feature}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Get Started Button */}
                        <button className="bg-[#0649E7] text-white text-lg font-semibold py-2 px-6 rounded-full hover:bg-blue-700 transition-all duration-300 mt-auto">
                            Get Started →
                        </button>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Resumebuilding;

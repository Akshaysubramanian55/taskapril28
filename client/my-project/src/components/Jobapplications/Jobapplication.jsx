import React from "react";
import Tickmark from './images/tickmark.png';

const Jobapplication = () => {
    const plans = [
        {
            title: "April Promo",
            price: "$35",
            duration: "/week",
            features: [
                "Curated jobs from 1M+ listings, refreshed every 48 hours",
                "Up to 20 human-applied roles per week (no bots, no fluff — just real company sites)",
                "Need more? Add extra apps for just $1.5 each",
                "Your own dedicated application analyst.",
                "Personalized with up to 10 filters & 5 job titles"
            ]
        },
        {
            title: "Standard Plan",
            price: "$50",
            duration: "/week",
            features: [
                "All the perks of the Promo Plan, plus:",
                "Resume review & story-focused feedback",
                "Dedicated search specialist",
                "Up to 50 job apps/week",
                "Analyst support within 6 hours (SLA/PST hours)"
            ]
        },
        {
            title: "Premium Plan",
            price: "$100",
            duration: "/week",
            features: [
                "Everything in Starter, with more muscle:",
                "Up to 75 apps/week",
                "Apply to 15 job titles",
                "Analyst + full application team on Pacific hours"
            ]
        }
    ];

    return (
        <div className="flex flex-col items-center px-8 py-12 min-h-[90vh]">

            <div className="w-full max-w-[1100px] mb-12">
                <h1 className="text-4xl font-bold text-[#0649E7] text-left pl-2">
                    Job Application Service Plans
                </h1>
            </div>

            <div className="flex flex-wrap justify-center gap-10">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className="border-2 border-[#0649E7] rounded-[20px] w-[300px] p-6 flex flex-col justify-between items-center shadow-md hover:shadow-lg transition-all duration-300"
                    >
                        <div className="flex flex-col items-center flex-grow">
                            <h2 className="text-xl font-semibold text-[#022183] mb-6">{plan.title}</h2>

                            <div className="flex items-baseline mb-4">
                                <p className="text-5xl font-extrabold text-[#0649E7]">{plan.price}</p>
                                <span className="text-lg text-[#0649E7] ml-1">{plan.duration}</span>
                            </div>

                            <div className="flex flex-col gap-4 mb-6">
                                {plan.features.map((feature, idx) => (
                                    <div className="flex items-start gap-2" key={idx}>
                                        <img src={Tickmark} alt="Tick" className="w-5 h-5 mt-1" />
                                        <p className="text-[#022183] text-[16px] leading-tight">{feature}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button className="bg-[#0649E7] text-white text-lg font-semibold py-2 px-6 rounded-full hover:bg-blue-700 transition-all duration-300 mt-auto">
                            Get Started →
                        </button>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Jobapplication;

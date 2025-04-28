import React from "react";
import Assests from './images/Asset.png';
import Profile from './images/Profile.png';
import Star from './images/Star.png';

const Ourbenefits = () => {
    const cards = [
        {
            image: Assests,
            title: "Tried, Tested, Trusted",
            description: "Built by folks with 40+ years in tech and hiring — we know the game, and we’ve got your back."
        },
        {
            image: Profile,
            title: "Personalized Guidance",
            description: "We tailor our services to your unique needs, ensuring you get the best career support possible."
        },
        {
            image: Star,
            title: "Proven Success",
            description: "Our clients have landed roles at top companies worldwide. Your success story starts here."
        }
    ];

    return (
        <div className="flex flex-col items-center justify-center px-8 py-12 min-h-[90vh]">

            {/* Heading */}
            <div className="w-full max-w-[1100px] mb-12">
                <h1 className="text-4xl font-bold text-[#022183] text-left pl-8">Why Choose Us?</h1>
            </div>

            {/* Cards Container */}
            <div className="flex flex-wrap justify-center gap-10">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="w-[300px] h-[300px] border-2 border-[#0649E7] rounded-[35px] flex flex-col items-center p-6 text-center shadow-md hover:shadow-lg transition-all duration-300"
                    >
                        {/* Different Image per card */}
                        <div className="mb-6">
                            <img src={card.image} alt={card.title} className="w-24 h-24 object-contain" />
                        </div>

                        {/* Title */}
                        <div className="mb-4">
                            <h2 className="text-[#022183] font-semibold text-[24px] leading-[40.79px] tracking-[-0.04em]">
                                {card.title}
                            </h2>
                        </div>

                        {/* Description */}
                        <div>
                            <p className="text-[#022183] font-normal text-[18px] leading-[104%] tracking-[-0.02em]">
                                {card.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Ourbenefits;

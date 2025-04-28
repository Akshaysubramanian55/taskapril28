import React from "react";
import aboutusimage1 from './images/aboutusimage1.svg';
import aboutusimage2 from './images/aboutusimage2.svg';

const Aboutus = () => {
    return (
        <div
            style={{
                background: 'linear-gradient(to bottom, #010F3A 0%, #022183 60%, #0649E7 100%)',
                padding: '60px 0',
            }}
            className="text-white"
        >
            <h1 
                className="text-4xl font-bold mb-16" 
                style={{
                    textAlign: 'left',
                    paddingLeft: '15vw',  // Space on the left
                    marginRight: '10vw',  // Margin on the right
                }}
            >
                About Us
            </h1>

            <div className="max-w-7xl mx-auto px-6 flex flex-col gap-24">
                {/* First Block */}
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="flex-1 flex justify-center">
                        <img 
                            src={aboutusimage1} 
                            alt="About Us 1" 
                            style={{
                                width: '262.34px',
                                height: '262.34px',
                                objectFit: 'cover',
                                borderRadius: '20px',
                            }}
                        />
                    </div>
                    <div className="flex-1">
                        <p 
                            className="text-lg leading-relaxed"
                            style={{
                                fontWeight: '700',
                                fontSize: '18px',
                                lineHeight: '104%',
                                letterSpacing: '-2%',
                            }}
                        >
                            Ashwin is the founder of mobiusengine.ai. He is an accomplished senior executive with over 20 years
                            of experience in cloud infrastructure and financial services. With over 2 decades of experience at
                            Google and JP Morgan, Ashwin held various product and GTM roles. Ashwin is an MBA holder from Yale University.
                            <br /><br />
                            Ashwin's vision with Mobius is to give job seekers a significant advantage in securing the roles of their dreams.
                        </p>
                    </div>
                </div>

                {/* Second Block */}
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="flex-1 flex justify-center">
                        <img 
                            src={aboutusimage2} 
                            alt="About Us 2" 
                            style={{
                                width: '262.34px',
                                height: '262.34px',
                                objectFit: 'cover',
                                borderRadius: '20px',
                            }}
                        />
                    </div>
                    <div className="flex-1">
                        <p 
                            className="text-lg leading-relaxed"
                            style={{
                                fontWeight: '700',
                                fontSize: '18px',
                                lineHeight: '104%',
                                letterSpacing: '-2%',
                            }}
                        >
                            Nicole is an Executive coach at Mobius specializing in resume builds and career advisory.
                            <br /><br />
                            With a B.S. in Business Administration from UC Berkeley and 7+ years of experience in AI-driven product strategy, she has seen firsthand how the proper positioning opens doors. She takes a targeted, results-driven approach to help clients confidently stand out and land roles that truly match their skills and potential.
                        </p>
                    </div>
                </div>

                {/* Bottom Links Block */}
                <div 
                    style={{
                        marginTop: '20px', 
                        textAlign: 'center', 
                        fontWeight: '700',
                        fontSize: '18px',
                        letterSpacing: '-2%',
                    }}
                >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
                        <a href="/board-of-advisors" 
                            style={{
                                color: 'white',
                                textDecoration: 'none',
                                borderBottom: '2px solid white', 
                                marginLeft: '25vw',
                                textAlign: 'center',  // Center text within the link
                            }}
                        >
                            Learn more about our Board of Advisors​ ↗
                        </a>

                        <a href="/board-of-advisors" 
                            style={{
                                color: 'white',
                                textDecoration: 'none',
                                borderBottom: '2px solid white', 
                                marginLeft: '20vw',
                                textAlign: 'center',  // Center text within the link
                            }}
                        >
                            Follow us on our LinkedIn page ↗
                        </a>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Aboutus;

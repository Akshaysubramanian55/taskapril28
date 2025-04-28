import React from "react";
import one from './images/1.png';
import two from './images/2.png';
import three from './images/3.png';
import four from './images/4.png';
import Line from './images/line.png';

const Howwework = () => {
    return (
        <div className="py-12 bg-white text-center">
            {/* Heading */}
            <div>
                <h2
                    style={{
                        fontWeight: 500,
                        fontSize: '40px',
                        lineHeight: '104%',
                        letterSpacing: '-4%',
                        marginBottom: '60px',
                    }}
                >
                    How We Work
                </h2>
            </div>

            <div className="flex justify-center gap-40 flex-wrap">
                <div className="flex flex-col items-start">
                    <img src={one} alt="Step 1" className="w-20 h-20" />
                    <img src={Line} alt="Line" className="my-4 w-40" />
                    <p className="font-semibold text-lg text-[#0649E7]">Submit Intake Form</p>
                </div>

                <div className="flex flex-col  items-start">
                    <img src={two} alt="Step 2" className="w-20 h-20" />
                    <img src={Line} alt="Line" className="my-4 w-40" />
                    <p className="font-semibold text-lg w-[15vw] text-[#0649E7]">We do the search and curation for list of jobs</p>
                </div>

                <div className="flex flex-col items-start">
                    <img src={three} alt="Step 3" className="w-20 h-20" />
                    <img src={Line} alt="Line" className="my-4 w-40" />
                    <p className="font-semibold text-lg w-[15vw] text-[#0649E7]">You approve, we do the tedious part (applying)</p>
                </div>

                <div className="flex flex-col items-start ">
                    <img src={four} alt="Step 4" className="w-20 h-20" />
                    <img src={Line} alt="Line" className="my-4  w-40" />
                    <p className="font-semibold text-lg text-[#0649E7]">Get Hired</p>
                </div>
            </div>
        </div>
    );
}

export default Howwework;

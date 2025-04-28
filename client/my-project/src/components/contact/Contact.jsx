import React from "react";
import Contactarrow from './images/contactarrow.svg';

const Contact = () => {
    return (
        <div className="flex justify-center my-12">
            <div 
                className="bg-blue-600 text-white flex items-center justify-between px-12"
                style={{
                    width: "1408px",
                    height: "354px",
                    borderRadius: "35px",
                }}
            >
                <div className="flex flex-col items-center text-center">
                    <div className="uppercase font-medium" style={{
                        fontSize: "40px",
                        lineHeight: "104%",
                        letterSpacing: "-4%",
                    }}>
                        <div>Still Have</div>
                        <div className="mt-2 font-bold">DOUBTS?</div>
                    </div>
                    
                </div>
                <h1 className="text-5xl font-bold mt-6">Contact Us</h1>
                <img src={Contactarrow} alt="Contact arrow" className="h-16" />
            </div>
        </div>
    );
};

export default Contact;

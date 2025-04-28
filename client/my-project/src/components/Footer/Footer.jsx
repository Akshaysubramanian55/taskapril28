import React from "react";
import logoo from './images/logoo.svg';
import linkedin from './images/linkedinimage.svg'
const Footer = () => {
    return (
        <footer className="bg-white py-8 px-8">
            {/* Logo at top left */}
            <div className="mb-8">
                <img src={logoo} alt="Company Logo" className="h-12" />
            </div>

            {/* Content in a row at the bottom with adjusted gaps */}
            <div className="flex flex-col md:flex-row md:items-start">
                <div className="md:mr-16">
                    <h3 className="text-lg font-semibold text-blue-600 mb-2">Address</h3>
                    <p className="text-blue-600">
                        1875 Mission St Ste 103 #450<br />
                        San Francisco, CA 94103
                    </p>
                </div>

                <div className="mt-4 md:mt-0 md:mr-16">
                    <h3 className="text-lg font-semibold text-blue-600 mb-2">Email</h3>
                    <p className="text-blue-600">
                        info@company.com
                    </p>
                </div>

                <div className="mt-4 md:mt-0 md:mr-16">
                    <h3 className="text-lg font-semibold text-blue-600 mb-2">Telephone</h3>
                    <p className="text-blue-600">
                        650-889-6026
                    </p>
                </div>

                {/* Social icons pushed to the right */}
                <div className="mt-4 md:mt-0 md:ml-auto">
                    <h3 className="text-lg font-semibold text-blue-600 mb-2">socials</h3>
                    <div className="flex space-x-4">
                        <img src={linkedin} alt="linkedin" />

                        <img src={linkedin} alt="linkedin" />

                    </div>
                </div>
            </div>

            <div className="mt-6 bg-blue-600 -mx-8 px-8 py-4 flex flex-col md:flex-row md:justify-between md:items-center">
                <p className="text-white text-sm">
                    © {new Date().getFullYear()} Your Company. All rights reserved.
                </p>
                
                <div className="flex mt-4 md:mt-0">
                    <a href="#" className="text-white text-sm mr-6 hover:underline">
                        Privacy Policy
                    </a>
                    <a href="#" className="text-white text-sm hover:underline">
                        Terms & Conditions
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
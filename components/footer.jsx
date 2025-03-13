import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { MdPhone, MdEmail } from 'react-icons/md';

const Footer = () => {
    return (
        <footer className="bg-[#5C4B99]  primary-color text-white py-4">
            <div className=" container mx-auto px-4 flex flex-col ">
                <div className='w-full'>
                    <h6 className=' text-center text-5xl mb-5'>Eventz</h6>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Left side */}
                    <div className="mb-4 md:mb-0">
                        <p>Privacy Policy</p>
                    </div>

                    {/* Center - Social Media Icons */}
                    <div className="flex gap-4 mb-4 md:mb-0">
                        <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                            <FaFacebook className="w-4 h-4 text-[#5C4B99]" />
                        </a>
                        <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                            <FaTwitter className="w-4 h-4 text-[#5C4B99]" />
                        </a>
                        <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                            <FaLinkedinIn className="w-4 h-4 text-[#5C4B99]" />
                        </a>
                        <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                            <MdPhone className="w-4 h-4 text-[#5C4B99]" />
                        </a>
                        <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                            <MdEmail className="w-4 h-4 text-[#5C4B99]" />
                        </a>
                    </div>

                    {/* Right side */}
                    <div className="text-center md:text-right">
                        <p>Terms & Condition</p>
                        
                    </div>
                </div>
                    <div className="copyright w-full text-center pt-10 pb-10"><p className="text-sm mt-2">Copyright © 2015. All Rights Reserved</p></div>
            </div>
        </footer>
    );
}

export default Footer;
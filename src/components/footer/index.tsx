import { tw } from 'twind';
import { Linkedin, Instagram, Facebook, Mail, Phone, MapPin, X } from 'lucide-react'; // Replaced TwitterIcon with X

const Footer = () => (
    <footer className={tw`bg-[rgba(26,26,26,1)] text-white pt-16 pb-0 relative`}>
        <div
            className={tw`mx-[10px] -mt-[44px] rounded-t-[20px] p-[2px]`}
                style={{
                    background: 'linear-gradient(180deg, #198DFD -16.06%, rgba(62, 45, 180, 0.16) 100%)',
                    borderBottom: 'none',
                    paddingBottom: 'unset',
                }}
        >
            <div className={tw`bg-[rgba(26,26,26,1)] rounded-t-[18px] p-6`}>
                <div className={tw`max-w-7xl mx-auto px-6 lg:px-12`} style={{ paddingTop: '5rem' }}>
                    {/* Top Section */}
                    <div className={tw`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-10`}>
                        {/* Logo & Socials */}
                        <div>
                            <img src="/logo.svg" alt="Company Logo" className={tw`mb-4`} />
                            <p className={tw`text-lg font-semibold mb-3 text-white mt-8 mb-9`}>Follow On</p>
                            {/* Made the "Follow On" text larger and bolder */}
                            <div className={tw`flex space-x-2 mt-4`}>
                                <X className={tw`text-white hover:text-blue-500 cursor-pointer`} size={22} />
                                {/* Replaced Twitter with X */}
                                <Linkedin className={tw`text-white hover:text-blue-500 cursor-pointer`} size={22} />
                                <Instagram className={tw`text-white hover:text-blue-500 cursor-pointer`} size={22} />
                                <Facebook className={tw`text-white hover:text-blue-500 cursor-pointer`} size={22} />
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className={tw`text-lg font-semibold mb-3 text-white`}>Contact Us</h4>
                            <p className={tw`text-gray-400 text-sm flex items-center mb-4`}>
                                <Phone className={tw`mr-2`} size={18} /> +1 (123) 123-1234
                            </p>
                            <p className={tw`text-gray-400 text-sm flex items-center mb-4`}>
                                <Mail className={tw`mr-2`} size={18} /> namecompany@example.com
                            </p>
                            <p className={tw`text-gray-400 text-sm flex items-center`}>
                                <MapPin className={tw`mr-2`} size={18} /> USA DUMMY LOCATION
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className={tw`text-lg font-semibold mb-3 text-white`}>Useful Link</h4>
                            <ol className={tw`text-gray-400 text-sm space-y-4`}>
                                <li>
                                    <a href="#" className={tw`hover:text-blue-500`}>
                                        Services
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className={tw`hover:text-blue-500`}>
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className={tw`hover:text-blue-500`}>
                                        Our Services
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className={tw`hover:text-blue-500`}>
                                        Industry
                                    </a>
                                </li>
                            </ol>
                        </div>

                        {/* Newsletter Signup */}
                        <div>
                            <h4 className={tw`text-lg font-semibold mb-3 text-white`}>Sign Me Up!</h4>
                            <div
                                className={tw`flex items-center border border-gray-600 rounded-full bg-gray-800 px-4 py-2`}
                                style={{
                                    border: '2px solid rgba(48, 80, 206, 1)',
                                    background: 'transparent',
                                }}
                            >
                                <input
                                    type="email"
                                    placeholder="Enter your e-mail address"
                                    className={tw`flex-1 bg-transparent px-2 text-sm text-gray-300 outline-none`}
                                />
                            </div>
                            <button
                                className={tw`mt-4 px-6 py-3 rounded-full text-white font-bold flex items-center`}
                                style={{
                                    background: 'linear-gradient(282.29deg, #3E2DB4 -39.11%, #198DFD 117.26%)',
                                }}
                            >
                                Submit ↗
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Bottom Section with Line Above Terms */}
            <div className={tw`pt-6 bg-[rgb(26,26,26,1)] pb-4 pt-4`}>
                {/* Horizontal line above the copyright/terms section */}
                <div className={tw`border-t-1 border-[rgb(54,64,194,1)] opacity-50`}></div>

                {/* Copyright and Terms Links */}
                <div className={tw`flex justify-between text-gray-500 text-sm mt-4`}>
                    <div className={tw`ml-8`}>
                        <p>© Copyright 2025</p>
                    </div>
                    <div className={tw`mr-8 flex space-x-6`}>
                        <a href="#" className={tw`hover:text-white`}>
                            Privacy Policy
                        </a>
                        <a href="#" className={tw`hover:text-white`}>
                            Terms and Conditions
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;

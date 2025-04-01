import { tw } from 'twind';
import { Twitter, Linkedin, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => (
    <footer className={tw`bg-[#0D0D0D] text-white pt-16 pb-6 relative`}>
        <div
            className={tw`mx-[10px] -mt-[44px] rounded-t-[20px] p-[2px]`}
            style={{
                background: 'linear-gradient(180deg, #198DFD -16.06%, rgba(62, 45, 180, 0.16) 100%)',
                borderBottom: 'none',
            }}
        >
            <div className={tw`bg-[#0D0D0D] rounded-t-[18px] p-6`}>
                <div className={tw`max-w-7xl mx-auto px-6 lg:px-12`} style={{ paddingTop: '5rem' }}>
                    {/* Top Section */}
                    <div className={tw`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-10`}>
                        {/* Logo & Socials */}
                        <div>
                            <img src="/logo.svg" alt="Company Logo" className={tw`mb-4`} />
                            <p className={tw`text-gray-400 text-sm`}>Follow On</p>
                            <div className={tw`flex space-x-4 mt-4`}>
                                <Twitter className={tw`text-gray-400 hover:text-blue-500 cursor-pointer`} size={22} />
                                <Linkedin className={tw`text-gray-400 hover:text-blue-500 cursor-pointer`} size={22} />
                                <Instagram className={tw`text-gray-400 hover:text-blue-500 cursor-pointer`} size={22} />
                                <Facebook className={tw`text-gray-400 hover:text-blue-500 cursor-pointer`} size={22} />
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className={tw`text-lg font-semibold mb-3 text-white`}>Contact Us</h4>
                            <p className={tw`text-gray-400 text-sm flex items-center mb-2`}>
                                <Phone className={tw`mr-2 text-blue-500`} size={16} /> +1 (123) 123-1234
                            </p>
                            <p className={tw`text-gray-400 text-sm flex items-center mb-2`}>
                                <Mail className={tw`mr-2 text-blue-500`} size={16} /> namecompany@example.com
                            </p>
                            <p className={tw`text-gray-400 text-sm flex items-center`}>
                                <MapPin className={tw`mr-2 text-blue-500`} size={16} /> USA DUMMY LOCATION
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className={tw`text-lg font-semibold mb-3 text-white`}>Useful Link</h4>
                            <ul className={tw`text-gray-400 text-sm space-y-2`}>
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
                            </ul>
                        </div>

                        {/* Newsletter Signup */}
                        <div>
                            <h4 className={tw`text-lg font-semibold mb-3 text-white`}>Sign Me Up!</h4>
                            <div
                                className={tw`flex items-center border border-gray-600 rounded-full bg-gray-800 px-4 py-2`}
                            >
                                <input
                                    type="email"
                                    placeholder="Enter your e-mail address"
                                    className={tw`flex-1 bg-transparent px-2 text-sm text-gray-300 outline-none`}
                                />
                            </div>
                            <button
                                className={tw`mt-4 bg-blue-600 px-6 py-3 rounded-full text-white font-bold flex items-center`}
                            >
                                Submit ↗
                            </button>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className={tw`text-center text-gray-500 text-sm pt-6`}>
                        © Copyright 2024 |
                        <a href="#" className={tw`hover:text-white ml-2`}>
                            Privacy Policy
                        </a>{' '}
                        &amp;
                        <a href="#" className={tw`hover:text-white ml-2`}>
                            Terms and Conditions
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;

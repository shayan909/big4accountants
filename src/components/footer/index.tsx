import { tw } from 'twind';
import { Twitter, Linkedin, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => (
    <footer
        className={tw`bg-gradient-to-b from-black to-blue-900 text-white pt-24 min-h-[500px] flex flex-col justify-between relative z-0`}
    >
        <div className={tw`max-w-7xl mx-auto px-6 lg:px-12`} style={{ marginTop: '116px' }}>
            {/* Top Section */}
            <div className={tw`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-gray-700 pb-10`}>
                {/* Logo & Socials */}
                <div>
                    <p className={tw`mt-4 text-gray-400 text-sm`}>Connect with us on social media.</p>
                    <div className={tw`flex space-x-4 mt-4`}>
                        <Twitter className={tw`text-gray-400 hover:text-blue-500 cursor-pointer`} size={22} />
                        <Linkedin className={tw`text-gray-400 hover:text-blue-500 cursor-pointer`} size={22} />
                        <Instagram className={tw`text-gray-400 hover:text-blue-500 cursor-pointer`} size={22} />
                        <Facebook className={tw`text-gray-400 hover:text-blue-500 cursor-pointer`} size={22} />
                    </div>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className={tw`text-lg font-semibold mb-3 text-gray-300`}>Contact Us</h4>
                    <p className={tw`text-gray-400 text-sm flex items-center mb-2`}>
                        <Phone className={tw`mr-2 text-blue-500`} size={16} /> +1 (123) 123-1234
                    </p>
                    <p className={tw`text-gray-400 text-sm flex items-center mb-2`}>
                        <Mail className={tw`mr-2 text-blue-500`} size={16} /> namecompany@example.com
                    </p>
                    <p className={tw`text-gray-400 text-sm flex items-center`}>
                        <MapPin className={tw`mr-2 text-blue-500`} size={16} /> USA Dummy Location
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className={tw`text-lg font-semibold mb-3 text-gray-300`}>Quick Links</h4>
                    <ul className={tw`text-gray-400 text-sm space-y-2`}>
                        <li>
                            <a href="#" className={tw`hover:text-blue-500 transition-colors duration-200`}>
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#" className={tw`hover:text-blue-500 transition-colors duration-200`}>
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="#" className={tw`hover:text-blue-500 transition-colors duration-200`}>
                                Industry
                            </a>
                        </li>
                        <li>
                            <a href="#" className={tw`hover:text-blue-500 transition-colors duration-200`}>
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Newsletter Signup */}
                <div>
                    <h4 className={tw`text-lg font-semibold mb-3 text-gray-300`}>Stay Updated</h4>
                    <p className={tw`text-gray-400 text-sm mb-4`}>Subscribe to get our latest updates.</p>
                    <div className={tw`flex items-center border border-gray-600 rounded-full bg-gray-800`}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className={tw`flex-1 bg-transparent px-4 py-3 text-sm text-gray-300 outline-none`}
                        />
                        <button
                            className={tw`bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition rounded-full`}
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className={tw`text-center text-gray-500 text-sm pt-6`}>
                © {new Date().getFullYear()} Big 4 |
                <a href="#" className={tw`hover:text-white ml-2`}>
                    Privacy Policy
                </a>{' '}
                |
                <a href="#" className={tw`hover:text-white ml-2`}>
                    Terms & Conditions
                </a>
            </div>
        </div>
    </footer>
);

export default Footer;

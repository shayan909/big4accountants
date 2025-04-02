'use client';

import { tw } from 'twind';
import { motion } from 'framer-motion';

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.5 } },
};

export default function ServicesSection() {
    return (
        <section className={tw`relative py-28 bg-gradient-to-r from-gray-900 to-gray-800 text-white font-satoshi`}>
            <div className={tw`max-w-[1800px] mx-auto px-4`}>
                {/* New Layout - Heading and text above first column */}
                <motion.div
                    className={tw`grid grid-cols-12 gap-6 mb-16`}
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                >
                    <motion.div
                        className={tw`col-span-4 flex flex-col`}
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                    >
                        <h2 className={tw`text-6xl font-bold mb-6 pl-8`}>Our Services</h2>{' '}
                        <p className={tw`text-gray-300 text-lg pl-8`}>
                            If everyone used the identical lorem ipsum copy, search engines would flag it for plagiarism
                            and downgrade the site for its lack of helpful content for the reader.
                        </p>
                    </motion.div>

                    {/* Spacer columns */}
                    <div className={tw`col-span-6`}></div>

                    {/* Learn More button above fifth column */}
                    <div className={tw`col-span-2 flex justify-center items-end`}>
                        <a
                            href="#"
                            className={tw`px-8 py-3 rounded-full font-medium transition-colors`}
                            style={{
                                background: 'linear-gradient(167.83deg, #0408EA 8.87%, #020484 106.43%)',
                            }}
                        >
                            Learn More
                        </a>
                    </div>
                </motion.div>

                {/* Services Grid with staggered animation */}
                <motion.div
                    className={tw`grid grid-cols-12 gap-6`}
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    {/* First Column */}
                    <motion.div className={tw`col-span-3 flex flex-col h-full`} variants={fadeIn}>
                        <div className={tw`relative flex-grow group h-[550px]`}>
                            <img
                                src="/services/Advisory Financial-Strategy.webp"
                                alt="Compliance"
                                className={tw`w-full h-full object-cover rounded-xl transition-all duration-500 group-hover:scale-105`}
                            />
                            <div
                                className={tw`absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl`}
                            />
                            <div className={tw`absolute bottom-6 left-6 right-6 flex justify-between items-end`}>
                                <h3 className={tw`font-bold text-lg group-hover:text-xl transition-all duration-300`}>
                                    Regulation & Compliance
                                </h3>
                                <div
                                    className={tw`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors`}
                                    style={{
                                        background: 'linear-gradient(167.83deg, #0408EA 8.87%, #020484 106.43%)',
                                    }}
                                >
                                    <span className={tw`text-white text-xl`}>→</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Second Column */}
                    <motion.div className={tw`col-span-2 flex flex-col h-full gap-6`} variants={fadeIn}>
                        <div className={tw`relative flex-grow group h-[267px]`}>
                            <img
                                src="/services/Audit Risk-Management.webp"
                                alt="Audit"
                                className={tw`w-full h-full object-cover rounded-xl transition-all duration-500 group-hover:scale-105`}
                            />
                            <div
                                className={tw`absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl`}
                            />
                            <div className={tw`absolute bottom-6 left-6 right-6 flex justify-between items-end`}>
                                <h3 className={tw`font-bold text-base group-hover:text-lg transition-all duration-300`}>
                                    Audit & Risk Management
                                </h3>
                                <div
                                    className={tw`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors`}
                                    style={{
                                        background: 'linear-gradient(167.83deg, #0408EA 8.87%, #020484 106.43%)',
                                    }}
                                >
                                    <span className={tw`text-white text-lg`}>→</span>
                                </div>
                            </div>
                        </div>
                        <div className={tw`relative flex-grow group h-[267px]`}>
                            <img
                                src="/services/Bookkeeping Outsourced-Finance.webp"
                                alt="Bookkeeping"
                                className={tw`w-full h-full object-cover rounded-xl transition-all duration-500 group-hover:scale-105`}
                            />
                            <div
                                className={tw`absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl`}
                            />
                            <div className={tw`absolute bottom-6 left-6 right-6 flex justify-between items-end`}>
                                <h3 className={tw`font-bold text-base group-hover:text-lg transition-all duration-300`}>
                                    Bookkeeping & Finance
                                </h3>
                                <div
                                    className={tw`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors`}
                                    style={{
                                        background: 'linear-gradient(167.83deg, #0408EA 8.87%, #020484 106.43%)',
                                    }}
                                >
                                    <span className={tw`text-white text-lg`}>→</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Blue Card */}
                    <motion.div className={tw`col-span-2 flex items-center justify-center h-full`} variants={fadeIn}>
                        <div
                            className={tw`w-full h-full p-6 rounded-xl shadow-2xl flex flex-col justify-center items-center text-center text-white`}
                            style={{
                                background: 'linear-gradient(167.83deg, #0408EA 8.87%, #020484 106.43%)',
                            }}
                        >
                            <img
                                src="/services/advisoryicon.svg"
                                alt="Advisory"
                                className={tw`w-16 h-16 object-cover rounded-full mb-4`}
                            />
                            <h3 className={tw`text-xl font-bold mb-3`}>Advisory & Financial Strategy</h3>
                            <p className={tw`text-gray-200 mb-6 leading-relaxed text-sm max-w-[80%]`}>
                                If everyone used the identical lorem ipsum copy, search engines would flag it for
                                plagiarism.
                            </p>
                            <a href="#" className={tw`text-white font-medium underline hover:no-underline text-sm`}>
                                Learn More
                            </a>
                        </div>
                    </motion.div>

                    {/* Fourth Column */}
                    <motion.div className={tw`col-span-2 flex flex-col h-full gap-6`} variants={fadeIn}>
                        <div className={tw`relative flex-grow group h-[267px]`}>
                            <img
                                src="/services/Digital Transformation.webp"
                                alt="ERP"
                                className={tw`w-full h-full object-cover rounded-xl transition-all duration-500 group-hover:scale-105`}
                            />
                            <div
                                className={tw`absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl`}
                            />
                            <div className={tw`absolute bottom-6 left-6 right-6 flex justify-between items-end`}>
                                <h3 className={tw`font-bold text-base group-hover:text-lg transition-all duration-300`}>
                                    Digital Transformation & ERP Solutions
                                </h3>
                                <div
                                    className={tw`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors`}
                                    style={{
                                        background: 'linear-gradient(167.83deg, #0408EA 8.87%, #020484 106.43%)',
                                    }}
                                >
                                    <span className={tw`text-white text-lg`}>→</span>
                                </div>
                            </div>
                        </div>
                        <div className={tw`relative flex-grow group h-[267px]`}>
                            <img
                                src="/services/Financial Reports.webp"
                                alt="Analytics"
                                className={tw`w-full h-full object-cover rounded-xl transition-all duration-500 group-hover:scale-105`}
                            />
                            <div
                                className={tw`absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl`}
                            />
                            <div className={tw`absolute bottom-6 left-6 right-6 flex justify-between items-end`}>
                                <h3 className={tw`font-bold text-base group-hover:text-lg transition-all duration-300`}>
                                    Financial Reporting & Analytics
                                </h3>
                                <div
                                    className={tw`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors`}
                                    style={{
                                        background: 'linear-gradient(167.83deg, #0408EA 8.87%, #020484 106.43%)',
                                    }}
                                >
                                    <span className={tw`text-white text-lg`}>→</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Fifth Column */}
                    <motion.div className={tw`col-span-3 flex flex-col h-full`} variants={fadeIn}>
                        <div className={tw`relative flex-grow group h-[550px]`}>
                            <img
                                src="/services/Financing Funding-Assistance.webp"
                                alt="Funding"
                                className={tw`w-full h-full object-cover rounded-xl transition-all duration-500 group-hover:scale-105`}
                            />
                            <div
                                className={tw`absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl`}
                            />
                            <div className={tw`absolute bottom-6 left-6 right-6 flex justify-between items-end`}>
                                <h3 className={tw`font-bold text-lg group-hover:text-xl transition-all duration-300`}>
                                    Financing & Funding Assistance
                                </h3>
                                <div
                                    className={tw`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors`}
                                    style={{
                                        background: 'linear-gradient(167.83deg, #0408EA 8.87%, #020484 106.43%)',
                                    }}
                                >
                                    <span className={tw`text-white text-xl`}>→</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

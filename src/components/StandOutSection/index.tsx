'use client';

import Image from 'next/image';
import { tw } from 'twind';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const StandOutSection = () => {
    return (
        <section className={tw(`w-full py-28 px-6 bg-white text-gray-900`)}>
            <div className={tw(`max-w-7xl mx-auto`)}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className={tw(`text-center mb-20`)}
                >
                    <h2 className={tw(`text-4xl md:text-5xl font-bold mb-6`)}>How We Stand Out</h2>
                    <div className={tw(`w-24 h-1 bg-blue-600 mx-auto mb-8`)}></div>
                    <p className={tw(`text-xl text-gray-600 max-w-3xl mx-auto`)}>
                        Distinctive advantages that set us apart in the financial services landscape
                    </p>
                </motion.div>

                {/* Content */}
                <div className={tw(`flex flex-col lg:flex-row gap-16 items-center`)}>
                    {/* Text Content */}
                    <div className={tw(`lg:w-1/2`)}>
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className={tw(`space-y-8`)}
                        >
                            <div className={tw(`flex items-start gap-4`)}>
                                <div className={tw(`w-12 h-12 flex items-center justify-center text-blue-600`)}>
                                    <CheckCircle size={48} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h3 className={tw(`text-2xl font-semibold mb-3`)}>Industry-Leading Network</h3>
                                    <p className={tw(`text-gray-600`)}>
                                        Through our association with big names in finance, we access emerging trends,
                                        technologies, and regional best practices to keep you ahead.
                                    </p>
                                </div>
                            </div>

                            <div className={tw(`flex items-start gap-4`)}>
                                <div className={tw(`w-12 h-12 flex items-center justify-center text-blue-600`)}>
                                    <CheckCircle size={48} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h3 className={tw(`text-2xl font-semibold mb-3`)}>Innovative Approach</h3>
                                    <p className={tw(`text-gray-600`)}>
                                        Combining deep expertise with cutting-edge technology for unmatched financial
                                        solutions that prioritize precision, transparency, and innovation.
                                    </p>
                                </div>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={tw(`
                  mt-6 px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800
                  text-white font-medium rounded-lg
                  hover:shadow-lg transition-all duration-300
                  inline-flex items-center
                `)}
                            >
                                Learn More
                                <svg
                                    className={tw(`ml-2 w-5 h-5`)}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5l7 7-7 7"
                                    ></path>
                                </svg>
                            </motion.button>
                        </motion.div>
                    </div>

                    {/* Image Container with Two Images */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className={tw(`lg:w-1/2 relative h-[400px]`)}
                    >
                        {/* Large Image */}
                        <div className={tw(`absolute inset-0 rounded-2xl overflow-hidden shadow-2xl`)}>
                            <Image
                                src="/standout2.png"
                                alt="Financial network"
                                fill
                                className={tw(`object-cover`)}
                                priority
                            />
                            <div className={tw(`absolute inset-0 bg-gradient-to-t from-black/30 to-transparent`)}></div>
                        </div>

                        {/* Small Overlapping Image */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className={tw(
                                `absolute -bottom-8 -right-8 w-[45%] h-[60%] rounded-xl overflow-hidden shadow-xl border-4 border-white z-10`,
                            )}
                        >
                            <Image src="/standout1.png" alt="Technology" fill className={tw(`object-cover`)} />
                            <div className={tw(`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent`)}></div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default StandOutSection;

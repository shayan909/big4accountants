'use client';

import { tw } from 'twind';
import { motion } from 'framer-motion';
import Image from 'next/image';

const partnerLogos = [
    { name: 'PwC', src: '/logos/pwc.png' },
    { name: 'EY', src: '/logos/ey.png' },
    { name: 'Deloitte', src: '/logos/deloitte.png' },
    { name: 'KPMG', src: '/logos/kpmg.png' },
];

const logoVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
        opacity: 1,
        y: 0,
        transition: { delay: index * 0.2, duration: 0.6, ease: 'easeOut' },
    }),
};

const AboutUs = () => (
    <section className={tw(`py-20 bg-white`)}>
        <div className={tw(`max-w-7xl mx-auto px-6`)}>
            {/* Main Content with Two Columns */}
            <div className={tw(`flex flex-col lg:flex-row gap-12 items-center mb-20`)}>
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: '-100px' }}
                    className={tw(`lg:w-1/2`)}
                >
                    <h2 className={tw(`text-3xl md:text-4xl font-bold text-gray-900 mb-6`)}>
                        About <span className={tw(`text-blue-600`)}>B4A</span>
                    </h2>

                    <div className={tw(`space-y-5 text-gray-700`)}>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className={tw(`text-lg leading-relaxed`)}
                        >
                            B4A is a <strong>community of finance and accounting professionals</strong>, connecting
                            peers across the industry.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className={tw(`text-lg leading-relaxed`)}
                        >
                            Through our <strong>global network</strong>, we provide financial consulting and advisory
                            services to businesses worldwide.
                        </motion.p>
                    </div>
                </motion.div>

                {/* Image Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className={tw(`lg:w-1/2 h-[300px] relative rounded-xl overflow-hidden shadow-lg`)}
                >
                    <Image src="/aboutus.svg" alt="B4A Team" fill className={tw(`object-cover`)} />

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className={tw(`absolute inset-0 bg-blue-600/10 mix-blend-multiply`)}
                    />
                </motion.div>
            </div>

            {/* Partner Logos Section */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={tw(`text-center`)}
            >
                <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={tw(`text-lg font-medium text-gray-500 mb-8`)}
                >
                    Trusted by industry leaders
                </motion.h3>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className={tw(`flex flex-wrap justify-center gap-8 md:gap-16`)}
                >
                    {partnerLogos.map((logo, index) => (
                        <motion.div
                            key={index}
                            variants={logoVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={index}
                            whileHover={{
                                scale: 1.1,
                                transition: { duration: 0.3 },
                            }}
                            className={tw(`flex items-center justify-center h-16 w-32`)}
                        >
                            <Image
                                src={logo.src}
                                alt={logo.name}
                                width={120}
                                height={60}
                                className={tw(
                                    `object-contain max-h-full opacity-80 hover:opacity-100 transition-opacity duration-300`,
                                )}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    </section>
);

export default AboutUs;

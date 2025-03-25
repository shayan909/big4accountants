'use client';

import { tw } from 'twind';
import { motion } from 'framer-motion';
import Image from 'next/image';

const industryCategories = [
    {
        category: 'Finance & Business',
        industries: ['Financial Services', 'Real Estate', 'Legal', 'Consulting'],
        icon: '/icons/finance.svg',
        gradient: 'from-blue-600 to-blue-800',
    },
    {
        category: 'Technology & Innovation',
        industries: ['Technology', 'Entertainment', 'Education', 'Telecom'],
        icon: '/icons/technology.svg',
        gradient: 'from-purple-600 to-purple-800',
    },
    {
        category: 'Healthcare & Science',
        industries: ['Healthcare', 'Pharmaceuticals', 'Biotech', 'Medical Devices'],
        icon: '/icons/healthcare.svg',
        gradient: 'from-emerald-600 to-emerald-800',
    },
    {
        category: 'Manufacturing & Infrastructure',
        industries: ['Manufacturing', 'Construction', 'Energy', 'Automotive'],
        icon: '/icons/manufacturing.svg',
        gradient: 'from-amber-600 to-amber-800',
    },
    {
        category: 'Retail & Hospitality',
        industries: ['Retail', 'Hospitality', 'Transportation', 'Logistics'],
        icon: '/icons/retail.svg',
        gradient: 'from-rose-600 to-rose-800',
    },
    {
        category: 'Public Sector',
        industries: ['Government', 'Non-Profit', 'Education', 'Utilities'],
        icon: '/icons/public-sector.svg',
        gradient: 'from-indigo-600 to-indigo-800',
    },
];

const Industries = () => {
    return (
        <section className={tw(`py-28 bg-white text-gray-900`)}>
            <div className={tw(`max-w-7xl mx-auto px-6`)}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className={tw(`text-center mb-20`)}
                >
                    <h2 className={tw(`text-4xl md:text-5xl font-bold mb-4`)}>Industries We Serve</h2>
                    <p className={tw(`text-xl text-gray-600 max-w-3xl mx-auto`)}>
                        Tailored financial solutions designed for your sector's unique requirements
                    </p>
                </motion.div>

                {/* Industry Categories */}
                <div className={tw(`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`)}>
                    {industryCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true, margin: '-50px' }}
                            whileHover={{ y: -8 }}
                            className={tw(`
                bg-white rounded-xl p-6
                border border-gray-200
                shadow-sm hover:shadow-md
                transition-all duration-300
                flex flex-col
              `)}
                        >
                            <div className={tw(`flex items-center mb-6`)}>
                                <div
                                    className={tw(
                                        `w-14 h-14 rounded-lg bg-gradient-to-br ${category.gradient} flex items-center justify-center mr-4`,
                                    )}
                                >
                                    <div className={tw(`w-8 h-8 relative`)}>
                                        <Image
                                            src={category.icon}
                                            alt={category.category}
                                            fill
                                            className={tw(`object-contain filter brightness-0 invert`)}
                                        />
                                    </div>
                                </div>
                                <h3 className={tw(`text-xl font-semibold`)}>{category.category}</h3>
                            </div>

                            <ul className={tw(`space-y-3 text-gray-600`)}>
                                {category.industries.map((industry, idx) => (
                                    <li key={idx} className={tw(`flex items-center`)}>
                                        <span className={tw(`w-2 h-2 rounded-full bg-blue-500 mr-3`)}></span>
                                        {industry}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className={tw(`text-center mt-20`)}
                >
                    <button
                        className={tw(`
            px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800
            rounded-lg text-white font-medium text-lg
            hover:shadow-lg transition-all duration-300
            inline-flex items-center
          `)}
                    >
                        Explore Industry Solutions
                        <svg className={tw(`ml-2 w-5 h-5`)} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Industries;

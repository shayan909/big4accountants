'use client';

import { tw } from 'twind';
import { motion } from 'framer-motion';
import { Briefcase, Cpu, HeartPulse, Factory, ShoppingCart, Building } from 'lucide-react';

const industryCategories = [
    {
        category: 'Finance & Business',
        industries: ['Financial Services', 'Real Estate', 'Legal', 'Consulting'],
        icon: <Briefcase size={32} />,
        gradient: 'bg-gradient-to-br from-blue-600 to-red-800',
    },
    {
        category: 'Technology & Innovation',
        industries: ['Technology', 'Entertainment', 'Education', 'Telecom'],
        icon: <Cpu size={32} />,
        gradient: 'bg-gradient-to-br from-red-600 to-purple-800',
    },
    {
        category: 'Healthcare & Science',
        industries: ['Healthcare', 'Pharmaceuticals', 'Biotech', 'Medical Devices'],
        icon: <HeartPulse size={32} />,
        gradient: 'bg-gradient-to-br from-blue-600 to-green-800',
    },
    {
        category: 'Manufacturing & Infrastructure',
        industries: ['Manufacturing', 'Construction', 'Energy', 'Automotive'],
        icon: <Factory size={32} />,
        gradient: 'bg-gradient-to-br from-blue-600 to-yellow-800',
    },
    {
        category: 'Retail & Hospitality',
        industries: ['Retail', 'Hospitality', 'Transportation', 'Logistics'],
        icon: <ShoppingCart size={32} />,
        gradient: 'bg-gradient-to-br from-red-600 to-purple-800',
    },
    {
        category: 'Public Sector',
        industries: ['Government', 'Non-Profit', 'Education', 'Utilities'],
        icon: <Building size={32} />,
        gradient: 'bg-gradient-to-br from-green-600 to-indigo-800',
    },
];

const Industries = () => {
    return (
        <section className={tw(`py-28  text-gray-900`)}>
            <div className={tw(`max-w-7xl mx-auto px-6`)}>
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
                                rounded-xl p-6 shadow-md text-white
                                ${category.gradient}
                                flex flex-col transition-all duration-300
                            `)}
                        >
                            <div className={tw(`flex items-center mb-6`)}>
                                <div className={tw(`mr-4`)}>{category.icon}</div>
                                <h3 className={tw(`text-xl font-semibold`)}>{category.category}</h3>
                            </div>

                            <ul className={tw(`space-y-3`)}>
                                {category.industries.map((industry, idx) => (
                                    <li key={idx} className={tw(`flex items-center`)}>
                                        <span className={tw(`w-2 h-2 rounded-full bg-white mr-3`)}></span>
                                        {industry}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

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

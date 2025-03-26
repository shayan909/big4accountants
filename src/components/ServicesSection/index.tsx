'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { tw } from 'twind';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
    {
        id: 1,
        title: 'Advisory & Financial Strategy',
        description:
            'Business Planning, M&A, Budgeting, Forecasting, Valuation, and Transaction Advisory under US GAAP/IFRS.',
        details: [
            'Comprehensive business valuation services',
            'M&A due diligence and transaction support',
            'Strategic financial planning and modeling',
            'Capital raising and investor relations',
        ],
        image: '/services/Advisory Financial-Strategy.webp',
        icon: '📈',
    },
    {
        id: 2,
        title: 'Taxation & Compliance',
        description:
            'US Federal & State Tax Filing, Payroll Taxation, 1099 Filing, Cross-Border Taxation (Canada, UK, UAE), and Regulatory Compliance.',
        details: [
            'Multi-state tax compliance',
            'International tax structuring',
            'Payroll tax optimization',
            'Tax controversy representation',
        ],
        image: '/services/Taxation Compliance.webp',
        icon: '🧾',
    },
    {
        id: 3,
        title: 'Audit & Risk Management',
        description:
            'Internal Audits, Policy Adherence, and Compliance with Federal, State, County, and City Regulations.',
        details: [
            'SOX compliance programs',
            'Internal control assessments',
            'Fraud risk management',
            'Regulatory compliance audits',
        ],
        image: '/services/Audit Risk-Management.webp',
        icon: '🔍',
    },
    {
        id: 4,
        title: 'Bookkeeping & Outsourced Finance',
        description:
            'Full-Service Bookkeeping (Monthly, Quarterly, Annual), Catch-up Accounting, and Outsourced CFO, Controller, and Finance Function Management.',
        details: [
            'End-to-end accounting operations',
            'Financial statement preparation',
            'Cash flow management',
            'Virtual CFO services',
        ],
        image: '/services/Bookkeeping Outsourced-Finance.webp',
        icon: '📚',
    },
    {
        id: 5,
        title: 'Financial Reporting & Analytics',
        description: 'Dashboards, KPI Monitoring, Corporate Presentations, Financial Modeling, and Cash Flow Analysis.',
        details: [
            'Custom management dashboards',
            'Board-level financial reporting',
            'Predictive analytics',
            'Scenario modeling',
        ],
        image: '/services/Financial Reports.webp',
        icon: '📊',
    },
    {
        id: 6,
        title: 'Digital Transformation & ERP Solutions',
        description:
            'Implementation and Upgrades for QuickBooks, Zoho, Xero, SAP, Oracle, Microsoft Dynamics, and more.',
        details: [
            'ERP system selection',
            'Implementation project management',
            'Workflow automation',
            'System integration',
        ],
        image: '/services/Digital Transformation.webp',
        icon: '💻',
    },
    {
        id: 7,
        title: 'Financing & Funding Assistance',
        description: 'SBA Loans, Government Grants, Lines of Credit, and Investor Pitch Decks.',
        details: [
            'Debt financing strategies',
            'Grant application support',
            'Investor pitch preparation',
            'Capital structure optimization',
        ],
        image: '/services/Financing Funding-Assistance.webp',
        icon: '💰',
    },
];
const ServicesSection = () => {
    const [activeService, setActiveService] = useState(services[0]);
    const serviceRefs = useRef([]);
    const containerRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const serviceId = parseInt(entry.target.getAttribute('data-id'));
                        setActiveService(services.find((s) => s.id === serviceId));
                    }
                });
            },
            {
                root: null,
                threshold: 0.5,
                rootMargin: '-150px 0px -200px 0px',
            },
        );

        serviceRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            serviceRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    return (
        <section className={tw(`w-full py-28 px-6 bg-gradient-to-br from-gray-900 to-[#12123A] text-white`)}>
            <div className={tw(`max-w-7xl mx-auto`)}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className={tw(`text-center mb-20`)}
                >
                    <h2 className={tw(`text-4xl md:text-5xl font-bold mb-6`)}>Our Services</h2>
                    <p className={tw(`text-xl text-gray-300 max-w-3xl mx-auto`)}>
                        Our professional team offers personalized finance and accounting solutions.
                    </p>
                </motion.div>

                {/* Content */}
                <div className={tw(`flex flex-col lg:flex-row gap-12 relative`)} ref={containerRef}>
                    {/* Service List */}
                    <div className={tw(`lg:w-1/2 space-y-40 pb-40`)}>
                        {services.map((service, index) => (
                            <div
                                key={service.id}
                                // @ts-ignore
                                ref={(el) => (serviceRefs.current[index] = el)}
                                data-id={service.id}
                                className={tw(`service-item`)}
                            >
                                <motion.div
                                    className={tw(
                                        `p-8 rounded-xl ${activeService.id === service.id ? 'bg-white/10' : ''}`,
                                    )}
                                >
                                    <div className={tw(`flex items-start gap-4`)}>
                                        <span className={tw(`text-3xl`)}>{service.icon}</span>
                                        <div>
                                            <h3 className={tw(`text-2xl font-bold mb-4`)}>{service.title}</h3>
                                            <p className={tw(`text-gray-300`)}>{service.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>

                    {/* Image Container - Fixed Position */}
                    <div className={tw(`lg:w-1/2 hidden lg:block`)}>
                        <div className={tw(`sticky top-32 h-[400px]`)}>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeService.id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className={tw(`relative w-full h-full rounded-2xl overflow-hidden shadow-2xl`)}
                                >
                                    <Image
                                        src={activeService.image}
                                        alt={activeService.title}
                                        fill
                                        className={tw(`object-cover`)}
                                        // priority
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;

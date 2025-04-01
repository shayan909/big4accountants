'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { tw } from 'twind';
import Image from 'next/image';

const services = [
    {
        title: 'Payroll Management',
        description: 'Automate salary processing, tax calculations, and employee payroll management with ease.',
        image: '/services/Bookkeeping Outsourced-Finance.webp',
        bgColor: 'bg-gradient-to-r from-gray-900 to-gray-700',
    },
    {
        title: 'Financial Analysis',
        description: 'Get in-depth insights into your financial data with AI-powered analytics.',
        image: '/services/Advisory Financial-Strategy.webp',
        bgColor: 'bg-gradient-to-r from-blue-900 to-blue-700',
    },
    {
        title: 'HR Management',
        description: 'Streamline hiring, employee tracking, and performance reviews in one place.',
        image: '/services/Financing Funding-Assistance.webp',
        bgColor: 'bg-gradient-to-r from-purple-900 to-purple-700',
    },
];

const ServicesSectionTwo = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });

    return (
        <div ref={containerRef} className={tw`relative h-[300vh]`}>
            <div className={tw`sticky top-0 h-screen flex flex-col`}>
                {services.map((service, index) => (
                    <ServiceSection
                        key={index}
                        service={service}
                        index={index}
                        scrollYProgress={scrollYProgress}
                        totalSections={services.length}
                    />
                ))}
            </div>
        </div>
    );
};

const ServiceSection = ({ service, index, scrollYProgress, totalSections }) => {
    const sectionStart = index / totalSections;
    const sectionEnd = (index + 1) / totalSections;

    const y =
        index === totalSections - 1 ? '0%' : useTransform(scrollYProgress, [sectionStart, sectionEnd], ['0%', '-100%']);

    return (
        <motion.section
            className={tw`absolute top-0 left-0 w-full h-screen flex items-center justify-center ${service.bgColor}`}
            style={{ y, zIndex: totalSections - index }}
        >
            <div className={tw`max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 px-8`}>
                {/* Alternate content layout */}
                {index % 2 === 0 ? (
                    <>
                        {/* Text Left */}
                        <ContentSection service={service} index={index} />
                        {/* Image Right */}
                        <ImageSection service={service} />
                    </>
                ) : (
                    <>
                        {/* Image Left */}
                        <ImageSection service={service} />
                        {/* Text Right */}
                        <ContentSection service={service} index={index} />
                    </>
                )}
            </div>
        </motion.section>
    );
};

const ContentSection = ({ service, index }) => (
    <div className={tw`md:w-1/2 text-left`}>
        <motion.h2
            className={tw`text-5xl font-bold leading-tight text-white`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >
            {index === 0 && (
                <>
                    Our <br /> Services
                </>
            )}
        </motion.h2>
        <motion.h3
            className={tw`text-3xl font-semibold mt-3 text-white`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
        >
            {service.title}
        </motion.h3>
        <motion.p
            className={tw`text-gray-300 mt-4 text-lg`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
        >
            {service.description}
        </motion.p>
        <motion.button
            className={tw`mt-6 px-6 py-3 bg-blue-600 text-white font-medium rounded-full transition hover:bg-blue-700`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
        >
            Learn More
        </motion.button>
    </div>
);

const ImageSection = ({ service }) => (
    <div className={tw`md:w-1/2 flex justify-center`}>
        <motion.div
            className={tw`mt-6 max-w-[700px] w-full`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
        >
            <Image
                src={service.image}
                alt={service.title}
                width={700}
                height={500}
                className={tw`rounded-2xl shadow-lg w-full h-auto`}
            />
        </motion.div>
    </div>
);

export default ServicesSectionTwo;

'use client';

import { tw } from 'twind';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface BannerProps {
    setIsOpen: (value: boolean) => void;
}

const textToType = 'Welcome To Our Trusted Tax & Finance Partner';

const Banner: React.FC<BannerProps> = ({ setIsOpen }) => {
    const [typedText, setTypedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < textToType.length) {
            const timeout = setTimeout(() => {
                setTypedText((prev) => prev + textToType[index]);
                setIndex((prev) => prev + 1);
            }, 50);
            return () => clearTimeout(timeout);
        }
    }, [index]);

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.5,
            },
        },
    };

    const childVariants = {
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1 },
    };

    return (
        <div id="banner" className={tw`relative flex items-center justify-center h-screen text-center overflow-hidden`}>
            {/* Video Background */}
            <video autoPlay loop muted playsInline className={tw`absolute inset-0 w-full h-full object-cover`}>
                <source src="/hero-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Blueish Overlay */}
            <div className={tw`absolute inset-0 bg-gradient-to-b from-[rgba(4,8,234,0.8)] to-[rgba(2,4,132,0.9)]`} />

            {/* Text Content */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className={tw`relative z-20 max-w-7xl mx-auto px-6 text-white`}
            >
                {/* Heading */}
                <motion.h1
                    variants={childVariants}
                    transition={{ duration: 0.8, ease: 'backOut' }}
                    className={tw`
                        text-5xl sm:text-6xl lg:text-6xl font-semibold leading-tight mb-4 
                        tracking-wide text-white
                    `}
                >
                    Welcome To Our Trusted Tax <br /> & Finance Partner
                </motion.h1>

                {/* Subheading with increased width */}
                <motion.p
                    variants={childVariants}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className={tw`text-md sm:text-lg max-w-4xl mx-auto mb-8 leading-relaxed text-gray-300`}
                >
                    We specialize in providing comprehensive tax and finance solutions tailored to meet your unique
                    needs. Our team of experienced professionals is dedicated to helping businesses and individuals
                    achieve financial success with our top-notch services.
                </motion.p>

                {/* CTA Button */}
                <motion.div
                    variants={childVariants}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className={tw`flex justify-center gap-4 flex-wrap`}
                >
                    <button
                        onClick={() => setIsOpen(true)}
                        className={tw`
                            relative overflow-hidden bg-white  
                            text-black text-lg font-semibold py-4 px-8 rounded-full shadow-lg 
                            transition-all duration-300 hover:shadow-2xl hover:scale-105 
                            hover:from-blue-600 hover:to-blue-800 focus:outline-none 
                            focus:ring-4 focus:ring-blue-400/50
                        `}
                    >
                        Join the Community
                    </button>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Banner;

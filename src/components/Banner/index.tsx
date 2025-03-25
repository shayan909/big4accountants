'use client';

import { tw } from 'twind';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

interface BannerProps {
    setIsOpen: (value: boolean) => void;
}

const Banner: React.FC<BannerProps> = ({ setIsOpen }) => {
    const [typedText, setTypedText] = useState('');
    const [index, setIndex] = useState(0);
    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const textToType = 'Trusted Tax & Finance Solutions';
        if (index < textToType.length) {
            const timeout = setTimeout(() => {
                setTypedText((prev) => prev + textToType[index]);
                setIndex((prev) => prev + 1);
            }, 100);
            return () => clearTimeout(timeout);
        }
    }, [index]);

    useEffect(() => {
        const animation = animate(count, 100, {
            duration: 3,
            ease: 'easeOut',
        });
        return animation.stop;
    }, []);

    // Intersection Observer to track visibility
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.2 }, // Trigger when 20% of the section is visible
        );
        if (containerRef.current) observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            id="banner"
            ref={containerRef}
            className={tw`relative flex items-center justify-center h-screen text-center overflow-hidden bg-gray-900`}
            style={{
                backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
                          linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
                backgroundSize: '40px 40px', // Grid cell size
            }}
        >
            {/* Line Graph Animation */}
            <div className={tw`absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center`}>
                <motion.div className={tw`absolute inset-0 flex items-center justify-center`}>
                    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className={tw`w-full h-full`}>
                        {[
                            'M0,80 L20,40 L40,90 L60,50 L80,10 L100,60 L120,20',
                            'M0,60 C20,20 40,70 60,30 C80,70 100,20 120,60',
                        ].map((path, i) => (
                            <motion.path
                                key={i}
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={
                                    isVisible
                                        ? { pathLength: 1, opacity: [0, 0.1, 0] }
                                        : { pathLength: 1, opacity: 0.1 } // Keep static on leave
                                }
                                transition={{
                                    duration: 6,
                                    delay: i * 7, // Staggered appearance
                                    ease: 'easeInOut',
                                    repeat: isVisible ? Infinity : 0, // Stop repeating when not visible
                                }}
                                d={path}
                                stroke={['#6b7280', '#9ca3af'][i]} // Soft gray-blue tones
                                strokeWidth="0.5" // Thinner lines
                                fill="none"
                            />
                        ))}
                    </svg>
                </motion.div>
            </div>

            {/* Animated Bar Graph (Below Button) */}
            <motion.div
                className={tw`absolute bottom-0 left-0 right-0 flex justify-center items-end h-1/3 gap-4 px-20`}
            >
                {[80, 65, 90, 75, 85].map((value, i) => (
                    <motion.div
                        key={i}
                        initial={{ height: 0, opacity: 0 }}
                        animate={
                            isVisible
                                ? {
                                      height: [`${value}%`, `${value * 0.7}%`, `${value}%`],
                                      opacity: [0.2, 1, 0.2],
                                  }
                                : { height: `${value}%`, opacity: 0.2 } // Keep static on leave
                        }
                        transition={{
                            duration: 3,
                            delay: i * 0.3,
                            repeat: isVisible ? Infinity : 0, // Stop repeating when not visible
                            repeatType: 'mirror',
                            ease: 'easeInOut',
                        }}
                        className={tw`w-16 bg-blue-500 rounded-t-lg shadow-lg`}
                    />
                ))}
            </motion.div>

            {/* Main Content */}
            <motion.div className={tw`relative z-20 max-w-4xl mx-auto px-6 text-white`}>
                <motion.h1
                    transition={{ duration: 0.8, ease: 'backOut' }}
                    className={tw`text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 tracking-wide`}
                >
                    {typedText}
                    <span className={tw`text-blue-400`}>|</span>
                </motion.h1>

                <motion.p
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className={tw`text-lg sm:text-xl max-w-3xl mx-auto mb-8 leading-relaxed text-gray-300`}
                >
                    Unlock financial freedom with tailored tax and finance solutions from our experienced team.
                </motion.p>

                {/* CTA Button */}
                <motion.div
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className={tw`flex justify-center gap-4 flex-wrap`}
                >
                    <button
                        onClick={() => setIsOpen(true)}
                        className={tw`
                            relative overflow-hidden
                            bg-gradient-to-r from-blue-500 to-blue-700 text-white text-lg font-semibold py-4 px-8
                            rounded-full shadow-lg transition-all duration-300
                            hover:shadow-2xl hover:scale-105 hover:from-blue-600 hover:to-blue-800
                            focus:outline-none focus:ring-4 focus:ring-blue-400/50
                        `}
                    >
                        Book an Appointment
                    </button>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Banner;

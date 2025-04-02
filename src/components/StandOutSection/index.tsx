'use client';

import { tw } from 'twind';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ServicesSection() {
    const [leftRef, leftInView] = useInView({ threshold: 0.1, triggerOnce: true });
    const [centerRef, centerInView] = useInView({ threshold: 0.1, triggerOnce: true });
    const [rightRef, rightInView] = useInView({ threshold: 0.1, triggerOnce: true });
    const [ellipseRef, ellipseInView] = useInView({ threshold: 0.1, triggerOnce: true });

    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    };

    const fadeInLeft = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    };

    const rotateIn = {
        hidden: { opacity: 0, rotate: -180 },
        visible: { opacity: 1, rotate: 0, transition: { duration: 1.2, ease: 'backOut' } },
    };

    const scaleIn = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
    };

    const staggerContainer = {
        visible: {
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
            },
        },
    };

    return (
        <section className={tw`relative py-32 bg-white text-white font-satoshi overflow-hidden`}>
            {/* Animated Ellipses */}
            <motion.div ref={ellipseRef} initial="hidden" animate={ellipseInView ? 'visible' : 'hidden'}>
                {/* Left Ellipse */}
                <img
                    src="/Ellipse3.svg"
                    alt=""
                    className={tw`absolute left-0 top-1/2 transform -translate-y-1/2 md:flex w-1/2`} // Rotate left ellipse and make it smaller
                />

                {/* Right Ellipse */}
                <img
                    src="/Ellipse3.svg"
                    alt=""
                    className={tw`absolute right-0 top-1 transform -translate-y-1/2 hidden md:flex w-1/2 rotate-180`} // Rotate right ellipse
                />
            </motion.div>

            <div className={tw`max-w-7xl mx-auto flex items-center gap-8`}>
                {/* Left Text - Comes from left with stagger */}
                <motion.div
                    className={tw`flex-1 text-left`}
                    style={{ transform: 'translateY(-120px)' }}
                    ref={leftRef}
                    initial="hidden"
                    animate={leftInView ? 'visible' : 'hidden'}
                    variants={staggerContainer}
                >
                    <motion.h2
                        className={tw`text-5xl font-bold leading-tight text-[#050505] font-satoshi`}
                        variants={fadeInLeft}
                    >
                        <motion.div variants={fadeInLeft}>How We Are</motion.div>
                        <motion.div variants={fadeInLeft} transition={{ delay: 0.1 }}>
                            Stands Out
                        </motion.div>
                        <motion.div className={tw`mt-2`} variants={fadeInLeft} transition={{ delay: 0.2 }}>
                            From Others
                        </motion.div>
                    </motion.h2>
                    <motion.p
                        className={tw`text-[#474747] mt-4 max-w-md font-satoshi`}
                        variants={fadeInLeft}
                        transition={{ delay: 0.3 }}
                    >
                        Our biggest edge is that, through our association with big names in the finance world, we are
                        privy to emerging trends, technologies, and best practices that come with each region and
                        industry. We use our network to stay ahead of the curve!
                    </motion.p>
                </motion.div>

                {/* Center Image - Scales up with cool shadow */}
                <motion.div
                    className={tw`flex-shrink-0 w-2/5`}
                    ref={centerRef}
                    initial="hidden"
                    animate={centerInView ? 'visible' : 'hidden'}
                    variants={scaleIn}
                >
                    <motion.img
                        src="/standsout/standsout.png"
                        alt="Business Team"
                        className={tw`w-full h-[756px] object-cover rounded-[100px] shadow-2xl`}
                        whileHover={{
                            scale: 1.02,
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                        }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    />
                </motion.div>

                {/* Right Text - Comes from right with stagger */}
                <motion.div
                    className={tw`flex-1 text-left flex flex-col justify-center`}
                    style={{ transform: 'translateY(50px)' }}
                    ref={rightRef}
                    initial="hidden"
                    animate={rightInView ? 'visible' : 'hidden'}
                    variants={staggerContainer}
                >
                    <motion.h3
                        className={tw`text-3xl font-bold mt-24 font-satoshi`}
                        style={{ color: 'rgba(4, 8, 234, 1)', textAlign: 'left' }}
                        variants={fadeInRight}
                    >
                        Our Approach To Our Services
                    </motion.h3>
                    <motion.p
                        className={tw`text-gray-300 mt-4 text-left max-w-md mx-auto text-[rgb(71,71,71)] font-satoshi`}
                        variants={fadeInRight}
                        transition={{ delay: 0.1 }}
                    >
                        Combines deep industry expertise with cutting-edge technology to provide businesses with
                        unmatched financial solutions. We prioritize precision, transparency, and innovation, ensuring
                        our clients remain financially secure and ahead of the competition.
                    </motion.p>
                    <motion.div className={tw`mt-6 text-left`} variants={fadeInRight} transition={{ delay: 0.2 }}>
                        <motion.a
                            href="#"
                            className={tw`inline-block bg-[rgba(4,8,234,1)] text-white px-6 py-3 rounded-[100px] font-bold font-satoshi text-center`}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: '0 0 15px rgba(4, 8, 234, 0.5)',
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Learn More
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

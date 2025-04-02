import { motion } from 'framer-motion';
import { tw } from 'twind';
import Image from 'next/image';

const MagicalNumbers = () => {
    // Animation settings for the cards
    const leftCardAnimation = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    };

    const rightCardAnimation = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    };

    const bottomCardAnimation = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    };

    return (
        <section className={tw`relative pt-28 pb-0 overflow-hidden text-center text-white`}>
            {/* Background Image for the whole section */}
            <div className={tw`absolute top-0 left-0 w-full h-full -z-10`}>
                <Image src="/magicalbackground.svg" alt="Magical Background" layout="fill" objectFit="cover" />
            </div>

            {/* Ellipse Image behind the Heading */}
            <div className={tw`absolute top-[-100px] left-1/2 -translate-x-1/2 z-0`}>
                <Image src="/Ellipse1.svg" alt="Ellipse Background" width={600} height={600} />
            </div>

            {/* Heading */}
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={tw`mb-20 relative z-10`}
            >
                <h2 className={tw`text-6xl lg:text-6xl font-bold mb-4`}>The Magical Numbers</h2>
                <p className={tw`text-xl text max-w-1xl mx-auto`}>
                    Numbers Don't Lie. Hear The Story Of Our Success From Our Magical Numbers.
                </p>
            </motion.div>

            {/* Cards Container */}
            <div className={tw`relative pt-10 max-w-6xl mx-auto min-h-[500px] md:min-h-[700px]`}>
                {/* Middle Cards */}
                <div className={tw`absolute left-1/2 -translate-x-1/2 flex gap-16 md:gap-40 z-20`}>
                    {/* Clients Card */}
                    <motion.div
                        className={tw`w-40 h-40 md:w-60 md:h-60 mt-16 bg-[#0B0B28] rounded-full flex flex-col items-center justify-center text-center shadow-xl card-glow`}
                        style={{ boxShadow: '0px 0px 40px rgba(0, 50, 255, 0.5)' }}
                        variants={leftCardAnimation}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <span className={tw`text-5xl font-bold mb-2`}>50+</span>
                        <span className={tw`text-lg uppercase`}>Employees</span>
                        <span className={tw`text-sm mt-2`}>Spread Across 4 Countries</span>
                    </motion.div>

                    {/* Employees Card */}
                    <motion.div
                        className={tw`w-40 h-24 md:w-64 md:h-48 bg-[#0B0B28] rounded-lg flex flex-col items-center justify-center text-center shadow-xl card-glow`}
                        style={{ boxShadow: '0px 0px 40px rgba(0, 50, 255, 0.5)' }}
                        variants={rightCardAnimation}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        <span className={tw`text-5xl font-bold mb-2`}>100k+</span>
                        <span className={tw`text-lg uppercase`}>Clients</span>
                        <span className={tw`text-sm mt-2`}>Served Across 8 Location</span>
                    </motion.div>

                    {/* Accountants Card */}
                    <motion.div
                        className={tw`w-40 h-40 md:w-60 md:h-60 mt-16 bg-[#0B0B28] rounded-full flex flex-col items-center justify-center text-center shadow-xl card-glow`}
                        style={{ boxShadow: '0px 0px 40px rgba(0, 50, 255, 0.5)' }}
                        variants={leftCardAnimation}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                    >
                        <span className={tw`text-5xl font-bold mb-2`}>500+</span>
                        <span className={tw`text-lg uppercase`}>Accountants</span>
                        <span className={tw`text-sm mt-2`}>In Our Talent Database</span>
                    </motion.div>
                </div>

                {/* Bottom Card - CSAT */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <motion.div
                        style={{
                            width: '100%',
                            maxWidth: '24rem',
                            height: '20.5rem',
                            backgroundColor: '#0b0b28',
                            borderRadius: '4rem 4rem 0 0',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            boxShadow: '0px 0px 40px rgba(0, 50, 255, 0.5)',
                        }}
                        variants={bottomCardAnimation}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="card-glow"
                    >
                        <span className={tw`text-5xl font-bold mb-2`}>98.7%</span>
                        <span className={tw`text-lg font-bold uppercase`}>CSAT</span>
                        <span className={tw`text-2xl mt-2`}>Across All Projects</span>
                        <span className={tw`text-2xl mt-2`}>& Clients</span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default MagicalNumbers;

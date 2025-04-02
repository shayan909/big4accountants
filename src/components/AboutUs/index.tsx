'use client';

import { tw } from 'twind';
import Image from 'next/image';
import { motion } from 'framer-motion';

const companyData = [
    {
        name: 'PwC',
        logo: '/logos/pwc.png',
        description:
            'Another member of the Big 4 Accounting network, PricewaterhouseCoopers is one of the biggest names in professional services.',
    },
    {
        name: 'EY',
        logo: '/logos/ey.png',
        description:
            'One of the largest professional services firms in the world, Ernst & Young is another part of the Big 4 Accounting network.',
    },
    {
        name: 'KPMG',
        logo: '/logos/kpmg.png',
        description:
            'Klynveld Peat Marwick Goedeler (KPMG) is a London-based, multinational professional services firm, part of the Big 4 Accounting network.',
    },
    {
        name: 'Deloitte',
        logo: '/logos/deloitte.png',
        description:
            'Also based in London, Deloitte is another professional services firm part of the Big 4 Accounting network.',
    },
];

const fadeInVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.3, ease: 'easeOut', duration: 0.8 },
    }),
};

// Hover animation for images
const hoverAnimation = {
    hover: { scale: 1.1, transition: { duration: 0.3 } },
};

const ListSection = () => (
    <section className={tw(`lg:py-32 pt-28 overflow-hidden text-center`)}>
        <h2 className={tw(`text-4xl lg:text-6xl font-bold text-gray-900`)}>About Us</h2>
        <p className={tw(`mt-4 text-gray-700 max-w-5xl mx-auto`)} style={{ fontSize: '18px' }}>
            Big 4 Accountants is a community of finance and accounting professionals, with the aim to connect peers in
            the industry. With a strong global network, we also provide financial consulting and advisory services to
            businesses across the world.
        </p>

        <div className={tw(`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-12 mx-auto max-w-7xl px-8`)}>
            {companyData.map((company, index) => (
                <motion.div
                    key={index}
                    className={tw(
                        `flex flex-col items-center text-center p-6 border-r last:border-r-0 w-full sm:w-[280px] md:w-[320px] lg:w-[310px]`,
                    )}
                    variants={fadeInVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={index}
                    style={{ borderColor: 'rgba(4, 115, 234, 0.55)' }}
                >
                    {index % 2 === 0 ? ( // Alternate Layout Logic
                        <>
                            <motion.div variants={hoverAnimation} whileHover="hover">
                                <Image
                                    src={company.logo}
                                    alt={company.name}
                                    width={120}
                                    height={60}
                                    className={tw(`w-24 h-20 object-contain`)}
                                />
                            </motion.div>
                            <p
                                className={tw(`mt-4 mb-4 text-gray-700 block max-w-xs sm:max-w-sm lg:max-w-md mx-auto`)}
                                style={{ fontSize: '18px' }}
                            >
                                {company.description}
                            </p>
                        </>
                    ) : (
                        <>
                            <p
                                className={tw(
                                    `mt-4 mb-4 text-gray-700 leading-relaxed max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px]`,
                                )}
                                style={{ fontSize: '18px' }}
                            >
                                {company.description}
                            </p>

                            <motion.div variants={hoverAnimation} whileHover="hover">
                                <Image
                                    src={company.logo}
                                    alt={company.name}
                                    width={120}
                                    height={60}
                                    className={tw(`w-24 h-20 object-contain`)}
                                />
                            </motion.div>
                        </>
                    )}
                </motion.div>
            ))}
        </div>
    </section>
);

export default ListSection;

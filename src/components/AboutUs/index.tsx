'use client';

import { tw } from 'twind';
import Image from 'next/image';
import { motion } from 'framer-motion';

const companyData = [
    { name: 'PwC', logo: '/logos/pwc.png' },
    { name: 'EY', logo: '/logos/ey.png' },
    { name: 'KPMG', logo: '/logos/kpmg.png' },
    { name: 'Deloitte', logo: '/logos/deloitte.png' },
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
        <p className={tw(`mt-4 text-gray-700 max-w-3xl mx-auto`)}>
            If everyone used the identical lorem ipsum copy, search engines would flag it for plagiarism and downgrade
            the site for its lack of helpful content for the reader.
        </p>

        <div className={tw(`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 mx-auto max-w-6xl`)}>
            {companyData.map((company, index) => (
                <motion.div
                    key={index}
                    className={tw(
                        `flex flex-col items-center text-center p-6 border-r last:border-r-0`,
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
                            <p className={tw(`mt-4 text-gray-700 block`)}>
                                If everyone used the identical lorem ipsum copy, search engines would flag it for
                                plagiarism.
                            </p>
                        </>
                    ) : (
                        <>
                            <p className={tw(`mb-4 text-gray-700 block`)}>
                                If everyone used the identical lorem ipsum copy, search engines would flag it for
                                plagiarism.
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

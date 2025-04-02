import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { tw } from 'twind';

const logos = [
    '/adp.svg',
    '/qb.svg',
    '/sage.svg',
    '/msdynamics.svg',
    '/oraclenetsuite.svg',
    '/oracle.svg',
    '/zoho.svg',
];

const LogoMarquee = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let scrollAmount = 0;
        const speed = 1; // Smooth, professional scrolling

        const scroll = () => {
            if (!isVisible) return; // Stop the animation when not visible
            scrollAmount += speed;
            if (scrollAmount >= scrollContainer.scrollWidth / 2) {
                scrollAmount = 0;
            }
            scrollContainer.scrollLeft = scrollAmount;
            requestAnimationFrame(scroll);
        };

        scroll();

        // Intersection Observer to detect visibility
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting); // Set visibility based on intersection
            },
            { threshold: 0.5 }, // Trigger when 50% of the section is in view
        );

        if (scrollContainer) {
            observer.observe(scrollContainer);
        }

        // Cleanup observer when component is unmounted
        return () => {
            if (scrollContainer) {
                observer.unobserve(scrollContainer);
            }
        };
    }, [isVisible]);

    return (
        <section className={tw`relative py-20`}>
            {/* Section Header */}
            <div className={tw`text-center mb-12`}>
                <h2 className={tw`text-4xl md:text-5xl font-bold text-gray-900`}>Our Technology Partners</h2>
                <p className={tw`text-lg text-gray-600 mt-4 max-w-2xl mx-auto`}>
                    Collaborating with industry-leading technology providers to empower businesses with world-class
                    solutions.
                </p>
            </div>

            {/* Scrolling Logo Marquee */}
            <div className={tw`relative flex items-center justify-center`}>
                {/* Fading Edge Effects for a Seamless Look */}
                <div className={tw`absolute inset-0 bg-gradient-to-r from-gray-50 via-transparent to-gray-50 z-10`} />

                <div ref={scrollRef} className={tw`overflow-hidden whitespace-nowrap flex items-center w-full`}>
                    <div className={tw`flex space-x-16 animate-scroll`}>
                        {[...logos, ...logos].map((logo, index) => (
                            <div
                                key={index}
                                className={tw`w-48 h-28 flex items-center justify-center grayscale opacity-80 hover:opacity-100 transition duration-300`}
                            >
                                <Image src={logo} alt="logo" width={160} height={80} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LogoMarquee;

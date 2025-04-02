import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { tw } from 'twind';

// Testimonials Data
const testimonials = [
    {
        name: 'Simon Masters',
        date: 'Jun 28, 2023',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        avatar: '/testimonials/avatar1.svg',
    },
    {
        name: 'Sarah Johnson',
        date: 'Jul 15, 2023',
        text: 'The service was exceptional! The team went above and beyond to meet our needs. I would highly recommend them to anyone looking for quality work.',
        avatar: '/testimonials/avatar2.svg',
    },
    {
        name: 'Michael Chen',
        date: 'Aug 2, 2023',
        text: 'Impressed with the attention to detail and professional approach. Delivered exactly what was promised on time and within budget.',
        avatar: '/testimonials/avatar3.svg',
    },
    {
        name: 'Emily Wilson',
        date: 'Sep 10, 2023',
        text: 'Working with this company has been a game-changer for our business. Their expertise and customer service are unmatched in the industry.',
        avatar: '/testimonials/avatar4.svg',
    },
    {
        name: 'David Thompson',
        date: 'Oct 5, 2023',
        text: "Reliable and consistent quality. We've been working together for years and they never disappoint. Truly a trusted partner.",
        avatar: '/testimonials/avatar5.svg',
    },
];

const Testimonials = () => {
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    };

    const [activeIndex, setActiveIndex] = useState(0);

    // Auto-carousel functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 5000); // Change every 5 seconds
        return () => clearInterval(interval);
    }, []);

    const handleAvatarClick = (index) => {
        setActiveIndex(index);
    };

    const getDisplayedAvatars = () => {
        const totalAvatars = testimonials.length;
        const leftAvatars = [];
        const rightAvatars = [];

        for (let i = 1; i <= 2; i++) {
            leftAvatars.push(testimonials[(activeIndex - i + totalAvatars) % totalAvatars]);
            rightAvatars.push(testimonials[(activeIndex + i) % totalAvatars]);
        }

        return {
            leftAvatars: leftAvatars.reverse(),
            rightAvatars: rightAvatars,
        };
    };

    const { leftAvatars, rightAvatars } = getDisplayedAvatars();

    return (
        <section className={tw`py-20 px-6 relative`}>
            {/* Left Ellipse */}
            <img
                src="/Ellipse3.svg"
                alt=""
                className={tw`absolute left-0 top-1/2 transform -translate-y-1/2 hidden md:block w-1/4`} // Rotate left ellipse and make it smaller
            />

            {/* Right Ellipse */}
            <img
                src="/Ellipse3.svg"
                alt=""
                className={tw`absolute right-0 top-1/2 transform -translate-y-1/2 hidden md:block w-1/4 rotate-180`} // Rotate right ellipse
            />

            <div className={tw`max-w-4xl mx-auto relative z-10`}>
                {/* Title */}
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeUp}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={tw`text-7xl md:text-7xl font-bold text-center mb-12 text-gray-800 font-satoshi`}
                >
                    What Our Clients Say
                </motion.h2>

                {/* Avatars Wrapper */}
                <div className={tw`flex justify-center gap-6 mb-12`}>
                    {/* Left Avatars */}
                    {leftAvatars.map((testimonial, index) => (
                        <div
                            key={index}
                            onClick={() => handleAvatarClick(testimonials.indexOf(testimonial))}
                            className={tw`cursor-pointer transform transition-transform duration-500 hover:scale-110`}
                        >
                            <img
                                src={testimonial.avatar}
                                alt={testimonial.name}
                                className={tw`w-24 h-24 rounded-full shadow-md`}
                            />
                        </div>
                    ))}

                    {/* Active Avatar */}
                    <motion.div
                        className={tw`cursor-pointer`}
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <img
                            src={testimonials[activeIndex].avatar}
                            alt={testimonials[activeIndex].name}
                            className={tw`w-24 h-24 rounded-full shadow-lg transform transition-transform duration-500 scale-125`}
                            onClick={() => handleAvatarClick(activeIndex)}
                        />
                    </motion.div>

                    {/* Right Avatars */}
                    {rightAvatars.map((testimonial, index) => (
                        <div
                            key={index}
                            onClick={() => handleAvatarClick(testimonials.indexOf(testimonial))}
                            className={tw`cursor-pointer transform transition-transform duration-500 hover:scale-110`}
                        >
                            <img
                                src={testimonial.avatar}
                                alt={testimonial.name}
                                className={tw`w-24 h-24 rounded-full shadow-md`}
                            />
                        </div>
                    ))}
                </div>

                {/* Testimonial Text */}
                <div className={tw`max-w-3xl mx-auto text-center`}>
                    <p>
                        <span className={tw`font-bold text-black font-satoshi`}>{testimonials[activeIndex].name}</span>
                    </p>
                    <span className={tw`text-gray-400`}>{testimonials[activeIndex].date}</span>
                    <p className={tw`text-gray-600 text-lg leading-relaxed text-center font-satoshi`}>
                        "{testimonials[activeIndex].text}"
                    </p>
                </div>

                {/* Carousel Dots - Dark Blue active dot */}
                <div className={tw`flex justify-center gap-2 mt-12`}>
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={tw`w-3 h-3 rounded-full transition-colors ${
                                index === activeIndex ? 'bg-[#0C04EA]' : 'bg-gray-300'
                            }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

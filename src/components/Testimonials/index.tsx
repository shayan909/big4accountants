import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { tw } from 'twind';

const testimonials = [
  {
    name: 'Simon Marsters',
    date: 'Jun 28, 2022',
    text: "typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    avatar: '/avatar1.svg', // Add avatar image
  },
  {
    name: 'Simon',
    date: 'Jun 28, 2022',
    text: "Loremprinting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    avatar: '/avatar2.svg', // Add avatar image
  },
  {
    name: 'Simon Marsters',
    date: 'Jun 28, 2022',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lor's standard dummy text ever since the 1500s.",
    avatar: '/avatar3.svg', // Add avatar image
  },
  {
    name: 'Simon',
    date: 'Jun 28, 2022',
    text: "Lorem Ipsum is simply dummy tex has been the industry's standard dummy text ever since the 1500s.",
    avatar: '/avatar4.svg', // Add avatar image
  },
  {
    name: 'John Doe',
    date: 'Jun 30, 2022',
    text: "Lorem inting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    avatar: '/avatar5.svg', // Add avatar image
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
    <section className={tw`py-20 px-6 bg-gray-100`}>
      <div className={tw`max-w-4xl mx-auto`}>
        {/* Title */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={tw`text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800`}
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
                className={tw`w-16 h-16 rounded-full border-2 border-white shadow-md`}
              />
            </div>
          ))}

          {/* Active Avatar */}
          <div className={tw`cursor-pointer`}>
            <img
              src={testimonials[activeIndex].avatar}
              alt={testimonials[activeIndex].name}
              className={tw`w-24 h-24 rounded-full border-4 border-white shadow-lg transform transition-transform duration-500 scale-125`}
              onClick={() => handleAvatarClick(activeIndex)} // Allows clicking on the active avatar too
            />
          </div>

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
                className={tw`w-16 h-16 rounded-full border-2 border-white shadow-md`}
              />
            </div>
          ))}
        </div>

        {/* Testimonial Text */}
        <div className={tw`text-center`}>
          <p>
            <span className={tw`font-bold text-black`}>{testimonials[activeIndex].name}</span>
          </p>
          <span className={tw`text-gray-400`}>{testimonials[activeIndex].date}</span>
          <p className={tw`text-gray-600 text-lg leading-relaxed text-center`}>"{testimonials[activeIndex].text}"</p>
          <p className={tw`mt-2 text-sm text-gray-500`}></p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

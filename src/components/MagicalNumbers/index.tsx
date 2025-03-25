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
    <section className={tw`relative pt-36 pb-0 overflow-hidden text-center text-white`}>
      {/* Background Image for the whole section */}
      <div className={tw`absolute top-0 left-0 w-full h-full -z-10`}>
        <Image src="/magicalbackground.svg" alt="Magical Background" layout="fill" objectFit="cover" />
      </div>

      {/* Heading */}
      <motion.h2
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={tw`text-5xl lg:text-5xl font-bold mb-20 relative z-10`}
      >
        {/* <Image src="/Ellipse1.svg" alt="Magical Background" width={160} height={160}/> */}
        The Magical Numbers
      </motion.h2>

      {/* Cards Container */}
      <div className={tw`relative pt-10 max-w-6xl mx-auto min-h-[500px] md:min-h-[700px]`}>
        {/* Middle Cards */}
        <div className={tw`absolute left-1/2 -translate-x-1/2 flex gap-16 md:gap-40 z-20`}>
          <motion.div
            className={tw`w-40 h-40 md:w-60 md:h-60 mt-16 bg-[#0B0B28] rounded-full flex flex-col items-center justify-center text-center shadow-xl card-glow`}
            style={{ boxShadow: '0px 0px 40px rgba(0, 50, 255, 0.5)' }}
            variants={leftCardAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Image src="/employeescount.svg" alt="clients" width={180} height={50} />
          </motion.div>

          <motion.div
            className={tw`w-40 h-24 md:w-64 md:h-48 bg-[#0B0B28] rounded-lg flex flex-col items-center justify-center text-center shadow-xl card-glow`}
            style={{ boxShadow: '0px 0px 40px rgba(0, 50, 255, 0.5)' }}
            variants={rightCardAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Image src="/clients.svg" alt="clients" width={220} height={50} />
          </motion.div>

          <motion.div
            className={tw`w-40 h-40 md:w-60 md:h-60 mt-16 bg-[#0B0B28] rounded-full flex flex-col items-center justify-center text-center shadow-xl card-glow`}
            style={{ boxShadow: '0px 0px 40px rgba(0, 50, 255, 0.5)' }}
            variants={leftCardAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <Image src="/accountantcount.svg" alt="clients" width={180} height={50} />
          </motion.div>
        </div>

        {/* Bottom Card - Positioned at the bottom of the section */}
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
              borderRadius: '2rem 2rem 0 0' /* rounded-t-full */,
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
            <Image src="/projectscount.svg" alt="clients" width={200} height={50} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MagicalNumbers;

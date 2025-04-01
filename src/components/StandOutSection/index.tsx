'use client';

import { tw } from 'twind';

export default function ServicesSection() {
    return (
        <section className={tw`relative py-32 bg-white text-white font-satoshi`}>
            {' '}
            {/* Increased section height */}
            <div className={tw`max-w-7xl mx-auto flex items-center gap-8`}>
                {/* Left Text */}
                <div className={tw`flex-1 text-left`} style={{ transform: 'translateY(-120px)' }}>
                    <h2 className={tw`text-5xl font-bold leading-tight text-[#050505] font-satoshi`}>
                        {/* Bigger heading */}
                        <div>How We Are</div>
                        <div>Stands Out</div>
                        <div className={tw`mt-2`}>From Others</div> {/* Adjusted position */}
                    </h2>
                    <p className={tw`text-[#474747] mt-4 max-w-md font-satoshi`}>
                        Our biggest edge is that, through our association with big names in the finance world, we are
                        privy to emerging trends, technologies, and best practices that come with each region and
                        industry. We use our network to stay ahead of the curve!
                    </p>
                </div>

                {/* Center Image */}
                <div className={tw`flex-shrink-0 w-2/5`}>
                    <img
                        src="/standsout/standsout.png"
                        alt="Business Team"
                        className={tw`w-full h-[756px] object-cover rounded-[100px]`} /* Increased height */
                    />
                </div>

                {/* Right Text */}
                <div
                    className={tw`flex-1 text-left flex flex-col justify-center`}
                    style={{ transform: 'translateY(50px)' }}
                >
                    {' '}
                    {/* Center aligned */}
                    <h3
                        className={tw`text-3xl font-bold text-center mt-24 font-satoshi`}
                        style={{ color: 'rgba(4, 8, 234, 1)', textAlign: 'left' }}
                    >
                        Our Approach To Our Services
                    </h3>
                    <p className={tw`text-gray-300 mt-4 text-left max-w-md mx-auto text-[rgb(71,71,71)] font-satoshi`}>
                        Combines deep industry expertise with cutting-edge technology to provide businesses with
                        unmatched financial solutions. We prioritize precision, transparency, and innovation, ensuring
                        our clients remain financially secure and ahead of the competition.
                    </p>
                    <div className={tw`mt-6 text-left`}>
                        <a
                            href="#"
                            className={tw`bg-[rgba(4,8,234,1)] text-white px-6 py-3 rounded-[100px] font-bold font-satoshi text-center`}
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

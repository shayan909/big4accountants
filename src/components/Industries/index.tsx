import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Controller, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

const Industries = () => {
    const [swiper1, setSwiper1] = useState(null);
    const [swiper2, setSwiper2] = useState(null);
    const chunkIndustries = (industries) => {
        let firstRow = [];
        let secondRow = [];
        let toggle = true;
        let i = 0;

        while (i < industries.length) {
            if (toggle) {
                firstRow = [...firstRow, ...industries.slice(i, i + 4)];
                i += 4;
            } else {
                secondRow = [...secondRow, ...industries.slice(i, i + 3)];
                i += 3;
            }
            toggle = !toggle; // Switch between 4 and 3 items
        }

        return { firstRow, secondRow };
    };

    const industries = [
        {
            title: 'Health Care',
            icon: '/industry/1.svg',
            description: 'Innovative medical solutions',
            stats: '24% Growth',
        },
        {
            title: 'Technology',
            icon: '/industry/1.svg',
            description: 'Cutting-edge software services',
            stats: '32% Growth',
        },
        {
            title: 'Automotive',
            icon: '/industry/1.svg',
            description: 'Electric vehicle technologies',
            stats: '18% Growth',
        },
        {
            title: 'Aviation',
            icon: '/industry/1.svg',
            description: 'Aerospace innovations',
            stats: '22% Growth',
        },
        {
            title: 'Finance',
            icon: '/industry/1.svg',
            description: 'Fintech solutions',
            stats: '28% Growth',
        },
        {
            title: 'Manufacturing',
            icon: '/industry/1.svg',
            description: 'Industrial automation',
            stats: '15% Growth',
        },
        {
            title: 'Logistics',
            icon: '/industry/1.svg',
            description: 'Supply chain optimization',
            stats: '20% Growth',
        },
        {
            title: 'Agriculture',
            icon: '/industry/3.svg',
            description: 'Sustainable farming tech',
            stats: '12% Growth',
        },
        {
            title: 'Real Estate',
            icon: '/industry/2.svg',
            description: 'Property tech innovations',
            stats: '25% Growth',
        },
        {
            title: 'Retail',
            icon: '/industry/2.svg',
            description: 'E-commerce solutions',
            stats: '30% Growth',
        },
        {
            title: 'Telecom',
            icon: '/industry/3.svg',
            description: '5G infrastructure',
            stats: '21% Growth',
        },
        {
            title: 'Mobile',
            icon: '/industry/3.svg',
            description: 'App development',
            stats: '35% Growth',
        },
        {
            title: 'Data',
            icon: '/industry/2.svg',
            description: 'Big data analytics',
            stats: '27% Growth',
        },
    ];
    const { firstRow, secondRow } = chunkIndustries(industries);
    return (
        <section className="lg:py-32 pt-28 overflow-hidden text-center">
            <h2
                className="text-6xl lg:text-6xl font-bold text-gray-900 mb-20"
                style={{ fontFamily: 'Satoshi', fontWeight: 700 }}
            >
                Our Industries
            </h2>

            {/* Top Row - 4 Cards */}
            <div className="mx-auto px-6 mb-12 mt-24" style={{ maxWidth: '69rem' }}>
                <Swiper
                    modules={[Autoplay, Controller]}
                    spaceBetween={1}
                    slidesPerView={4}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 },
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: true,
                    }}
                    onSwiper={setSwiper1}
                    controller={{ control: swiper2 }}
                >
                    {firstRow.map((industry, index) => (
                        <SwiperSlide key={index}>
                            <IndustryCard industry={industry} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Bottom Row - 3 Cards */}
            <div className="mx-auto px-6 mb-12" style={{ maxWidth: '52rem' }}>
                <Swiper
                    modules={[Autoplay, Controller, Pagination]}
                    spaceBetween={10}
                    slidesPerView={3}
                    breakpoints={{
                        340: { slidesPerView: 2 },
                        1024: { slidesPerView: 2 },
                        1280: { slidesPerView: 3 },
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: true,
                    }}
                    pagination={{
                        clickable: true,
                        el: '.custom-pagination',
                    }}
                    onSwiper={setSwiper2}
                    controller={{ control: swiper1 }}
                >
                    {secondRow.map((industry, index) => (
                        <SwiperSlide key={index}>
                            <IndustryCard industry={industry} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Pagination - Now Controls Both Swipers */}
            <div className="custom-pagination mt-8 !relative !bottom-0"></div>

            <style jsx global>{`
                .swiper-pagination-bullet {
                    width: 10px;
                    height: 10px;
                    background: rgba(217, 217, 217, 1);
                    opacity: 1;
                    margin: 0 6px !important;
                }
                .swiper-pagination-bullet-active {
                    background: rgba(12, 4, 234, 1);
                }
            `}</style>
        </section>
    );
};

const IndustryCard = ({ industry }) => {
    return (
        <div
            className="relative flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-all border border-gray-200 overflow-hidden"
            style={{
                background: 'linear-gradient(180deg, #080C0D -18.57%, #000284 123.52%)',
                width: '250px',
                height: '300px',
                borderRadius: '10px',
            }}
        >
            {/* Icon Centered */}
            <div
                className="flex justify-center items-center bg-blue-50 p-6 rounded-full"
                style={{ marginBottom: '50px' }}
            >
                <Image src={industry.icon} alt="industry" width={90} height={80} style={{ zIndex: 2 }} />,
            </div>

            {/* Title Positioned Exactly 70px Above Bottom */}
            <h3
                className="absolute w-full text-white"
                style={{
                    fontFamily: 'Satoshi, sans-serif',
                    fontWeight: 700,
                    fontSize: '25px',
                    lineHeight: '107%',
                    letterSpacing: '-2%',
                    textAlign: 'center',
                    textTransform: 'capitalize',
                    bottom: '70px',
                    zIndex: 3,
                }}
            >
                {industry.title}
            </h3>

            {/* Ellipse at Bottom */}
            <div
                className="absolute left-1/2 transform -translate-x-1/2"
                style={{
                    width: '321px',
                    height: '161px',
                    background: 'rgba(32, 203, 250, 0.28)',
                    filter: 'blur(50px)',
                    borderRadius: '50%',
                    zIndex: 1,
                    bottom: '0.5rem',
                }}
            />
        </div>
    );
};

export default Industries;

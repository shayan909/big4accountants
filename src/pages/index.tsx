import React from 'react';
import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Banner from '@/components/Banner';
import AboutUs from '@/components/AboutUs';
import ServicesSection from '@/components/ServicesSection';
import StandOutSection from '@/components/StandOutSection';
import LogoMarquee from '@/components/LogoMarquee';
import Industries from '@/components/Industries';
import Footer from '@/components/footer';
import Newsletter from '@/components/NewsLetter';
import MagicalNumbers from '@/components/MagicalNumbers';
import Testimonials from '@/components/Testimonials';

const Home = () => {
    return (
        <Page>
            <NextSeo title="Big4Accountants" description="Big 4 Accountants" />
            <Banner setIsOpen={() => {}} />
            <main>
                <AboutUs />
                <ServicesSection />
                <LogoMarquee />
                <StandOutSection />
                <MagicalNumbers />
                <Testimonials />
                <Industries />
                <Newsletter />
            </main>
            <Footer />
        </Page>
    );
};

export default Home;

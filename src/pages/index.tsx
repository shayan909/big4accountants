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
import Head from 'next/head';
import ServicesSectionTwo from '@/components/ServiceSectionTwo';

const Home = () => {
    return (
        <Page>
            <Head>
                <link rel="preload" as="image" href="/services/Advisory Financial-Strategy.webp" />
                <link rel="preload" as="image" href="/services/Taxation Compliance.webp" />
                <link rel="preload" as="image" href="/services/Audit Risk-Management.webp" />
                <link rel="preload" as="image" href="/services/Bookkeeping Outsourced-Finance.webp" />
                <link rel="preload" as="image" href="/services/Financial Reports.webp" />
                <link rel="preload" as="image" href="/services/Digital Transformation.webp" />
                <link rel="preload" as="image" href="/services/Financing Funding-Assistance.webp" />
            </Head>
            <NextSeo
                title=" Big4Accountants: Financial Consulting and Advisory Firm"
                description="Welcome to Big4Accountants, one of the leading financial consulting and advisory firms. Explore our community and services and be a part of a revolution!"
            />
            <Banner setIsOpen={() => {}} />
            <main>
                <AboutUs />
                <ServicesSection />
                <StandOutSection />
                <ServicesSectionTwo />
                <LogoMarquee />
                <Industries />
                <MagicalNumbers />
                <Testimonials />
                <Newsletter />
            </main>
            <Footer />
        </Page>
    );
};

export default Home;

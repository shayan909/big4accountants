'use client';

import { tw } from 'twind';

export default function ServicesSection() {
    return (
        <section className={tw`relative py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white`}>
            <div className={tw`max-w-6xl mx-auto text-center`}>
                <h2 className={tw`text-4xl font-bold`}>Our Services</h2>
                <p className={tw`text-gray-400 mt-2`}>
                    If everyone used the identical lorem ipsum copy, search engines would flag it for plagiarism and
                    downgrade the site for its lack of helpful content for the reader.
                </p>
            </div>

            <div className={tw`mt-12 grid grid-cols-5 gap-4 items-stretch`}>
                {/* First Column */}
                <div className={tw`col-span-1 flex flex-col h-full`}>
                    <div className={tw`relative flex-grow`}>
                        <img
                            src="/services/Advisory Financial-Strategy.webp"
                            alt="Compliance"
                            className={tw`w-full h-full object-cover rounded-lg`}
                        />
                        <div className={tw`absolute bottom-4 left-4`}>
                            <h3 className={tw`font-bold`}>Regulation & Compliance</h3>
                            <span className={tw`text-blue-400 text-lg`}>→</span>
                        </div>
                    </div>
                </div>

                {/* Second Column */}
                <div className={tw`col-span-1 flex flex-col h-full gap-4`}>
                    <div className={tw`relative flex-grow`}>
                        <img
                            src="/services/Audit Risk-Management.webp"
                            alt="Audit"
                            className={tw`w-full h-full object-cover rounded-lg`}
                        />
                        <div className={tw`absolute bottom-2 left-4`}>
                            <h3 className={tw`font-bold`}>Audit & Risk Management</h3>
                            <span className={tw`text-blue-400 text-lg`}>→</span>
                        </div>
                    </div>
                    <div className={tw`relative flex-grow`}>
                        <img
                            src="/services/Bookkeeping Outsourced-Finance.webp"
                            alt="Bookkeeping"
                            className={tw`w-full h-full object-cover rounded-lg`}
                        />
                        <div className={tw`absolute bottom-2 left-4`}>
                            <h3 className={tw`font-bold`}>Bookkeeping & Finance</h3>
                            <span className={tw`text-blue-400 text-lg`}>→</span>
                        </div>
                    </div>
                </div>

                {/* Blue Card */}
                <div className={tw`col-span-1 flex items-center justify-center h-full`}>
                    <div
                        className={tw`text-center p-8 rounded-lg shadow-lg flex flex-col h-full justify-center text-white`}
                        style={{
                            background: 'linear-gradient(to bottom, rgba(4,8,234,1), rgba(2,4,132,1))',
                        }}
                    >
                        <div className={tw`text-4xl`}>🎯</div>
                        <h3 className={tw`text-xl font-bold mt-4`}>Advisory & Financial Strategy</h3>
                        <p className={tw`text-sm text-gray-200 mt-2`}>
                            If everyone used the identical lorem ipsum copy, search engines would flag it for
                            plagiarism.
                        </p>
                        <a href="#" className={tw`mt-4 inline-block text-white font-bold underline`}>
                            Learn More
                        </a>
                    </div>
                </div>

                {/* Fourth Column */}
                <div className={tw`col-span-1 flex flex-col h-full gap-4`}>
                    <div className={tw`relative flex-grow`}>
                        <img
                            src="/services/Digital Transformation.webp"
                            alt="ERP"
                            className={tw`w-full h-full object-cover rounded-lg`}
                        />
                        <div className={tw`absolute bottom-2 left-4`}>
                            <h3 className={tw`font-bold`}>Digital Transformation</h3>
                            <span className={tw`text-blue-400 text-lg`}>→</span>
                        </div>
                    </div>
                    <div className={tw`relative flex-grow`}>
                        <img
                            src="/services/Financial Reports.webp"
                            alt="Analytics"
                            className={tw`w-full h-full object-cover rounded-lg`}
                        />
                        <div className={tw`absolute bottom-2 left-4`}>
                            <h3 className={tw`font-bold`}>Financial Reporting</h3>
                            <span className={tw`text-blue-400 text-lg`}>→</span>
                        </div>
                    </div>
                </div>

                {/* Fifth Column */}
                <div className={tw`col-span-1 flex flex-col h-full`}>
                    <div className={tw`relative flex-grow`}>
                        <img
                            src="/services/Financing Funding-Assistance.webp"
                            alt="Funding"
                            className={tw`w-full h-full object-cover rounded-lg`}
                        />
                        <div className={tw`absolute bottom-4 left-4`}>
                            <h3 className={tw`font-bold`}>Financing & Funding Assistance</h3>
                            <span className={tw`text-blue-400 text-lg`}>→</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

import { tw } from 'twind';

const Newsletter = () => {
    return (
        <div className={tw`bg-black py-16 flex justify-center`}>
            <div
                className={tw`w-full max-w-3xl p-12 rounded-2xl shadow-xl text-center relative`}
                style={{
                    background: 'linear-gradient(180deg, #050505 32.01%, #0417EA 100%)', // Rectangle 5 gradient
                    zIndex: 0,
                    boxShadow: '0px 4px 30px rgba(0, 0, 0, 0.25)', // Rectangle 5 shadow
                    backdropFilter: 'blur(7px)', // Rectangle 5 backdrop filter
                }}
            >
                {/* Overlay Gradient from Rectangle 5 */}
                <div
                    className={tw`absolute inset-0 rounded-2xl`}
                    style={{
                        boxSizing: 'border-box',
                        background: 'linear-gradient(180deg, #050505 32.01%, #0417EA 100%)',
                        boxShadow: '0px 4px 30px rgba(0, 0, 0, 0.25)', // Rectangle 6 shadow
                        backdropFilter: 'blur(7px)',
                        borderRadius: '20px',
                        zIndex: -1,
                    }}
                ></div>

                {/* Bottom Solid Layer from Rectangle 9 */}
                <div
                    className={tw`absolute inset-0 bg-[#1A1A1A] rounded-2xl`}
                    style={{
                        zIndex: -2, // Push it behind the other layers
                    }}
                ></div>

                <h2 className={tw`text-white text-3xl font-semibold mb-4`}>Subscribe to Our Newsletter</h2>
                <p className={tw`text-gray-400 text-base mb-6 max-w-lg mx-auto`}>
                    Stay updated with our latest news and exclusive offers by subscribing to our newsletter.
                </p>

                {/* Newsletter Form */}
                <div
                    className={tw`flex items-center border border-gray-700 rounded-full overflow-hidden max-w-lg mx-auto`}
                >
                    <input
                        type="email"
                        placeholder="Enter Your Email"
                        className={tw`w-full px-4 py-3 bg-transparent text-white placeholder-gray-500 focus:outline-none text-sm`}
                    />
                    <button
                        className={tw`bg-blue-600 text-white px-6 py-3 font-medium rounded-full hover:bg-blue-500 transition-all text-sm`}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;

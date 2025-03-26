import { tw } from 'twind';

const Newsletter = () => {
    return (
        <div className={tw`flex justify-center relative -mb-24`}>
            <div
                className={tw`w-full max-w-3xl bg-gradient-to-b from-black to-blue-700 p-12 rounded-2xl shadow-2xl text-center relative z-10`}
            >
                <h2 className={tw`text-white text-3xl font-semibold mb-4`}>Subscribe to Our Newsletter</h2>
                <p className={tw`text-gray-300 text-base mb-6 max-w-lg mx-auto`}>
                    Stay updated with our latest news and exclusive offers by subscribing to our newsletter.
                </p>

                {/* Newsletter Form */}
                <div
                    className={tw`flex items-center border border-white rounded-full overflow-hidden bg-transparent max-w-lg mx-auto`}
                >
                    <input
                        type="email"
                        placeholder="Enter Your Email"
                        className={tw`w-full px-4 py-3 bg-transparent text-white placeholder-gray-400 focus:outline-none text-sm`}
                    />
                    <button
                        className={tw`bg-white text-black px-6 py-3 font-medium rounded-full hover:opacity-80 transition-all text-sm`}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;

import { tw } from 'twind';

const Newsletter = () => {
    return (
        <div className={tw`flex justify-center relative -mb-24`}>
            <div
                className={tw`w-full max-w-2xl bg-gradient-to-br from-gray-900 via-blue-700 to-blue-500 p-10 rounded-2xl shadow-2xl text-center relative z-10`}
            >
                <h2 className={tw`text-white text-4xl font-extrabold mb-4`}>Stay Updated</h2>
                <p className={tw`text-gray-300 text-sm mb-6`}>
                    Subscribe to our newsletter to receive the latest updates and insights directly to your inbox.
                </p>

                {/* Newsletter Form */}
                <div className={tw`flex items-center border border-gray-600 rounded-full overflow-hidden bg-gray-800`}>
                    <input
                        type="email"
                        placeholder="Enter Your Email"
                        className={tw`w-full px-5 py-3 bg-transparent text-white placeholder-gray-400 focus:outline-none`}
                    />
                    <button
                        className={tw`bg-blue-600 text-white px-6 py-3 font-medium hover:bg-blue-700 transition-all`}
                    >
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;

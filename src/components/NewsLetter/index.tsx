import { tw } from 'twind';

const Newsletter = () => {
    return (
        <div className={tw`flex justify-center relative -mb-24`}>
            <div
                className={tw`w-full max-w-4xl bg-gradient-to-b from-black to-blue-700 p-12 rounded-2xl shadow-2xl text-center relative z-10`}
            >
                <h2 className={tw`text-white text-3xl font-semibold mb-4`}>Subscribe Our Newsletter</h2>
                <p className={tw`text-gray-300 text-base mb-6`}>
                    It is a long established fact that a reader will be distracted by the readable content of a page
                    when looking at its layout. The point of using
                </p>

                {/* Newsletter Form */}
                <div className={tw`flex items-center border border-white rounded-full overflow-hidden bg-transparent`}>
                    <input
                        type="email"
                        placeholder="Enter Your Email"
                        className={tw`w-full px-5 py-3 bg-transparent text-white placeholder-gray-400 focus:outline-none`}
                    />
                    <button
                        className={tw`bg-white text-black px-6 py-3 font-medium rounded-full hover:opacity-80 transition-all`}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;

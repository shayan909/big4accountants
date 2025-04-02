import { tw } from 'twind';

const Newsletter = () => {
    return (
        <div className={tw`bg-[rgba(26,26,26,1)] py-16 flex justify-center font-[Satoshi]`}>
            {/* Newsletter Box with Background Image and Gradient Border */}
            <div
                className={tw`w-full p-12 rounded-3xl shadow-xl text-center relative mt-11 mb-0 pb-0`}
                style={{
                    backgroundImage: "url('/newsletter/newsletter.png')", // Your image path
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    borderRadius: '20px', // Rounded corners
                    borderImageSlice: 1, // Ensures full coverage
                    overflow: 'hidden',
                    maxWidth: '69rem',
                    height: '23rem',
                }}
            >
                <h2 className={tw`text-white text-5xl font-semibold mb-4 relative z-10 mt-12`}>
                    Subscribe to Our Newsletter
                </h2>
                <p className={tw`text-gray-300 text-base text-2xl mb-6 max-w-lg mx-auto z-10 mb-2`}>
                    Stay updated with our latest news and exclusive offers by subscribing to our newsletter.
                </p>

                {/* Newsletter Form with White Border and Updated Button */}
                <div
                    className={tw`flex items-center border border-white rounded-full overflow-hidden mx-auto relative z-10 mt-6`}
                    style={{ maxWidth: '40rem' }}
                >
                    <input
                        type="email"
                        placeholder="Enter Your Email"
                        className={tw`w-full px-6 py-3 bg-transparent text-white placeholder-white focus:outline-none text-md`}
                    />
                    <button
                        className={tw`bg-white text-black font-semibold px-10 py-4 rounded-full hover:bg-gray-200 transition-all text-md`}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;

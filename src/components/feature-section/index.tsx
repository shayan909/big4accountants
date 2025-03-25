import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';
import FadeInSection from '@/components/FadeInSection';

const FeatureSection = () => (
  <FadeInSection>
    <section id="whyUs" className={tw(`bg-white pb-6`)}>
      <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
        <div className={tw(`container mx-auto px-6 p-6 bg-white`)}>
          <div className={tw(`mb-16 text-center`)}>
            <p className={tw(`mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>
              Why we are better than ERPs
            </p>
            <p
              style={{ marginTop: '20px', marginBottom: '-50px' }}
              className={tw('mt-2 mb-4 text-sm lg:text-xl font-bold tracking-tight text-gray-900')}
            >
              Add value to your investments in ERPs
            </p>
          </div>
          <div className={tw(`flex flex-wrap my-12`)}>
            <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8`)}>
              <div className={tw(`flex items-center mb-6`)}>
                <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
                <div className={tw(`ml-4 text-xl`)}>More value, less spend</div>
              </div>
              <p className={tw(`leading-loose text-gray-500`)}>Affordable pricing without compromising on features</p>
            </div>
            <div className={tw(`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8`)}>
              <div className={tw(`flex items-center mb-6`)}>
                <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
                <div className={tw(`ml-4 text-xl`)}>Redefined flexibility</div>
              </div>
              <p className={tw(`leading-loose text-gray-500 `)}>Tailored solutions that adapt to your business</p>
            </div>
            <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8`)}>
              <div className="flex items-center mb-6">
                <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
                <div className={tw(`ml-4 text-xl`)}>Simple Setup</div>
              </div>
              <p className={tw(`leading-loose text-gray-500`)}>Get up and running in no time with our system</p>
            </div>
            {/* <div className={tw(`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8`)}>
              <div className={tw(`flex items-center mb-6`)}>
                <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
                <div className={tw(`ml-4 text-xl`)}>Automate away</div>
              </div>
              <p className={tw(`leading-loose text-gray-500`)}>
                Cut down expenses and streamline operations with a few clicks
              </p>
            </div>
            <div className={tw(`w-full border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8`)}>
              <div className={tw(`flex items-center mb-6`)}>
                <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
                <div className={tw(`ml-4 text-xl`)}>Customisation Made Easy</div>
              </div>
              <p className={tw(`leading-loose text-gray-500`)}>Personalise your experience, the way you want</p>
            </div> */}
            {/* <div className={tw(`w-full md:w-1/2 lg:w-1/3 p-8`)}>
              <div className={tw(`flex items-center mb-6`)}>
                <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
                <div className={tw(`ml-4 text-xl`)}>Cutting-Edge Tech</div>
              </div>
              <p className={tw(`leading-loose text-gray-500`)}>
                Cutting-edge, cloud-based tools for superior performance
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  </FadeInSection>
);

export default FeatureSection;

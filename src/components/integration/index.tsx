import { tw } from 'twind';
import Image from 'next/image';
import FeatureSvg from '@/constants/svg/features.svg';
import { PaperAirplaneIcon } from '@heroicons/react/20/solid';
import FadeInSection from '@/components/FadeInSection';

const Integration = () => (
  <FadeInSection>
    <section>
      <div className={tw('bg-gray-900 relative')}>
        {' '}
        <div className={tw(`mt-20 mb-20 relative z-3`)}>
          <div className={tw(`grid grid-cols-1 gap-y-10 gap-x-6 lg:grid-cols-2 xl:gap-x-8`)}>
            <div className={tw(`p-10 flex flex-col justify-center`)}>
              <h4 className={tw(`text-1xl md:text-4xl font-semibold mb-3 text-white`)}>
                Integrate our manufacturing inventory management software with platforms you like
              </h4>
              <div className={tw(`flex justify-left`)}>
                <button className={tw(`bg-black text-white text-md font-small py-2 px-5 mt-8 rounded-full`)}>
                  Learn More{' '}
                </button>
              </div>
            </div>
            <div className={tw(`hidden lg:block`)}>
              <div className={tw(`float-right pt-20 relative`)}>
                <FeatureSvg width={588} height={334} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </FadeInSection>
);

export default Integration;

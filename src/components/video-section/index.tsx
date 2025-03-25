import { tw } from 'twind';
import { useState } from 'react';
import Play from '@/constants/svg/play.svg';
import FadeInSection from '@/components/FadeInSection';

const PlayButton = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={tw(
      `w-64 lg:w-auto absolute top-full left-1/2 flex items-center transform
      -translate-y-1/2 -translate-x-1/2 bg-white rounded-full font-medium group p-4 shadow-xl`,
    )}
    aria-label="play video"
  >
    <Play className={tw(`w-6 h-6 fill-current text-gray-400 group-hover:text-blue-600 flex-shrink-0`)} />
    <span className={tw(`ml-3`)}>Watch the video (5 min)</span>
  </button>
);

const VideoSection = () => {
  const [playVideo, setPlayVideo] = useState(false);

  const handlePlayButtonClick = () => {
    setPlayVideo(true);
  };

  return (
    <FadeInSection>
      <section className={tw(`bg-gradient-to-b from-gray-50 to-white shadow-inner`)}>
        <div className={tw(`max-w-7xl mx-auto`)}>
          <div className={tw(`flex flex-col max-w-4xl mx-auto pt-16`)}>
            <div className={tw(`mb-16 text-center`)}>
              <p className={tw(`mt-0 text-4xl lg:text-6xl font-bold tracking-tight text-gray-900`)}>
                Watch us in action
              </p>
            </div>
            <div className={tw(`w-full`)}>
              <div className={tw(`relative shadow-2xl mx-6 lg:mx-0`)}>
                <iframe
                  width="100%"
                  height="500"
                  src={`https://www.youtube.com/embed/rIJwIrGRYAk${playVideo ? '?autoplay=1' : ''}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                {!playVideo && <PlayButton onClick={handlePlayButtonClick} />}
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
};

export default VideoSection;

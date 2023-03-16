import { tw } from 'twind';
import { css } from 'twind/css';

const videoStyle = css`
  width: 100%;
  height: 546px;

  @media (max-width: 576px) {
    height: 300px;
  }
`;

const Title = css`
  background: linear-gradient(180deg, #2a0940 45%, rgba(111, 68, 134, 0.767672) 90%, rgba(206, 149, 231, 0.45) 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
`;

const VideoSection = () => (
  <section id="pitch" className={tw(`bg-gradient-to-b from-gray-50 to-white shadow-inner`)}>
    <div className={tw(`pt-16 text-center`)}>
      <p className={tw(`text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`, Title)}>Pitch Deck</p>
    </div>
    <div className={tw(`max-w-7xl mx-auto`)}>
      <div className={tw(`flex flex-col max-w-4xl mx-auto pt-28`)}>
        <div className={tw(`w-full`)}>
          <div className={tw(`relative shadow-2xl mx-6 lg:mx-0`)}>
            <iframe
              className={tw(videoStyle)}
              src="https://www.youtube.com/embed/-FVcBFWNj7Y"
              title="Pitch Anotei V1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media;\n
               gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default VideoSection;

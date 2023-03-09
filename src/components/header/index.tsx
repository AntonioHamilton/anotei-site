import { tw, css } from 'twind/css';
import Button from '@/components/button';
import Netlify from '@/constants/svg/netlify.svg';
import Nike from '@/constants/svg/nike.svg';
import Figma from '@/constants/svg/figma.svg';
import Aws from '@/constants/svg/aws.svg';

const headerStyle = css`
  background-color: #ffffff;
  min-height: calc(100vh - 6rem);
`;

const logoStyle = css`
  filter: grayscale(1);
`;

const Header = () => (
  <header className={tw(headerStyle)}>
    <div className={tw(`flex flex-row max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8`)}>
      <div className={tw(`basis-1/2 justify-center items-center flex flex-col `)}>
        <h1
          className={tw(`font-sans font-bold text-4xl md:text-5xl lg:text-8xl text-center leading-snug text-gray-800`)}
        >
          Anotei
        </h1>
        <div className={tw(`max-w-xl mx-auto`)}>
          <p className={tw(`mb-20 mt-4 text-gray-500 text-center text-xl lg:text-3xl`)}>
            Um aplicativo que possibilita a anotação de todas as suas indicações
          </p>
        </div>
      </div>
      <div className={tw(`basis-1/2 justify-center items-center flex flex-1 flex-col grow`)}>
        <img src="/images/app_img.png" width={200} height={200} alt="app_img" />
      </div>
    </div>
    <div className={tw(`flex justify-center w-full my-8`)}>
      <div className={tw(`mt-4 w-full`)}>
        <p className={tw(`font-sans uppercase text-center font-medium text-md text-gray-600 font-semibold`)}>
          Parceiros
        </p>
        <div className={tw(`flex items-center justify-center mx-auto my-4 flex-wrap`)}>
          <img src="/images/logo-dcomp.jpg" alt="dcomp logo" className={tw(`mx-12 mt-4`, logoStyle)} width={120} />
          <img src="/images/ccet-ufs-logo.png" alt="ufs ccet logo" className={tw(`mx-12`, logoStyle)} width={200} />
          <img src="/images/logo-ufs.png" alt="ufs logo" className={tw(`mx-12`, logoStyle)} width={80} />
        </div>
      </div>
    </div>
  </header>
);

export default Header;

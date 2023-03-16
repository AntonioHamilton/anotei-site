import { tw } from 'twind';
import FeatureSvg from '@/constants/svg/features.svg';
import { css } from 'twind/css';

const listItems = [
  {
    title: `Maior do país`,
    description: `Vamos tornar o Anotei o aplicativo de gerenciamento de conteúdo de cultura pop mais utilizado em todo o país, oferecendo aos usuários uma maneira fácil e gratuita de organizar seus programas de TV, filmes, animes e livros favoritos.`,
  },
  {
    title: `Expandir os métodos de compartilhamento`,
    description: `Queremos expandir as opções de compartilhamento de conteúdo do Anotei para permitir que os usuários vejam e interajam com os conteúdos favoritos de seus amigos.`,
  },
  {
    title: `Integrar o Anotei com outras plataformas`,
    description: `Iremos integrar o Anotei com mais plataformas de streaming de vídeo para fornecer uma experiência de gerenciamento de conteúdo mais abrangente aos usuários.`,
  },
];

const Title = css`
  background: linear-gradient(180deg, #2a0940 45%, rgba(111, 68, 134, 0.767672) 90%, rgba(206, 149, 231, 0.45) 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
`;

const RoundedCSS = css`
  background: rgb(218, 163, 255);
`;

const Goals = () => (
  <section id="goals" className={tw(`lg:py-28 pt-28 overflow-hidden`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white`)}>
      <div className={tw(`mb-16 text-center`)}>
        <p className={tw(`mt-2 pb-4 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`, Title)}>
          Objetivos Futuros
        </p>
      </div>
      <div className={tw(`flex flex-wrap -mx-8 items-center`)}>
        <div className={tw(`w-full lg:w-1/2 px-8`)}>
          <ul className={tw(`space-y-12`)}>
            {listItems.map((item, index) => (
              <li className={tw(`flex -mx-4`)} key={item.title}>
                <div className={tw(`px-4`)}>
                  <span
                    className={tw(
                      `flex w-16 h-16 mx-auto items-center
                      justify-center text-2xl font-bold rounded-full
                      text-black-500`,
                      RoundedCSS,
                    )}
                  >
                    {index + 1}
                  </span>
                </div>
                <div className={tw(`px-4`)}>
                  <h3 className={tw(`my-4 text-xl font-semibold`)}>{item.title}</h3>
                  <p className={tw(`text-gray-500 leading-loose`)}>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={tw(`w-full lg:w-1/2 px-8`)}>
          <div className={tw(`lg:mb-12 lg:mb-0 pb-12 lg:pb-0 mt-16 lg:mt-0 mx-6 lg:mx-0`)}>
            <FeatureSvg width="100%" height="100%" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Goals;

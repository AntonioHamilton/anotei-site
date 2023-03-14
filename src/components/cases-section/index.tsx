import { tw } from 'twind';
import Particles from 'react-particles-js';
import { css } from 'twind/css';

const ParticleBg = () => (
  <Particles
    params={{
      particles: {
        number: {
          value: 400,
          density: {
            enable: true,
            value_area: 3000,
          },
        },
        line_linked: {
          enable: false,
        },
        move: {
          direction: `right`,
          speed: 0.3,
        },
        size: {
          value: 1,
        },
        opacity: {
          anim: {
            enable: true,
            speed: 0.5,
            opacity_min: 0.1,
          },
        },
      },
      interactivity: {
        events: {
          onclick: {
            enable: false,
          },
        },
      },
      retina_detect: true,
    }}
  />
);

const articles = [
  {
    title: `Anotar conteúdos`,
    image: `/images/feature-1.jpg`,
    alt: `Proident pariatur est.`,
    // eslint-disable-next-line max-len
    description: `Mantenha-se organizado tendo um local para se lembrar dos seus conteúdos que você pretende consumir, está acompanhando ou concluiu.`,
  },
  {
    title: `Avaliar anotações`,
    image: `/images/feature-2.jpg`,
    alt: `Proident pariatur est.`,
    // eslint-disable-next-line max-len
    description: `Escreva avaliações e atribua notas ao seus conteúdos anotados e sempre tenha na palma da mão o que você achou de cada conteúdo.`,
  },
  {
    title: `Faça amigos`,
    image: `/images/feature-3.jpg`,
    alt: `Proident pariatur est.`,
    // eslint-disable-next-line max-len
    description: `Encontre pessoas, faça amigos e visite o seu perfil para visualizar quantos conteúdos eles tem anotados e seus favoritos.`,
  },
];

const Title = css`
  background: linear-gradient(180deg, #2a0940 45%, rgba(111, 68, 134, 0.767672) 90%, rgba(206, 149, 231, 0.45) 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
`;

const imageCSS = css`
  height: 360px;
`;

const CasesSection = () => (
  <section id="features">
    <div className={tw(`w-full min-h-screen relative`)}>
      <div className={tw(`max-w-7xl mx-4 lg:mx-auto pt-20 lg:pt-40`)}>
        <h1 className={tw(`text-4xl lg:text-7xl font-bold text-center`, Title)}>Funcionalidades</h1>
        <div className={tw(`mx-auto pt-24`)}>
          <div className={tw(`w-full flex flex-wrap justify-around`)}>
            {articles.map((article) => (
              <div
                key={article.title}
                className={tw(
                  `xl:w-1/3 sm:w-5/12 sm:max-w-xs relative mb-32 lg:mb-20
                      xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0 cursor-pointer hover:scale-105`,
                )}
              >
                <div className={tw(`h-5/6 z-20`)}>
                  <img
                    src={article.image}
                    alt={article.alt}
                    className={tw(`h-full w-full object-cover overflow-hidden rounded`, imageCSS)}
                  />
                </div>
                <div className={tw(`p-4 shadow-lg w-full mx-auto -mt-8 bg-white rounded-b z-30 relative`)}>
                  <p className={tw(`uppercase text-sm text-gray-700 text-center pb-1`)}>{article.title}</p>
                  <p className={tw(`text-gray-500 text-center pb-1 text-sm`)}>{article.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CasesSection;

import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';
import { css } from 'twind/css';

const Title = css`
  background: linear-gradient(180deg, #2a0940 45%, rgba(111, 68, 134, 0.767672) 90%, rgba(206, 149, 231, 0.45) 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
`;

const CheckCSS = css`
  color: #7308ba;
`;

const Differences = () => (
  <section id="our-difference" className={tw(`bg-white pb-6`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
      <div className={tw(`container mx-auto px-6 p-6 bg-white`)}>
        <div className={tw(`mb-16 text-center`)}>
          <p className={tw(`mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`, Title)}>Diferenciais</p>
        </div>
        <div className={tw(`flex flex-wrap my-12`)}>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`, CheckCSS)} />
              <div className={tw(`ml-4 text-xl`)}>Gratuito</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              Nós sabemos que dinheiro é importante, por isso decidimos que nosso aplicativo seria totalmente gratuito!
              Anote quantos conteúdos quiser, sem qualquer custo
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`, CheckCSS)} />
              <div className={tw(`ml-4 text-xl`)}>Tudo em um lugar</div>
            </div>
            <p className={tw(`leading-loose text-gray-500 `)}>
              Gerenciar seus conteúdos nunca foi tão fácil! Esqueça a necessidade de usar vários aplicativos, com o
              Anotei, você tem tudo o que precisa em uma única plataforma.
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8`)}>
            <div className="flex items-center mb-6">
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`, CheckCSS)} />
              <div className={tw(`ml-4 text-xl`)}>Design intuitivo</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              Nosso design foi cuidadosamente desenvolvido com inspiração nos aplicativos de streaming mais famosos,
              para que você possa se sentir à vontade e aproveitar ao máximo nossa plataforma.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Differences;

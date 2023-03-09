import { tw } from 'twind';

const team = [
  {
    name: `Marcelo Cavalho`,
    company: `Owner`,
    image: `/images/marcelo.jpg`,
  },
  {
    name: `Antonio Hamilton`,
    company: `Frontend`,
    image: `/images/chat.jpg`,
  },
  {
    name: `Gustavo Farias`,
    company: `Frontend`,
    image: `/images/gustavo.jpg`,
  },
  {
    name: `Matheus Lima`,
    company: `Backend`,
    image: `/images/matheus.jpg`,
  },
  {
    name: `Edvan Sousa`,
    company: `Backend`,
    image: `/images/edvan.jpg`,
  },
  {
    name: `Caio Leone`,
    company: `Backend`,
    image: `/images/caio.jpg`,
  },
  {
    name: `João Pedro`,
    company: `Backend`,
    image: `/images/jota.jpg`,
  },
];

const SocialProof = () => (
  <section id="team" className={tw(`bg-white pb-6`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
      <div className={tw(`container mx-auto px-6 p-6 bg-white`)}>
        <div className={tw(`mb-16 text-center`)}>
          <p className={tw(`mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>Equipe</p>
        </div>
      </div>
      <div className={tw(`flex flex-row justify-center items-center flex-wrap mx-auto my-8 gap-x-10`)}>
        {team.map((person) => (
          <div key={person.name} className={tw(`mx-auto`)}>
            <div className={tw(`flex items-center pb-12`)}>
              <div className={tw(`h-12 w-12`)}>
                <img
                  src={person.image}
                  alt={person.name}
                  className={tw(`h-full w-full object-cover overflow-hidden rounded-full`)}
                  height={48}
                  width={48}
                />
              </div>
              <p className={tw(`text-gray-600 font-bold ml-3`)}>
                {person.name} <br />
                <span className={tw(`text-gray-600 text-base font-light`)}>{person.company}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProof;

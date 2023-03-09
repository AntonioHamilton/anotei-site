import { tw } from 'twind';
import { useState } from 'react';
import Quote from '@/constants/svg/quote.svg';

const team = [
  {
    name: `John Doe`,
    company: `Dev`,
    image: `/images/social-1.webp`,
  },
  {
    name: `Jack Doe`,
    company: `Dev`,
    image: `/images/social-2.webp`,
  },
  {
    name: `Jack Doe`,
    company: `Dev`,
    image: `/images/social-2.webp`,
  },
  {
    name: `Jack Doe`,
    company: `Dev`,
    image: `/images/social-2.webp`,
  },
  {
    name: `Jack Doe`,
    company: `Dev`,
    image: `/images/social-2.webp`,
  },
  {
    name: `Jack Doe`,
    company: `Dev`,
    image: `/images/social-2.webp`,
  },
  {
    name: `Jack Doe`,
    company: `Dev`,
    image: `/images/social-2.webp`,
  },
];

const SocialProof = () => (
  <section className={tw(`bg-white pb-6`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
      <div className={tw(`container mx-auto px-6 p-6 bg-white`)}>
        <div className={tw(`mb-16 text-center`)}>
          <p className={tw(`mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>Equipe</p>
        </div>
      </div>
      <div className={tw(`flex flex-row mx-auto my-8`)}>
        {team.map((person) => (
          <div className={tw(`container mx-auto my-8`)}>
            <div className={tw(`flex items-center justify-between`)}>
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
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProof;

import { tw } from 'twind';

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer className={tw(`bg-white border-t border-gray-400 pt-14 pb-16`)}>
      <div className={tw(`max-w-7xl mx-auto text-gray-400 px-8 lg:px-0 flex flex-wrap justify-center items-center`)}>
        <div className={tw(`mb-14 flex flex-col items-center w-full justify-center items-center`)}>
          <img className={tw(`h-12 w-12 mb-4`)} src="logo.svg" alt="logo" width={48} height={48} />
          <p className={tw(`text-4xl text-indigo-500 font-bold`)}>Anotei App</p>
        </div>
        <p className={tw(`text-xs`)}>Copyright &copy; {date} Anotei App</p>
      </div>
    </footer>
  );
};

export default Footer;

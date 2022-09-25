import { Header, TechnologiesShowcase } from 'components';
import useMediaQuery from 'beautiful-react-hooks/useMediaQuery';

export const Home = () => {
  const isHeaderVisible = useMediaQuery('(min-width: 731px)');

  return (
    <div className="bg-gradient-to-r from-sky-500 to-indigo-500 min-h-screen">
      {isHeaderVisible && <Header />}
      <main className="px-3 flex flex-col items-center">
        <header className="mt-40 mb-16">
          {!isHeaderVisible && (
            <div>
              <h1 className="text-white text-center font-extrabold text-4xl mb-10">
                React Vite Boilerplate
              </h1>
            </div>
          )}
          <h2 className="text-white text-center font-extrabold text-3xl lg:text-5xl">
            The best boilerplate for you React Project!
          </h2>
        </header>
        <div>
          <TechnologiesShowcase />
        </div>
      </main>
      <footer>
        <p className="font-light text-white text-center text-md mt-10">
          By Flamarion Fagundes - 2022 ©
        </p>
      </footer>
    </div>
  );
};

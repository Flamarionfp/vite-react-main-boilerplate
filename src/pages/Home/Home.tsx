import { Header, TechnologiesShowcase } from 'components';

export const Home = () => {
  return (
    <div className="bg-gradient-to-r from-sky-500 to-indigo-500 min-h-screen">
      <Header />
      <main className="flex flex-col items-center">
        <header className="mt-40 mb-16">
          <h2 className="text-white text-5xl font-extrabold">
            The best boilerplate for you React Project!
          </h2>
        </header>
        <div>
          <TechnologiesShowcase />
        </div>
      </main>
      <footer>
        <p className="font-light text-white text-center text-sm mt-10">
          By Flamarion Fagundes - 2022 ©
        </p>
      </footer>
    </div>
  );
};

export const Main = ({ title = 'React Vite Main Boilerplate' }) => {
  return (
    <div className="flex items-center p-10">
      <img className="w-10 mr-3" alt="logo typescript" src="/images/typescript-logo.png" />
      <span className="font-semibold">{title}</span>
    </div>
  );
};

import { isEmpty } from 'radash';
import useMediaQuery from 'beautiful-react-hooks/useMediaQuery';
import { Main } from 'components/Main';

export const Home = () => {
  const isSmall = useMediaQuery('(max-width: 48rem)');
  console.log('isSmall', isSmall);
  console.log('isEmpty', isEmpty('hello'));

  return <Main />;
};

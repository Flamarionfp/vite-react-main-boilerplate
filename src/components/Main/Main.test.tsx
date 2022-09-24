import { render, screen } from '@testing-library/react';
import { Main } from './Main';

describe('Testing the main component', () => {
  it('should have a heading', () => {
    render(<Main />);

    expect(
      screen.getByRole('heading', { name: /React Vite Main Boilerplate/i })
    ).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
 
import App from './App';
 
describe('App', () => {
  test('renders App snapshot', () => {
    const { asFragment } = render(<App />);
    expect(asFragment(<App />)).toMatchSnapshot();
    
  });
});
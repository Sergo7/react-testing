import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
 
import { App } from './app';
 
describe('App', () => {
  test('renders App component', () => {
    render(<App />);
 
    // screen.debug();
 
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'JavaScript' },
    });
  
    expect(screen.getByDisplayValue('JavaScript')).toBeInTheDocument();
    // screen.debug();
  });
});
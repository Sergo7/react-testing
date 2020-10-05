import React from 'react';
import { render, screen } from '@testing-library/react';
 
import { App }  from './app';

describe('Search', () => {
    it('find elements', () => {
        render(<App />);

        expect(screen.getByText('Search:')).toBeInTheDocument();
        // expect(screen.getByRole('textbox')).toBeInTheDocument();
        // expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
        // expect(screen.getByPlaceholderText('find item')).toBeInTheDocument();
        // expect(screen.getByAltText('cats')).toBeInTheDocument();
        // expect(screen.getByDisplayValue('value')).toBeInTheDocument();

        // expect(screen.getByText(/Searches for React/i)).toBeNull();
        // expect(screen.queryByText(/Searches for React/i)).toBeNull();
        //  expect(screen.queryByText(/Signed in as/i)).toBeNull();
        //  expect(await screen.findByText(/Signed in as/i)).toBeInTheDocument();
      });
  });
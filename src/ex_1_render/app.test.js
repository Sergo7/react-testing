import React from 'react';
import { render, screen } from '@testing-library/react';
 
import { App } from './app';

describe('App', () => {
    it('render app by text', () => {
      const { getByText } = render(<App />);
      const element = getByText(/hello/i);
      screen.debug();
      expect(element).toBeInTheDocument();
    });
});

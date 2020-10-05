import React from 'react';
import axios from 'axios';
import { render, screen, fireEvent } from '@testing-library/react';
 
import { App } from './app';
 
jest.mock('axios');
 
describe('App', () => {
  it('fetches stories from an API and displays them', async () => {
    const stories = [
      { objectID: '1', title: 'Hello' },
      { objectID: '2', title: 'React' },
    ];
 
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: { hits: stories } })
    );
 
    render(<App />);
    
    await fireEvent.click(screen.getByRole('button'));
 
    const items = await screen.findAllByRole('listitem');
 
    expect(items).toHaveLength(2);
  });
});
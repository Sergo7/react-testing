import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
 
import { Search } from './app';

describe('Search', () => {
    it('calls the onChange callback handler', () => {
      const onChange = jest.fn();
   
      render(
        <Search value="" onChange={onChange}>
          Search:
        </Search>
      );
   
      fireEvent.change(screen.getByRole('textbox'), {
        target: { value: 'JavaScript' },
      });
   
      expect(onChange).toHaveBeenCalledTimes(1);
    });
  });
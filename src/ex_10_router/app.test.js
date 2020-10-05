import React from 'react';
import { MemoryRouter, Route } from 'react-router';
import { render, fireEvent, screen } from '@testing-library/react';
import { UserWithRouter } from './app';

// Hoist helper functions (but not vars) to reuse between test cases
const renderComponent = ({ userId }) =>
  render(
    <MemoryRouter initialEntries={[`/users/${userId}`]}>
      <Route path="/users/:userId">
        <UserWithRouter />
      </Route>
    </MemoryRouter>
  );

it('renders initial user id', () => {
  const { getByText } = renderComponent({ userId: 5 });

  expect(getByText(/user #5/i)).toBeInTheDocument();
});

it('renders next user id', () => {
  const { getByText } = renderComponent({ userId: 5 });
  // screen.debug();
  fireEvent.click(getByText(/next user/i));
  // screen.debug();
  expect(getByText(/user #6/i)).toBeInTheDocument();
});
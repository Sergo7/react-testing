import React from 'react';
import { render, screen } from '@testing-library/react';
 
import { UserGreeter, UserContext } from './app';

function renderUserGreeter(user) {
  return render(
    <UserContext.Provider value={user}>
      <UserGreeter />
    </UserContext.Provider>
  );
}

test("UserGreeter salutes an anonymous user", () => {
  renderUserGreeter(null);
  expect(screen.getByText("Hello stranger!")).toBeInTheDocument();
});

test("UserGreeter salutes a user", () => {
  const user = { name: "Serhii" };
  renderUserGreeter(user);
  expect(screen.getByText(`Hello ${user.name}!`)).toBeInTheDocument();
});
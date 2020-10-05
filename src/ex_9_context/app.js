import React from 'react';
export const UserContext = React.createContext();

const App = () => {
  const user = getUserOrMaybeNot();

  return (
    <UserContext.Provider value={user}>
      <UserGreeter />
    </UserContext.Provider>
  );
}

export const UserGreeter = () => {
  const user = React.useContext(UserContext);

  if (!user) return "Hello stranger!";
  return `Hello ${user.name}!`;
}
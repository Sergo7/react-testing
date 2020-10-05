import React, { useState, useEffect } from 'react';

const getUser = () => Promise.resolve({ id: '1', name: 'Robin' });

export const Search = ({ value, onChange, children }) => (
    <div>
      <label htmlFor="search">{children}</label>
      <input
        id="search"
        type="text"
        placeholder="find item"
        value={value}
        onChange={onChange}
      />
    </div>
  );

export const App = () => {
  const [search, setSearch] = useState('');
  const [user, setUser] = useState(null);
 
  useEffect(() => {
    const loadUser = async () => {
      const user = await getUser();
      setUser(user);
    };
 
    loadUser();
  }, []);
 
  function handleChange(event) {
    setSearch(event.target.value);
  }
 
  return (
    <div>
      {user ? <p>Signed in as {user.name}</p> : null}
 
      <Search value={search} onChange={handleChange}>
        Search:
      </Search>
 
      <p>Searches for {search ? search : '...'}</p>

    </div>
  );
}
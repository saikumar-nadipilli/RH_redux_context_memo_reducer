import React, { useState, useMemo } from 'react';

const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Doe' },
  // imagine this list has thousands of users
];

function UserList() {
  const [search, setSearch] = useState('');

  // Memoize the filtered list
  const filteredUsers = useMemo(() => {
    console.log('Filtering users...');
    return users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search users"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;

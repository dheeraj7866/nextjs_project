import { useEffect, useState } from 'react';

interface User {
  name: string;
  email: string;
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('/api/users')
      .then((res) => res.json())
      .then(setUsers)
      .catch(() => setUsers([]));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Users from MongoDB:</h2>
      {users.length ? (
        <ul>
          {users.map((u, i) => (
            <li key={i}>
              <strong>{u.name}</strong> - {u.email}
            </li>
          ))}
        </ul>
      ) : (
        <p>No users found or error.</p>
      )}
    </div>
  );
}

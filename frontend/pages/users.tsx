// frontend/pages/users.tsx
import { useEffect, useState } from 'react';

interface User {
  name: string;
  email: string;
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('http://localhost:4000/users')
      .then(res => res.json())
      .then(setUsers)
      .catch(err => {
        console.error(err);
        setUsers([]);
      });
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Users from MongoDB:</h2>
      {users.length === 0 ? (
        <p>No users found or error occurred.</p>
      ) : (
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              <strong>{user.name}</strong> — {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

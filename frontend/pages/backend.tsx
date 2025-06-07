// frontend/pages/backend.tsx
import { useEffect, useState } from 'react';

export default function BackendPage() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000/')
      .then(res => res.text())
      .then(setMessage)
      .catch(() => setMessage('Failed to connect to backend'));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Backend Response:</h2>
      <p>{message}</p>
    </div>
  );
}

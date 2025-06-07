import { useEffect, useState } from 'react';

export default function BackendPage() {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('/api/backend')
      .then((res) => res.text())
      .then(setData)
      .catch(() => setData('Error calling backend'));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Backend says:</h2>
      <p>{data}</p>
    </div>
  );
}

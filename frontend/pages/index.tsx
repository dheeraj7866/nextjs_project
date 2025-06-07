// frontend/pages/index.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Hello frontend</h1>
      <ul style={{ marginTop: '2rem' }}>
        <li>
          <Link href="/backend">Go to Backend Response</Link>
        </li>
        <li>
          <Link href="/users">Get Users from DB</Link>
        </li>
      </ul>
    </div>
  );
}

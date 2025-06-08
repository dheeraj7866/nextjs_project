import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const backendUrl = process.env.BACKEND_URL || 'http://backend:4000';
  try {
    const response = await fetch(`${backendUrl}/users`);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    console.error('Users fetch error:', err);
    res.status(500).json([]);
  }
}

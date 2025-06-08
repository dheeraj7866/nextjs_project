import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const backendUrl = process.env.BACKEND_URL || 'http://backend:4000';
  try {
    const response = await fetch(`${backendUrl}/`);
    const text = await response.text();
    res.status(200).send(text);
  } catch (err) {
    console.error('Backend proxy error:', err);
    res.status(500).send('Error calling backend');
  }
}

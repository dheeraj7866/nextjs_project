import type { NextApiRequest, NextApiResponse } from 'next';

const backendUrl = process.env.BACKEND_URL || 'http://localhost:4000';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const response = await fetch(`${backendUrl}/users`);
  const data = await response.json();
  res.status(200).json(data);
}

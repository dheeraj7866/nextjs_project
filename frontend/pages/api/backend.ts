const backendUrl = process.env.BACKEND_URL || 'http://localhost:4000';

export default async function handler(req, res) {
  const response = await fetch(`${backendUrl}/`);
  const data = await response.text();
  res.status(200).send(data);
}

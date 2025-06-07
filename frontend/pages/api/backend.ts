export default async function handler(req, res) {
  const response = await fetch('http://localhost:4000/');
  const data = await response.text();
  res.status(200).send(data);
}

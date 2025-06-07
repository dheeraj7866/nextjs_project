const express = require('express');
const app = express();

app.get('/check-role', (req, res) => {
  res.json({ role: 'admin' });
});

app.listen(5002, () => console.log('RBAC running on 5002'));

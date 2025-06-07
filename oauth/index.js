const express = require('express');
const app = express();

app.get('/login', (req, res) => {
  res.json({ token: 'dummy-token' });
});

app.listen(5001, () => console.log('OAuth running on 5001'));

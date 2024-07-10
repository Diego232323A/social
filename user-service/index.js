const express = require('express');
const app = express();
const port = 3001;

const users = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' }
];

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.listen(port, () => {
  console.log(`User Service listening at http://localhost:${port}/api/users`);
});

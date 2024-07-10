const express = require('express');
const app = express();
const port = 3002;

const posts = [
  { id: 1, userId: 1, content: 'Hello world!' },
  { id: 2, userId: 2, content: 'Hello again!' }
];

app.get('/api/posts', (req, res) => {
  res.json(posts);
});

app.listen(port, () => {
  console.log(`Post Service listening at http://localhost:${port}/api/posts`);
});

const express = require('express');
const app = express();
const port = 3003;

const comments = [
  { id: 1, postId: 1, userId: 2, content: 'Nice post!' },
  { id: 2, postId: 2, userId: 1, content: 'Thanks!' }
];

app.get('/api/comments', (req, res) => {
  res.json(comments);
});

app.listen(port, () => {
  console.log(`Comment Service listening at http://localhost:${port}/api/comments`);
});

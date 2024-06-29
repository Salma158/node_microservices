const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let posts = [];

app.post('/posts', (req, res) => {
  const { title } = req.body;

  let id = 1;
  if (posts.length > 0) {
    id = posts[posts.length - 1].id + 1;
  }

  const newPost = {
    id,
    title
  };

  posts.push(newPost);
  res.status(201).send(newPost);
});


app.get('/posts', (req, res) => {
  res.send(posts);
});


app.listen(4000, () => {
  console.log('Listening on 4000');
});

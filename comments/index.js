const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let commentsByPostId = {};


app.post('/posts/:id/comments', (req, res) => {
  const { content } = req.body;

  let commentId = 1;
  if (commentsByPostId.length > 0) {
    commentId = commentsByPostId[commentsByPostId.length - 1].id + 1;
  }

  const newComment = {
    commentId,
    content
  };
  const comments = commentsByPostId[req.params.id] || [];

  comments.push(newComment);
  commentsByPostId[req.params.id] = comments;

  res.status(201).send(comments);
});


app.listen(4001, () => {
  console.log('Listening on 4001');
});

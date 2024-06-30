const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors')

app.use(bodyParser.json());
app.use(cors());

let commentsByPostId = {};


app.post('/posts/:id/comments', async (req, res) => {

  const comments = commentsByPostId[req.params.id] || [];
  
  let commentId = 1;
  if (comments.length > 0) {
    commentId = comments[comments.length - 1].commentId + 1;
  }

  const { content } = req.body;
  const newComment = {
    commentId,
    content
  };

  comments.push(newComment);
  commentsByPostId[req.params.id] = comments;

  await axios.post('http://localhost:4005/events', {
    type: 'commentCreated',
    data: {
      postId: req.params.id,
      ...newComment
    }
  });

  res.status(201).send(comments);
});


app.get('/posts/:id/comments', (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});



app.listen(4001, () => {
  console.log('Listening on 4001');
});

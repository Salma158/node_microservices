const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const cors = require('cors')
app.use(bodyParser.json());
app.use(cors());

let posts = [];

app.post('/posts', async (req, res) => {
  const { title } = req.body;

  let id = 1;
  if (posts.length > 0) {
    id = posts[posts.length - 1].id + 1;
  }

  const newPost = {
    id,
    title
  };

  await axios.post('http://localhost:4005/events', {
    type: 'PostCreated',
    data: newPost
  });


  posts.push(newPost);
  res.status(201).send(newPost);
});


app.get('/posts', (req, res) => {
  res.send(posts);
});


app.post("/events", (req, res) => {
  console.log("Received Event", req.body.type);
  res.status(200);
});


app.listen(4000, () => {
  console.log('Listening on 4000');
});

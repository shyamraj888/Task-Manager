const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

// In-memory data store for demonstration purposes
let posts = [
  { id: uuidv4(), username: 'Complete Physics Assignment', caption: '08:00' },
];

// index - show all posts
router.get('/', (req, res) => {
  res.render('home.ejs', { posts });
});

// new - form to create post
router.get('/new', (req, res) => {
  res.render('new.ejs');
});

// create - add new post
router.post('/', (req, res) => {
  const { username, caption } = req.body;
  const id = uuidv4();
  posts.push({ id, username, caption });
  res.redirect('/posts');
});

// show - single post
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const post = posts.find((p) => p.id === id);
  res.render('show.ejs', { post });
});

// edit form
router.get('/:id/edit', (req, res) => {
  const { id } = req.params;
  const post = posts.find((p) => p.id === id);
  res.render('edit.ejs', { post });
});

// update
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const post = posts.find((p) => p.id === id);
  if (post) {
    post.caption = req.body.caption;
  }
  res.redirect('/posts');
});

// delete
router.get('/:id/delete', (req, res) => {
  const { id } = req.params;
  posts = posts.filter((p) => p.id !== id);
  res.redirect('/posts');
});

module.exports = router;

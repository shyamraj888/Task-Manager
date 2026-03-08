const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

// In-memory data store for demonstration purposes
let posts = [
  { id: uuidv4(), username: 'Complete Physics Assignment', caption: '08:00' },
];

// index - show all posts
router.get('/', (req, res, next) => {
  try {
    res.render('home.ejs', { posts });
  } catch (err) {
    console.error('Error rendering home.ejs:', err);
    next(err);
  }
});

// new - form to create post
router.get('/new', (req, res, next) => {
  try {
    res.render('new.ejs');
  } catch (err) {
    console.error('Error rendering new.ejs:', err);
    next(err);
  }
});

// create - add new post
router.post('/', (req, res) => {
  try {
    const { username, caption } = req.body;
    const id = uuidv4();
    posts.push({ id, username, caption });
    res.redirect('/posts');
  } catch (err) {
    console.error('Error creating post:', err);
    res.status(500).json({ error: 'Failed to create post' });
  }
});

// show - single post
router.get('/:id', (req, res, next) => {
  try {
    const { id } = req.params;
    const post = posts.find((p) => p.id === id);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.render('show.ejs', { post });
  } catch (err) {
    console.error('Error rendering show.ejs:', err);
    next(err);
  }
});

// edit form
router.get('/:id/edit', (req, res, next) => {
  try {
    const { id } = req.params;
    const post = posts.find((p) => p.id === id);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.render('edit.ejs', { post });
  } catch (err) {
    console.error('Error rendering edit.ejs:', err);
    next(err);
  }
});

// update
router.patch('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const post = posts.find((p) => p.id === id);
    if (post) {
      post.caption = req.body.caption;
    }
    res.redirect('/posts');
  } catch (err) {
    console.error('Error updating post:', err);
    res.status(500).json({ error: 'Failed to update post' });
  }
});

// delete
router.get('/:id/delete', (req, res) => {
  try {
    const { id } = req.params;
    posts = posts.filter((p) => p.id !== id);
    res.redirect('/posts');
  } catch (err) {
    console.error('Error deleting post:', err);
    res.status(500).json({ error: 'Failed to delete post' });
  }
});

module.exports = router;

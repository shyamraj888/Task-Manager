const express = require("express");
const path = require("path");
const methodOverride = require('method-override');

const app = express();

// custom middleware - catch errors
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
};
app.use(logger);

app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, "../public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));

// modular routes
const postRoutes = require('../routes/posts');
app.use('/posts', postRoutes);

// redirect root
app.get('/', (req, res) => {
  res.redirect('/posts');
});

// 404 handler
app.use((req, res) => {
  console.log('404 - Path not found:', req.path);
  res.status(404).json({ error: 'Not Found', path: req.path });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Internal Server Error' });
});

module.exports = app;

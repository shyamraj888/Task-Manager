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

// Resolve paths correctly for serverless
const publicPath = path.resolve(__dirname, "../public");
const viewsPath = path.resolve(__dirname, "../views");

console.log('Public path:', publicPath);
console.log('Views path:', viewsPath);

// Serve static files
app.use(express.static(publicPath));

app.set("view engine", "ejs");
app.set("views", viewsPath);

// modular routes
try {
  const postRoutes = require('../routes/posts');
  app.use('/posts', postRoutes);
} catch (err) {
  console.error('Failed to load routes:', err);
  app.use('/posts', (req, res) => {
    res.status(500).json({ error: 'Failed to load posts route', details: err.message });
  });
}

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
  res.status(500).json({ error: 'Internal Server Error', details: err.message });
});

module.exports = app;

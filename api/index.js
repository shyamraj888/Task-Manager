const express = require("express");
const path = require("path");
const methodOverride = require('method-override');

const app = express();

// custom middleware
app.use(require('../middleware/logger'));

app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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
  res.status(404).send('Not Found');
});

module.exports = app;

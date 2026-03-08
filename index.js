const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require('method-override');
const port = 8080;

// custom middleware
app.use(require('./middleware/logger'));

app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// modular routes
const postRoutes = require('./routes/posts');
app.use('/posts', postRoutes);

// redirect root
app.get('/', (req, res) => {
  res.redirect('/posts');
});

app.listen(port, () => {
  console.log(`app is listening to ${port}`);
});
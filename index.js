const app = require('./api/index');

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
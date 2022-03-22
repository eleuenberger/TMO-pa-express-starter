const port = 5001;
const app = require('./app');

app.listen(process.env.PORT || port, () => {
  console.log(`Server is running, listening on port ${port}`);
});
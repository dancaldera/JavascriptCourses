const express = require('express');
const session = require('express-session');

const app = express();
const PORT = 3000;

app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: 'keyboard cat',
  }),
);

app.get('/', (req, res) => {
  req.session.count = req.session.count ? req.session.count + 1 : 1;
  res.status(200).json({ hello: 'world!', counter: req.session.count });
});

app.listen(PORT, () => {
  console.log(`Listening in http://localhost:${PORT} 🐶`);
});

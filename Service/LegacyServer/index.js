const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./database/index.js');
const route = require('./controller/route.js');
const expressStaticGzip = require('express-static-gzip');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use('/', route.consoleLog);
app.use('/', expressStaticGzip(path.join(__dirname, '../public')));

app.get('/rooms/:roomID/reviews', route.getReviews);
app.get('/rooms/:roomID/reviews/:phrase', route.filterReviews);

app.listen(PORT, (err) => {
  if (err) {
    console.log('err connecting to server: ', err);
  } else {
    console.log(`Server is listening at http://localhost:${PORT}`);
  }
});

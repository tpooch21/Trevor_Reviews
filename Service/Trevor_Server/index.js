const express = require('express');
const app = express();
const controllers = require('./controllers.js');

const bodyParser = require('body-parser');
const morgan = require('morgan');
const port = 3000;

app.use(morgan('tiny'));

app.use(bodyParser.json());

app.get('/api/place/:id/reviews', controllers.getAllReviews);

app.listen(port, () => {console.log(`Server is listening at http://localhost:${port}`)});


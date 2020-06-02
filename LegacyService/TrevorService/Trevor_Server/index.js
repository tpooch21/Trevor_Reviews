const newrelic = require('newrelic');
const express = require('express');
const app = express();
const path = require('path');
const controllers = require('./controllers.js');

const bodyParser = require('body-parser');
const morgan = require('morgan');
const port = 3000;

app.use(morgan('tiny'));

app.use(express.static(path.join(__dirname + '/../../public/')));

app.use(bodyParser.json());

app.get('/api/place/:id/reviews', controllers.getAllReviews);

app.post('/api/place/:id/review', controllers.postReview);

app.patch('/api/:place_id/review/:date/:review_id', controllers.updateReview);

// app.delete('/api/:place_id/review/:review_id')

// app.delete('api/place/:id')

app.listen(port, () => {console.log(`Server is listening at http://localhost:${port}`)});


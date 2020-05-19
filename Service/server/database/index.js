const { Client } = require('pg');
const helpers = require('./helpers.js');

const client = new Client({
  host: 'reviews_db',
  user: 'postgres',
  password: 'postgres',
  database: 'reviews',
  // user: 'postgres',
  // port: 5432,
  // database: 'reviews',
});

client.connect((err) => {
  if (err) {
    console.log('Error from connecting to postgreSQL db :', err);
  } else {
    console.log('Connected to PostGreSQL use review_db ');
  }
});

const fetchReviews = (param, res) => {
  const reviewsSql = `
    SELECT
     reviews.id, users.first_name, users.last_name, users.username, users.avatar,
     rooms.room_identification, reviews.date_published, reviews.comment, reviews.checkin_rating,
     reviews.accuracy_rating, reviews.value_rating, reviews.communication_rating,
     reviews.cleanliness_rating, reviews.location_rating
    FROM
      reviews, users, rooms
    WHERE
     room_id = ${param} AND reviews.user_id = users.id AND reviews.room_id = rooms.id
    ORDER BY
      date_published desc;
  `;
  const ratingSql = `
    SELECT
      reviews.checkin_rating, reviews.accuracy_rating, reviews.value_rating,
      reviews.communication_rating, reviews.cleanliness_rating, reviews.location_rating
    FROM
      reviews, users, rooms
    WHERE
      room_id = ${param} AND reviews.user_id = users.id AND reviews.room_id = rooms.id;
  `;

  client.query(reviewsSql, (err, reviews) => {
    if (err) {
      console.log('Error fetching data from pgsl : ', err);
      res.status(500).send(err);
    } else {
      client.query(ratingSql, (error, ratings) => {
        if (error) {
          res.status(500).send(error);
        } else {
          const ratingsAverage = helpers.findAverages(ratings.rows, ratings.rowCount);
          const formattedData = helpers.formatData(reviews.rows, reviews.rowCount, ratingsAverage);
          res.status(200).send(formattedData);
        }
      });
    }
  });
};

const searchReviews = (roomID, phrase, res) => {
  const sql = `
    SELECT
      reviews.id, users.first_name, users.last_name, users.username, users.avatar,
      rooms.room_identification, reviews.date_published, reviews.comment, reviews.checkin_rating,
      reviews.accuracy_rating, reviews.value_rating, reviews.communication_rating,
      reviews.cleanliness_rating, reviews.location_rating
    FROM
      reviews, users, rooms
    WHERE
      room_id = ${roomID} AND reviews.user_id = users.id AND reviews.room_id = rooms.id AND reviews.comment ~* '.*${phrase}.*'
    ORDER BY
      date_published desc;`;
  client.query(sql, (err, result) => {
    if (err) {
      console.log('Error searching reviews from pgsl : ', err);
      res.status(500).send(err);
    } else {
      const formattedData = helpers.formatData(result.rows, result.rowCount);
      res.status(200).send(formattedData);
    }
  });
};

module.exports.client = client;
module.exports.fetchReviews = fetchReviews;
module.exports.searchReviews = searchReviews;

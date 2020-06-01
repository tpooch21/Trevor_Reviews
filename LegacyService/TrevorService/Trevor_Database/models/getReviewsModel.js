const db = require('../connect.js');

const fetchReviews = (placeID, callback) => {
  const queryString = `SELECT * FROM reviews_by_place WHERE place_id = ?`;

  db.client.execute(queryString, [placeID], {prepare: true}, (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  });
};

module.exports = {
  fetchReviews
};
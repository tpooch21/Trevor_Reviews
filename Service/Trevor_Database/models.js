const db = require('./psqlindex.js');


const fetchReviews = (placeID, callback) => {
  const queryString = `SELECT * FROM reviews WHERE place_id=${placeID}`;

  db.query(queryString, (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results.rows);
    }
  });
}

module.exports = {
  fetchReviews
};
const db = require('./psqlindex.js');


const fetchReviews = (placeID, callback) => {
  const queryString = `SELECT * FROM reviews JOIN users ON reviews.place_id=${placeID} AND reviews.user_id = users.user_id`;

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
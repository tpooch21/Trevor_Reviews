const db = require('../connect.js');

const deleteReview = (placeID, date, reviewID, callback) => {
  const queryString = `DELETE FROM reviews_by_place WHERE place_id = ${placeID} AND date_published = '${date}' AND review_id = ${reviewID}`;

  db.client.execute(queryString, (err, results) => {
    if (err) {
      callback(err);
    }
    callback(null, results);
  });
};

module.exports = {deleteReview};
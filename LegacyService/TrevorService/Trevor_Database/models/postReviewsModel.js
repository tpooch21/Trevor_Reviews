const db = require('../connect.js');
const fs = require('fs');
const path = require('path');

const writeReview = (review, placeID, callback) => {

  const reviewID = fs.readFileSync(path.join(__dirname + '/reviewIdTracker.txt'), 'utf-8');
  const queryString = `INSERT INTO reviews_by_place (review_id, date_published, comment, checkin_rating, accuracy_rating, value_rating, communication_rating, cleanliness_rating, location_rating, user_id, place_id, first_name, last_name, avatar) VALUES (${reviewID}, '${review.date_published}', '${review.comment}', ${review.checkin_rating}, ${review.accuracy_rating}, ${review.value_rating}, ${review.communication_rating}, ${review.cleanliness_rating}, ${review.location_rating}, ${review.user_id}, ${placeID}, '${review.first_name}', '${review.last_name}', '${review.avatar}')`;


  db.client.execute(queryString, (err, results) => {
    if (err) {
      callback(err);
    }
    callback(null, results);
  });

  var nextNumber = Number(reviewID) + 1;
  fs.writeFile(path.join(__dirname + '/reviewIdTracker.txt'), nextNumber, (err) => {
    if (err) {
      console.log('Error writing data to file => ', err);
    }
  });
};

module.exports = {
  writeReview
};
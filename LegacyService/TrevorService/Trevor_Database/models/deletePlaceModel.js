const db = require('../connect.js');

const deletePrimary = (placeID, callback) => {
  const queryString = `DELETE FROM places WHERE place_id = ${placeID}`;

  db.client.execute(queryString, (err, results) => {
    if (err) {
      callback(err);
    }
    const queryString2 = `DELETE FROM reviews_by_place WHERE place_id = ${placeID}`;
    db.client.execute(queryString2, (err, results) => {
      if (err) {
        callback(err);
      }
      callback(null, results);
    });
  });

};

module.exports = {deletePrimary};
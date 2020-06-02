const db = require('../connect.js');

const patchReview = (placeID, date, reviewID, updates, callback) => {
   var queryString = `UPDATE reviews_by_place `
   // updates is an object
   var setStatement = `SET `

   var changeKeys = Object.keys(updates);

   for (var i = 0; i < changeKeys.length; i++) {
    var key = changeKeys[i];

    var condition
    if (key === 'date_published' || key === 'comment' || key === 'first_name' || key === 'last_name' || key === 'avatar') {
      condition = `${key} = '${updates[key]}'`;
    } else {
      condition = `${key} = ${updates[key]}`;
    }

    if (i === changeKeys.length - 1) {
      setStatement += condition + ' '
    } else {
      setStatement += condition + ', ';
    }
   }

   queryString += `${setStatement}WHERE place_id = ${placeID} AND date_published = '${date}' AND review_id = ${reviewID};`

   db.client.execute(queryString, { prepare: true }, (err, results) => {
     if (err) {
       callback(err);
     }
     callback(null, results);
   });

};

module.exports = {patchReview};
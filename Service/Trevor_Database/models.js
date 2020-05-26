const db = require('./psqlindex.js');

// const insertPlace = (place, callback) => {
//   const insertPlaceQuery = 'INSERT INTO places(place_id, place_name) VALUES (?, ?)';
//   const insertPlaceArgs = [place.place_id, place.place_name];

//   db.query(insertPlaceQuery, insertPlaceArgs, (err) => {
//     if (err) {
//       callback(err);
//     } else {
//       callback(null);
//     }
//   });
// };

// insertPlace(
//   {
//     "place_id": '1',
//     "place_name": 'Anaheim Hideout'
//   },
//   (err, results) => {
//     if (err) {
//       console.log('Error inserting data =>', err);
//     } else {
//       console.log('Data inserted successfully => ', results);
//     }
//   }
// );


const queryString = `INSERT INTO places VALUES (3, 'Maui Bungalow')`;

db.query(queryString, (err) => {
  if (err) {
    console.log('Error inserting data => ', err);
  } else {
    console.log('Data insertion successful');
  }
});
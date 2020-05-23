// Generate 10M places
// Generate 500K users
// Generate 2 to 500 reviews for each place
const faker = require('faker');
const casual = require('casual');
const csvWriter = require('csv-write-stream');
const fs = require('fs');

console.log(new Date());

// const writePlaces = fs.createWriteStream('places.csv');
// const userWriter = csvWriter();


const writeReviews = fs.createWriteStream('reviews.csv');
writeReviews.write('review_id,date_published,comment,checkin_rating,accuracy_rating,value_rating,communication_rating,cleanliness_rating,location_rating,user_id,place_id\n');

const placeType = ['House', 'Apartment', 'Getaway', 'Hideout', 'Mansion', 'Studio', 'Paradise', 'Flat', 'Terrace', 'Place', 'Hotspot', 'Condo', 'Townhouse', 'Cabin', 'Loft', 'Home', 'Beach House', 'Shack', 'Loveshack', 'Warehouse', 'Penthouse', 'Suite', 'Room', 'Casa', 'Cottage', 'Pad', 'Spa', 'Bungalow', 'Space', 'Spot', 'Icon', 'Villa', 'Dojo', 'Nest', 'Treehouse', 'Escape', 'Property', 'Home', 'Hideaway', 'Oasis', 'Retreat', 'Lounge', 'Lodge', 'Beehive', 'Igloo', 'Runaway', 'Birdhouse', 'Beachfront', 'Temple', 'Garden', 'Habitat'];

const userAvatar = 'http://loremflickr.com/56/56/people';

// Iterate from 1 to 10,000,000
// Counter starts at 0, to pick a placeType
// Increments each time
// Generate name using faker.city + placeType

// // Generate 10M primary records (places)
// const generatePlace = (writer, encoding, callback) => {
//   // let data = [];
//   // placeWriter.pipe(fs.createWriteStream('places.csv'));
//   let counter = 0;
//   let i = 10000000;
//   let id = 0;

//   function writeFile() {
//     let ok = true;
//     do {
//       i -= 1;
//       id++;
//       const placeName = `${faker.address.city()} ${placeType[counter]}`;
//       const data = `${id},${placeName}\n`;
//       counter++;
//       if (counter === placeType.length) {
//         counter = 0;
//       }
//       if (i === 0) {
//         writer.write(data, encoding, callback);
//       } else {
//         ok = writer.write(data, encoding);
//       }
//     } while (i > 0 && ok);
//     // had to stop early
//     writer.once('drain', writeFile);
//   }

//   writeFile();
//   // for (var i = 0; i < 10000000; i++) {
//   //   placeWriter.write({place_id: i + 1, place_name: `${faker.address.city()} ${placeType[counter]}`});
//   //   counter++;
//   //   if (counter === placeType.length) {
//   //     counter = 0;
//   //   }
//   // };

//   // placeWriter.end();
//   // console.log('Places written to CSV successfully');
//   // return data;
// };

// generatePlace(writePlaces, 'utf-8', () => {
//   writePlaces.end();
//   console.log('Places written successfully');
// });

// Generate 500k random users
// const generateUser = () => {
//   // let users = [];
//   userWriter.pipe(fs.createWriteStream('users.csv'));

//   for (var i = 0; i < 100000; i++) {
//     userWriter.write({user_id: i + 1, first_name: faker.name.firstName(), last_name: faker.name.lastName(), avatar: `${userAvatar}?lock=${i}`});
//   }

//   userWriter.end();
//   console.log('Users written to CSV successfully');
//   // return users;
// };

// generateUser();

let ratings = [1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 2.1, 2.2, 2.3, 2.5, 2.7, 2.8, 3.1, 3.3, 3.4, 3.5, 3.7, 3.9, 4.1, 4.2, 4.3, 4.6, 4.8, 4.9];
let years = ['2015', '2016', '2017', '2018', '2019', '2020'];

const generateReviews = (writer, encoding, callback) => {

  let i = 50000;
  let id = 0;
  let counter = 2;
  let yearIndex = 0;
  let ratingIndex = 0;
  let userID = 1;

  function write() {
    let ok = true;

    do {
      i--;
      for (var j = 0; j < counter; j++) {
        id++;
        const reviewId = id;
        const datePublished = `${casual.date(format = 'MMMM')} ${years[yearIndex]}`;
        const comment = faker.lorem.sentence();
        const checkinRating = ratings[ratingIndex];
        const accuracyRating = ratings[ratingIndex + 1];
        const valueRating = ratings[ratingIndex + 2];
        const communicationRating = ratings[ratingIndex + 3];
        const cleanlinessRating = ratings[ratingIndex + 4];
        const locationRating = ratings[ratingIndex + 5];
        const userId = userID;
        const placeId = i + 1;

        const data = `${reviewId},${datePublished},${comment},${checkinRating},${accuracyRating},${valueRating},${communicationRating},${cleanlinessRating},${locationRating},${userId},${placeId}\n`;
        if (i === 0 && j === counter - 1) {
          writer.write(data, encoding, callback);
        } else {
          ok = writer.write(data, encoding);
          yearIndex++;
          yearIndex = yearIndex === years.length ? 0 : yearIndex;

          ratingIndex += 6;
          ratingIndex = ratingIndex === ratings.length ? 0 : ratingIndex;

          userID++;
          userID = userID === 100001 ? 1 : userID;
        }
      }
      counter++;
      counter = counter === 501 ? 2 : counter;

    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early
      writer.once('drain', write);
    }

  }

  write();


  // let counter = 2;
  // let yearIndex = 0;
  // // let placeID = startPoint;
  // let ratingIndex = 0;
  // let reviewID = 1;
  // // Nested for loop
  // // Iterating over reviews,
  // for (var i = 0; i < 100000; i++) {
  //   for (var j = 0; j < counter; j++) {
  //     reviewWriter.write({
  //      review_id: reviewID,
  //      date_published: `${casual.date(format = 'MMMM')} ${years[yearIndex]}`,
  //      comment: faker.lorem.sentence(),
  //      checkin_rating: ratings[ratingIndex],
  //      accuracy_rating: ratings[ratingIndex + 1],
  //      value_rating: ratings[ratingIndex + 2],
  //      communication_rating: ratings[ratingIndex + 3],
  //      cleanliness_rating: ratings[ratingIndex + 4],
  //      location_rating: ratings[ratingIndex + 5],
  //      place_id: i + 1
  //     });
  //     ratingIndex += 6;
  //     ratingIndex = ratingIndex === 18 ? 0 : ratingIndex;

  //     yearIndex++;
  //     yearIndex = yearIndex === years.length ? 0 : yearIndex;

  //     reviewID++;
  //   }
  //   counter++;
  //   counter = counter === 500 ? 2 : counter;
  //   // placeID++;
  // }

  // reviewWriter.end();
  // console.log('Reviews written to CSV successfully');
  // return reviews;
};

generateReviews(writeReviews, 'utf-8', () => {
  writeReviews.end();
  console.log('Reviews inserted to csv');
});

// const reviews = generateReviews(places);

// csvPlaceWriter.writeRecords(places)
// .then(() => console.log('The Places CSV file was written successfully!'));

// csvUserWriter.writeRecords(users)
// .then(() => console.log('The Users CSV file was written successfully!'));

// // Split reviews into 5 different csv files
// csvReviewWriter.writeRecords(reviews)
// .then(() => console.log('The Reviews CSV file was written successfully!'));
// csvReviewWriter2.writeRecords(reviews2)
// .then(() => console.log('The Reviews2 CSV file was written successfully!'));
// csvReviewWriter3.writeRecords(reviews3)
// .then(() => console.log('The Reviews3 CSV file was written successfully!'));
// csvReviewWriter4.writeRecords(reviews4)
// .then(() => console.log('The Reviews4 CSV file was written successfully!'));
// csvReviewWriter5.writeRecords(reviews5)
// .then(() => console.log('The Reviews5 CSV file was written successfully!'));





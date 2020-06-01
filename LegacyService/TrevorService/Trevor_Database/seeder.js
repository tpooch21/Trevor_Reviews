// Generate 10M places
// Generate 500K users
// Generate 2 to 500 reviews for each place
const faker = require('faker');
const casual = require('casual');
const csvWriter = require('csv-write-stream');
const fs = require('fs');
const mock = require('./mockData.js');

console.log(new Date());

// const writePlaces = fs.createWriteStream('places.csv');
// writePlaces.write('place_id,place_name');

const userWriter = csvWriter();

const reviewWritersPG = [mock.writeReviewsPG, mock.writeReviewsPG2, mock.writeReviewsPG3, mock.writeReviewsPG4, mock.writeReviewsPG5, mock.writeReviewsPG6, mock.writeReviewsPG7, mock.writeReviewsPG8, mock.writeReviewsPG9, mock.writeReviewsPG10, mock.writeReviewsPG11, mock.writeReviewsPG12, mock.writeReviewsPG13, mock.writeReviewsPG14, mock.writeReviewsPG15, mock.writeReviewsPG16, mock.writeReviewsPG17, mock.writeReviewsPG18, mock.writeReviewsPG19, mock.writeReviewsPG20];

const reviewWritersCass = [mock.writeReviewsCass, mock.writeReviewsCass2, mock.writeReviewsCass3, mock.writeReviewsCass4, mock.writeReviewsCass5, mock.writeReviewsCass6, mock.writeReviewsCass7, mock.writeReviewsCass8, mock.writeReviewsCass9, mock.writeReviewsCass10, mock.writeReviewsCass11, mock.writeReviewsCass12, mock.writeReviewsCass13, mock.writeReviewsCass14, mock.writeReviewsCass15, mock.writeReviewsCass16, mock.writeReviewsCass17, mock.writeReviewsCass18, mock.writeReviewsCass19, mock.writeReviewsCass20];

const userAvatar = 'http://loremflickr.com/56/56/people';

// Iterate from 1 to 10,000,000
// Counter starts at 0, to pick a placeType
// Increments each time
// Generate name using faker.city + placeType

// // // Generate 10M primary records (places)
// const generatePlace = (writer, encoding, callback) => {

//   let placeIndex = 0;
//   let i = 10000000;
//   let id = 0;
//   let cityIndex = 0;

//   function writeFile() {
//     let ok = true;
//     do {
//       i -= 1;
//       id++;
//       const placeName = `${mock.cityNames[cityIndex]} ${mock.placeTypes[placeIndex]}`;
//       const data = `${id},${placeName}\n`;
//       // Increase placeIndex, reset when end of places array is reached
//       placeIndex++;
//       placeIndex = placeIndex === mock.placeTypes.length ? 0 : placeIndex;

//       // Increase cityIndex, reset when end of cities array is reached
//       cityIndex++;
//       cityIndex = cityIndex === mock.cityNames.length ? 0 : cityIndex;

//       // When last item is reached, write to csv and call callback to end write process
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

// };

// generatePlace(writePlaces, 'utf-8', () => {
//   writePlaces.end();
//   console.log('Places written successfully');
// });

// Generate 100k random users
const generateUser = () => {
  // let users = [];
  let firstNameIndex = 0;
  let lastNameIndex = 0;

  userWriter.pipe(fs.createWriteStream('users.csv'));

  for (var i = 0; i < 100000; i++) {
    userWriter.write({user_id: i + 1, first_name: mock.firstNames[firstNameIndex], last_name: mock.lastNames[lastNameIndex], avatar: `${userAvatar}?lock=${i}`});

    firstNameIndex++;
    firstNameIndex = firstNameIndex === mock.firstNames.length ? 0 : firstNameIndex;

    lastNameIndex++;
    lastNameIndex = lastNameIndex === mock.lastNames.length ? 0 : lastNameIndex;
  }

  userWriter.end();
  console.log('Users written to CSV successfully');
  // return users;
};

generateUser();

const generateReviewsPG = (writer, encoding, callback) => {

  let i = 10000000;
  let id = 0;
  let reviewCountIndex = 0;
  let ratingIndex = 0;
  let yearIndex = 0;
  let monthIndex = 0;
  let dayIndex = 0;
  let commentIndex = 0;
  let userID = 1;
  let firstNameIndex = 0;
  let lastNameIndex = 0;
  let avatarLock = 0;
  let writerIndex = 0;

  function write() {
    let ok = true;

    do {
      i--;
      if ((i + 1) % 500000 === 0) {
        writer = reviewWritersPG[writerIndex];
        console.log('Writing to => ', writer.path);
        writerIndex++;
      }
      for (var j = 0; j < mock.reviewCount[reviewCountIndex]; j++) {
        id++;
        const reviewId = id;
        const datePublished = `${mock.years[yearIndex]}-${mock.months[monthIndex]}-${mock.days[dayIndex]}`;
        const comment = mock.reviewComments[commentIndex];
        const checkinRating = mock.ratings[ratingIndex];
        const accuracyRating = mock.ratings[ratingIndex + 1];
        const valueRating = mock.ratings[ratingIndex + 2];
        const communicationRating = mock.ratings[ratingIndex + 3];
        const cleanlinessRating = mock.ratings[ratingIndex + 4];
        const locationRating = mock.ratings[ratingIndex + 5];
        const userId = userID;
        const placeId = i + 1;

        const data = `${reviewId},${datePublished},${comment},${checkinRating},${accuracyRating},${valueRating},${communicationRating},${cleanlinessRating},${locationRating},${userId},${placeId}\n`;
        if (i === 0 && j === mock.reviewCount[reviewCountIndex] - 1) {
          writer.write(data, encoding, callback);
        } else {
          ok = writer.write(data, encoding);

          yearIndex++;
          yearIndex = yearIndex === mock.years.length ? 0 : yearIndex;

          monthIndex++;
          monthIndex = monthIndex === mock.months.length ? 0 : monthIndex;

          dayIndex++;
          dayIndex = dayIndex === mock.days.length ? 0 : dayIndex;

          ratingIndex += 6;
          ratingIndex = ratingIndex === mock.ratings.length ? 0 : ratingIndex;

          commentIndex++;
          commentIndex = commentIndex === mock.reviewComments.length ? 0 : commentIndex;

          userID++;
          userID = userID === 100001 ? 1 : userID;
        }
      }

      // When reviews have been created for a place, increase the number of reviews to be created for the next place until we reach 500 reviews (max for a place)
      reviewCountIndex++;
      reviewCountIndex = reviewCountIndex === mock.reviewCount.length ? 0 : reviewCountIndex;

    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early
      writer.once('drain', write);
    }
  }

  write();
};

generateReviewsPG(mock.writeReviewsPG, 'utf-8', () => {
  mock.writeReviewsPG20.end();
  console.log('PG Reviews inserted to csv');
  console.log(new Date());
});


const generateReviewsCass = (writer, encoding, callback) => {

  let i = 10000000;
  let id = 0;
  let reviewCountIndex = 0;
  let ratingIndex = 0;
  let yearIndex = 0;
  let monthIndex = 0;
  let dayIndex = 0;
  let commentIndex = 0;
  let userID = 1;
  let firstNameIndex = 0;
  let lastNameIndex = 0;
  let avatarLock = 0;
  let writerIndex = 0;

  function write() {
    let ok = true;

    do {
      i--;
      if ((i + 1) % 500000 === 0) {
        writer = reviewWritersCass[writerIndex];
        console.log('Writing to => ', writer.path);
        writerIndex++;
      }
      for (var j = 0; j < mock.reviewCount[reviewCountIndex]; j++) {
        id++;
        const reviewId = id;
        const datePublished = `${mock.years[yearIndex]}-${mock.months[monthIndex]}-${mock.days[dayIndex]}`;
        const comment = mock.reviewComments[commentIndex];
        const checkinRating = mock.ratings[ratingIndex];
        const accuracyRating = mock.ratings[ratingIndex + 1];
        const valueRating = mock.ratings[ratingIndex + 2];
        const communicationRating = mock.ratings[ratingIndex + 3];
        const cleanlinessRating = mock.ratings[ratingIndex + 4];
        const locationRating = mock.ratings[ratingIndex + 5];
        const userId = userID;
        const placeId = i + 1;
        const firstName = mock.firstNames[firstNameIndex];
        const lastName = mock.lastNames[lastNameIndex];
        const avatar = `${userAvatar}?lock=${avatarLock}`;

        const data = `${reviewId},${datePublished},${comment},${checkinRating},${accuracyRating},${valueRating},${communicationRating},${cleanlinessRating},${locationRating},${userId},${placeId},${firstName},${lastName},${avatar}\n`;
        if (i === 0 && j === mock.reviewCount[reviewCountIndex] - 1) {
          writer.write(data, encoding, callback);
        } else {
          ok = writer.write(data, encoding);

          yearIndex++;
          yearIndex = yearIndex === mock.years.length ? 0 : yearIndex;

          monthIndex++;
          monthIndex = monthIndex === mock.months.length ? 0 : monthIndex;

          dayIndex++;
          dayIndex = dayIndex === mock.days.length ? 0 : dayIndex;

          ratingIndex += 6;
          ratingIndex = ratingIndex === mock.ratings.length ? 0 : ratingIndex;

          commentIndex++;
          commentIndex = commentIndex === mock.reviewComments.length ? 0 : commentIndex;

          firstNameIndex++;
          firstNameIndex = firstNameIndex === mock.firstNames.length ? 0 : firstNameIndex;

          lastNameIndex++;
          lastNameIndex = lastNameIndex === mock.lastNames.length ? 0 : lastNameIndex;

          avatarLock++;

          userID++;
          if (userID === 100001) {
            userID = 1;
            avatarLock = 0;
            firstNameIndex = 0;
            lastNameIndex = 0;
          }
        }
      }

      // When reviews have been created for a place, increase the number of reviews to be created for the next place until we reach 500 reviews (max for a place)
      reviewCountIndex++;
      reviewCountIndex = reviewCountIndex === mock.reviewCount.length ? 0 : reviewCountIndex;

    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early
      writer.once('drain', write);
    }
  }

  write();
};

generateReviewsCass(mock.writeReviewsCass, 'utf-8', () => {
  mock.writeReviewsCass20.end();
  console.log('Cassandra Reviews inserted to csv');
});







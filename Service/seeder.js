// Generate 10M places
// Generate 500K users
// Generate 2 to 500 reviews for each place
const faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvPlaceWriter = createCsvWriter({
  path: 'places.csv',
  header: [
    {id: 'place_id', title: 'place_id'},
    {id: 'place_name', title: 'place_name'},
  ]
});

const csvUserWriter = createCsvWriter({
  path: 'users.csv',
  header: [
    {id: 'user_id', title: 'user_id'},
    {id: 'first_name', title: 'first_name'},
    {id: 'last_name', title: 'last_name'},
    {id: 'avatar', title: 'avatar'}
  ]
});

const csvReviewWriter = createCsvWriter({
  path: 'reviews.csv',
  header: [
    {id: 'review_id', title: 'place_id'},
    {id: 'date_published', title: 'date_published'},
    {id: 'comment', title: 'comment'},
    {id: 'checkin_rating', title: 'checkin_rating'},
    {id: 'accuracy_rating', title: 'accuracy_rating'},
    {id: 'value_rating', title: 'value_rating'},
    {id: 'communication_rating', title: 'communication_rating'},
    {id: 'cleanliness_rating', title: 'cleanliness_rating'},
    {id: 'location_rating', title: 'location_rating'},
    {id: 'place_id', title: 'place_id'}
  ]
});


const placeType = ['House', 'Apartment', 'Getaway', 'Hideout', 'Mansion', 'Studio', 'Paradise', 'Flat', 'Terrace', 'Place', 'Hotspot', 'Condo', 'Townhouse', 'Cabin', 'Loft', 'Home', 'Beach House', 'Shack', 'Loveshack', 'Warehouse', 'Penthouse', 'Suite', 'Room', 'Casa', 'Cottage', 'Pad', 'Spa', 'Bungalow', 'Space', 'Spot', 'Icon', 'Villa', 'Dojo', 'Nest', 'Treehouse', 'Escape', 'Property', 'Home', 'Hideaway', 'Oasis', 'Retreat', 'Lounge', 'Lodge', 'Beehive', 'Igloo', 'Runaway', 'Birdhouse', 'Beachfront', 'Temple', 'Garden', 'Habitat'];

const userAvatar = 'http://loremflickr.com/56/56/people';

// Iterate from 1 to 10,000,000
// Counter starts at 0, to pick a placeType
// Increments each time
// Generate name using faker.city + placeType

// Generate 10M primary records (places)
const generatePlace = () => {
  let data = [];
  let counter = 0;

  for (var i = 0; i < 100; i++) {
    data.push({place_id: i + 1, place_name: `${faker.address.city()} ${placeType[counter]}`});
    counter++;
    if (counter === placeType.length) {
      counter = 0;
    }
  };

  return data;
};

const places = generatePlace();

// Generate 500k random users
const generateUser = () => {
  let users = [];

  for (var i = 0; i < 100; i++) {
    users.push({user_id: i + 1, first_name: faker.name.firstName(), last_name: faker.name.lastName(), avatar: `${userAvatar}?lock=${i}`});
  }

  return users;
};

const users = generateUser();

let ratings = [1.2, 1.4, 1.6, 1.7, 1.8, 1.9, 2.1, 2.2, 2.3, 2.5, 2.7, 2.8, 3.1, 3.3, 3.4, 3.5, 3.7, 3.9, 4.1, 4.2, 4.3, 4.6, 4.8, 4.9];

const generateReviews = (placeData) => {
  let reviews = [];
  let counter = 2;
  let ratingIndex = 0;
  // Nested for loop
  // Iterating over reviews,
  for (var i = 0; i < placeData.length; i++) {
    for (var j = 0; j < counter; j++) {
      reviews.push({
       review_id: i + 1,
       date_published: faker.date.between('2020-01-01', '2020-05-31'),
       comment: faker.lorem.sentences(),
       checkin_rating: ratings[ratingIndex],
       accuracy_rating: ratings[ratingIndex + 1],
       value_rating: ratings[ratingIndex + 2],
       communication_rating: ratings[ratingIndex + 3],
       cleanliness_rating: ratings[ratingIndex + 4],
       location_rating: ratings[ratingIndex + 5],
       place_id: counter - 1
      });
      ratingIndex += 6;
      ratingIndex = ratingIndex === 18 ? 0 : ratingIndex;
    }
    counter++;
    counter = counter === 500 ? 2 : counter;
  }

  return reviews;
};

const reviews = generateReviews(places);
console.log('Logging start time => ', new Date());

csvPlaceWriter.writeRecords(places)
.then(() => console.log('The Places CSV file was written successfully!'));

csvUserWriter.writeRecords(users)
.then(() => console.log('The Users CSV file was written successfully!'));

csvReviewWriter.writeRecords(reviews)
.then(() => console.log('The Reviews CSV file was written successfully!'));

console.log('Logging end time => ', new Date());
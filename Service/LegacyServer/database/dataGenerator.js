const faker = require('faker');
const fs = require('fs');
const path = require('path');

let fileContent = `

  SELECT pg_terminate_backend(pid) FROM pg_stat_activity WHERE datname = 'reviews';

  DROP DATABASE IF EXISTS reviews;

  CREATE DATABASE reviews;
  \\c reviews;

  CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    username VARCHAR(30) UNIQUE NOT NULL,
    avatar TEXT NOT NULL
  );

  CREATE TABLE rooms (
    id SERIAL PRIMARY KEY,
    room_identification INT NOT NULL
  );

  CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    room_id INT NOT NULL,
    date_published DATE NOT NULL,
    comment TEXT NOT NULL,
    checkin_rating DECIMAL NOT NULL,
    accuracy_rating DECIMAL NOT NULL,
    value_rating DECIMAL NOT NULL,
    communication_rating DECIMAL NOT NULL,
    cleanliness_rating DECIMAL NOT NULL,
    location_rating DECIMAL NOT NULL
  );

`;

// create 5 random rooms
for (let i = 1; i <= 5; i += 1) {
  const roomIdentification = faker.random.number();
  if (i < 5) {
    fileContent += `INSERT INTO rooms (room_identification) values (${roomIdentification}); \n`;
  } else {
    fileContent += `INSERT INTO rooms (room_identification) values (${roomIdentification}); \n\n\n\n `;
  }
}

// create 100 random users
for (let i = 1; i <= 100; i += 1) {
  const firstName = faker.name.firstName().replace(/'/, ' ');
  const lastName = faker.name.lastName().replace(/'/, ' ');
  const username = faker.internet.userName();
  const avatar = faker.image.avatar();
  if (i < 100) {
    fileContent += `INSERT INTO users (first_name, last_name, username, avatar) values ('${firstName}', '${lastName}', '${username}', '${avatar}'); \n `;
  } else {
    fileContent += `INSERT INTO users (first_name, last_name, username, avatar) values ('${firstName}', '${lastName}', '${username}', '${avatar}'); \n\n\n\n `;
  }
}

// create 500 random reviews, 100 reviews per room ( 5 rooms total)
for (let i = 1; i <= 5; i += 1) {
  for (let j = 1; j <= 100; j += 1) {
    const datePublished = faker.date.past().toString().replace(/(GMT-\d\d\d\d)|\(|\)/g, '');
    const comment = faker.lorem.paragraph();
    const checkinRating = (Math.random() * 5).toFixed(1);
    const accuracyRating = (Math.random() * 5).toFixed(1);
    const valueRating = (Math.random() * 5).toFixed(1);
    const communicationRating = (Math.random() * 5).toFixed(1);
    const cleanlinessRating = (Math.random() * 5).toFixed(1);
    const locationRating = (Math.random() * 5).toFixed(1);
    fileContent += `INSERT INTO reviews (user_id, room_id, date_published, comment, checkin_rating, accuracy_rating, value_rating, communication_rating, cleanliness_rating, location_rating) values (${j}, ${i}, '${datePublished}', '${comment}', ${checkinRating}, ${accuracyRating}, ${valueRating}, ${communicationRating}, ${cleanlinessRating}, ${locationRating}); \n\n`;
  }
}

const filePath = path.join(__dirname, '../../schema.sql');
fs.writeFile(filePath, fileContent, (err) => {
  if (err) {
    console.log('err writing schema file ', err);
  } else {
    console.log('the file was saved with mock data');
  }
});

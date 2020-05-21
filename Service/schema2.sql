  SELECT pg_terminate_backend(pid) FROM pg_stat_activity WHERE datname = 'reviews';

  DROP DATABASE IF EXISTS reviews;

  CREATE DATABASE reviews;
  \c reviews;

  CREATE TABLE places (
    id SERIAL PRIMARY KEY,
    place_name INT NOT NULL
  );

  CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    avatar TEXT NOT NULL
  );

  CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    date_published DATE NOT NULL,
    comment TEXT NOT NULL,
    checkin_rating DECIMAL NOT NULL,
    accuracy_rating DECIMAL NOT NULL,
    value_rating DECIMAL NOT NULL,
    communication_rating DECIMAL NOT NULL,
    cleanliness_rating DECIMAL NOT NULL,
    location_rating DECIMAL NOT NULL,
    place_id INT(11) REFERENCES places(id),
    user_id INT(11) REFERENCES users(id)
  );
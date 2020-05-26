  SELECT pg_terminate_backend(pid) FROM pg_stat_activity WHERE pid <> pg_backend_pid() AND datname = 'bnbreviews';

  \c test;

  DROP DATABASE bnbreviews;

  CREATE DATABASE bnbreviews;
  \c bnbreviews;

  CREATE TABLE places (
    place_id SERIAL PRIMARY KEY,
    place_name VARCHAR(100) NOT NULL
  );

  CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    avatar TEXT NOT NULL
  );

  CREATE TABLE reviews (
    review_id SERIAL PRIMARY KEY,
    date_published TEXT NOT NULL,
    comment TEXT NOT NULL,
    checkin_rating DECIMAL NOT NULL,
    accuracy_rating DECIMAL NOT NULL,
    value_rating DECIMAL NOT NULL,
    communication_rating DECIMAL NOT NULL,5
    cleanliness_rating DECIMAL NOT NULL,
    location_rating DECIMAL NOT NULL,
    user_id INT NOT NULL,
    place_id INT NOT NULL
  );


    -- FOREIGN KEY (user_id) REFERENCES users(user_id),
    -- FOREIGN KEY (place_id) REFERENCES places(place_id)
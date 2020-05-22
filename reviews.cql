CREATE KEYSPACE review WITH replication =
  {'class': 'SimpleStrategy', 'replication_factor': 1};

USE review;

-- Find place by id
CREATE TABLE review.place (
  place_id uuid,
  place_name text,
  PRIMARY KEY (place_id)
);

-- Find user by id
CREATE TABLE review.users (
  user_id uuid,
  first_name text,
  last_name text,
  avatar text,
  PRIMARY KEY(user_id)
);

 -- Find review by id
CREATE TABLE review.reviews (
  review_id uuid,
  date_posted date,
  user_id uuid,
  comment text,
  checkin_rating decimal,
  accuracy_rating decimal,
  value_rating decimal,
  communication_rating decimal,
  cleanliness_rating decimal,
  location_rating decimal,
  PRIMARY KEY (review_id)
);

-- Find reviews by place id
CREATE TABLE review.reviews_by_place (
  place_id uuid,
  review_id uuid,
  date_posted date,
  user_id uuid,
  comment text,
  checkin_rating decimal,
  accuracy_rating decimal,
  value_rating decimal,
  communication_rating decimal,
  cleanliness_rating decimal,
  location_rating decimal,
  PRIMARY KEY (place_id, date_posted)
) WITH CLUSTERING ORDER BY (date_posted DESC);




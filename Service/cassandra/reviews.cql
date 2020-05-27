DROP KEYSPACE IF EXISTS bnbreviews;

CREATE KEYSPACE bnbreviews WITH replication =
  {'class': 'SimpleStrategy', 'replication_factor': 1};

USE bnbreviews;

-- Find place by id
CREATE TABLE bnbreviews.places (
  place_id bigint,
  place_name text,
  PRIMARY KEY (place_id)
);

-- Find user by id
CREATE TABLE bnbreviews.users (
  user_id bigint,
  first_name text,
  last_name text,
  avatar text,
  PRIMARY KEY(user_id)
);

 -- Find review by id
CREATE TABLE bnbreviews.reviews (
  review_id bigint,
  date_published date,
  comment text,
  checkin_rating decimal,
  accuracy_rating decimal,
  value_rating decimal,
  communication_rating decimal,
  cleanliness_rating decimal,
  location_rating decimal,
  user_id bigint,
  PRIMARY KEY (review_id)
);

-- Find reviews by place id
CREATE TABLE bnbreviews.reviews_by_place (
  review_id bigint,
  date_published date,
  comment text,
  checkin_rating decimal,
  accuracy_rating decimal,
  value_rating decimal,
  communication_rating decimal,
  cleanliness_rating decimal,
  location_rating decimal,
  user_id bigint,
  place_id bigint,
  PRIMARY KEY (place_id, date_published)
) WITH CLUSTERING ORDER BY (date_published DESC);



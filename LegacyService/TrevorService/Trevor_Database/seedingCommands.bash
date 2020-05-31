#!/bin/bash

psql bnbreviews -c "COPY users (user_id, first_name, last_name, avatar) FROM '/Users/cmcoffey-puccini/Desktop/HR/SDC/My_repos/Trevor_Reviews/Service/users.csv' DELIMITER ',' CSV HEADER;"

psql bnbreviews -c "COPY places (place_id, place_name) FROM '/Users/cmcoffey-puccini/Desktop/HR/SDC/My_repos/Trevor_Reviews/Service/places.csv' DELIMITER ',' CSV HEADER;"

psql bnbreviews -c "COPY reviews (review_id, date_published, comment, checkin_rating, accuracy_rating, value_rating, communication_rating, cleanliness_rating, location_rating, user_id, place_id) FROM '/Users/cmcoffey-puccini/Desktop/HR/SDC/My_repos/Trevor_Reviews/Service/pgReviews/reviewsPG.csv' DELIMITER ',' CSV HEADER;"

psql bnbreviews -c "COPY reviews (review_id, date_published, comment, checkin_rating, accuracy_rating, value_rating, communication_rating, cleanliness_rating, location_rating, user_id, place_id) FROM '/Users/cmcoffey-puccini/Desktop/HR/SDC/My_repos/Trevor_Reviews/Service/pgReviews/reviewsPG2.csv' DELIMITER ',' CSV HEADER;"

psql bnbreviews -c "COPY reviews (review_id, date_published, comment, checkin_rating, accuracy_rating, value_rating, communication_rating, cleanliness_rating, location_rating, user_id, place_id) FROM '/Users/cmcoffey-puccini/Desktop/HR/SDC/My_repos/Trevor_Reviews/Service/pgReviews/reviewsPG3.csv' DELIMITER ',' CSV HEADER;"

psql bnbreviews -c "COPY reviews (review_id, date_published, comment, checkin_rating, accuracy_rating, value_rating, communication_rating, cleanliness_rating, location_rating, user_id, place_id) FROM '/Users/cmcoffey-puccini/Desktop/HR/SDC/My_repos/Trevor_Reviews/Service/pgReviews/reviewsPG4.csv' DELIMITER ',' CSV HEADER;"

psql bnbreviews -c "COPY reviews (review_id, date_published, comment, checkin_rating, accuracy_rating, value_rating, communication_rating, cleanliness_rating, location_rating, user_id, place_id) FROM '/Users/cmcoffey-puccini/Desktop/HR/SDC/My_repos/Trevor_Reviews/Service/pgReviews/reviewsPG5.csv' DELIMITER ',' CSV HEADER;"

psql bnbreviews -c "COPY reviews (review_id, date_published, comment, checkin_rating, accuracy_rating, value_rating, communication_rating, cleanliness_rating, location_rating, user_id, place_id) FROM '/Users/cmcoffey-puccini/Desktop/HR/SDC/My_repos/Trevor_Reviews/Service/pgReviews/reviewsPG6.csv' DELIMITER ',' CSV HEADER;"

psql bnbreviews -c "COPY reviews (review_id, date_published, comment, checkin_rating, accuracy_rating, value_rating, communication_rating, cleanliness_rating, location_rating, user_id, place_id) FROM '/Users/cmcoffey-puccini/Desktop/HR/SDC/My_repos/Trevor_Reviews/Service/pgReviews/reviewsPG7.csv' DELIMITER ',' CSV HEADER;"

psql bnbreviews -c "COPY reviews (review_id, date_published, comment, checkin_rating, accuracy_rating, value_rating, communication_rating, cleanliness_rating, location_rating, user_id, place_id) FROM '/Users/cmcoffey-puccini/Desktop/HR/SDC/My_repos/Trevor_Reviews/Service/pgReviews/reviewsPG8.csv' DELIMITER ',' CSV HEADER;"

psql bnbreviews -c "COPY reviews (review_id, date_published, comment, checkin_rating, accuracy_rating, value_rating, communication_rating, cleanliness_rating, location_rating, user_id, place_id) FROM '/Users/cmcoffey-puccini/Desktop/HR/SDC/My_repos/Trevor_Reviews/Service/pgReviews/reviewsPG9.csv' DELIMITER ',' CSV HEADER;"

psql bnbreviews -c "COPY reviews (review_id, date_published, comment, checkin_rating, accuracy_rating, value_rating, communication_rating, cleanliness_rating, location_rating, user_id, place_id) FROM '/Users/cmcoffey-puccini/Desktop/HR/SDC/My_repos/Trevor_Reviews/Service/pgReviews/reviewsPG10.csv' DELIMITER ',' CSV HEADER;"

psql bnbreviews -c "COPY reviews (review_id, date_published, comment, checkin_rating, accuracy_rating, value_rating, communication_rating, cleanliness_rating, location_rating, user_id, place_id) FROM '/Users/cmcoffey-puccini/Desktop/HR/SDC/My_repos/Trevor_Reviews/Service/pgReviews/reviewsPG11.csv' DELIMITER ',' CSV HEADER;"

psql bnbreviews -c "COPY reviews (review_id, date_published, comment, checkin_rating, accuracy_rating, value_rating, communication_rating, cleanliness_rating, location_rating, user_id, place_id) FROM '/Users/cmcoffey-puccini/Desktop/HR/SDC/My_repos/Trevor_Reviews/Service/pgReviews/reviewsPG12.csv' DELIMITER ',' CSV HEADER;"

psql bnbreviews -c "COPY reviews (review_id, date_published, comment, checkin_rating, accuracy_rating, value_rating, communication_rating, cleanliness_rating, location_rating, user_id, place_id) FROM '/Users/cmcoffey-puccini/Desktop/HR/SDC/My_repos/Trevor_Reviews/Service/pgReviews/reviewsPG13.csv' DELIMITER ',' CSV HEADER;"

psql bnbreviews -c "COPY reviews (review_id, date_published, comment, checkin_rating, accuracy_rating, value_rating, communication_rating, cleanliness_rating, location_rating, user_id, place_id) FROM '/Users/cmcoffey-puccini/Desktop/HR/SDC/My_repos/Trevor_Reviews/Service/pgReviews/reviewsPG14.csv' DELIMITER ',' CSV HEADER;"

psql bnbreviews -c "COPY reviews (review_id, date_published, comment, checkin_rating, accuracy_rating, value_rating, communication_rating, cleanliness_rating, location_rating, user_id, place_id) FROM '/Users/cmcoffey-puccini/Desktop/HR/SDC/My_repos/Trevor_Reviews/Service/pgReviews/reviewsPG15.csv' DELIMITER ',' CSV HEADER;"

psql bnbreviews -c "COPY reviews (review_id, date_published, comment, checkin_rating, accuracy_rating, value_rating, communication_rating, cleanliness_rating, location_rating, user_id, place_id) FROM '/Users/cmcoffey-puccini/Desktop/HR/SDC/My_repos/Trevor_Reviews/Service/pgReviews/reviewsPG16.csv' DELIMITER ',' CSV HEADER;"

psql bnbreviews -c "COPY reviews (review_id, date_published, comment, checkin_rating, accuracy_rating, value_rating, communication_rating, cleanliness_rating, location_rating, user_id, place_id) FROM '/Users/cmcoffey-puccini/Desktop/HR/SDC/My_repos/Trevor_Reviews/Service/pgReviews/reviewsPG17.csv' DELIMITER ',' CSV HEADER;"

psql bnbreviews -c "COPY reviews (review_id, date_published, comment, checkin_rating, accuracy_rating, value_rating, communication_rating, cleanliness_rating, location_rating, user_id, place_id) FROM '/Users/cmcoffey-puccini/Desktop/HR/SDC/My_repos/Trevor_Reviews/Service/pgReviews/reviewsPG18.csv' DELIMITER ',' CSV HEADER;"

psql bnbreviews -c "COPY reviews (review_id, date_published, comment, checkin_rating, accuracy_rating, value_rating, communication_rating, cleanliness_rating, location_rating, user_id, place_id) FROM '/Users/cmcoffey-puccini/Desktop/HR/SDC/My_repos/Trevor_Reviews/Service/pgReviews/reviewsPG19.csv' DELIMITER ',' CSV HEADER;"

psql bnbreviews -c "COPY reviews (review_id, date_published, comment, checkin_rating, accuracy_rating, value_rating, communication_rating, cleanliness_rating, location_rating, user_id, place_id) FROM '/Users/cmcoffey-puccini/Desktop/HR/SDC/My_repos/Trevor_Reviews/Service/pgReviews/reviewsPG20.csv' DELIMITER ',' CSV HEADER;"


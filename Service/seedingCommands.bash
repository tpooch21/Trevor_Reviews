#!/bin/bash

psql bnbreviews -c "COPY users (user_id, first_name, last_name, avatar) FROM '/Users/cmcoffey-puccini/Desktop/HR/SDC/My_repos/Trevor_Reviews/Service/users.csv' DELIMITER ',' CSV HEADER;"

psql bnbreviews -c "COPY places (place_id, place_name) FROM '/Users/cmcoffey-puccini/Desktop/HR/SDC/My_repos/Trevor_Reviews/Service/places.csv' DELIMITER ',' CSV HEADER;"

psql bnbreviews -c "COPY reviews (review_id, date_published, comment, checkin_rating, accuracy_rating, value_rating, communication_rating, cleanliness_rating, location_rating, user_id, place_id) FROM '/Users/cmcoffey-puccini/Desktop/HR/SDC/My_repos/Trevor_Reviews/Service/reviews.csv' DELIMITER ',' CSV HEADER;"

psql bnbreviews -c "COPY reviews (review_id, date_published, comment, checkin_rating, accuracy_rating, value_rating, communication_rating, cleanliness_rating, location_rating, user_id, place_id) FROM '/Users/cmcoffey-puccini/Desktop/HR/SDC/My_repos/Trevor_Reviews/Service/reviews2.csv' DELIMITER ',' CSV HEADER;"


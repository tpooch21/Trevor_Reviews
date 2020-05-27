USE bnbreviews;

COPY places (place_id, place_name) FROM '/Users/cmcoffey-puccini/Desktop/HR/SDC/My_repos/Trevor_Reviews/Service/places.csv' WITH DELIMITER=',' AND HEADER=TRUE;

COPY users (user_id, first_name, last_name, avatar) FROM '/Users/cmcoffey-puccini/Desktop/HR/SDC/My_repos/Trevor_Reviews/Service/users.csv' WITH DELIMITER=',' AND HEADER=TRUE;

-- COPY reviews_by_place (place_id, date_published, acc, avatar) FROM '/Users/cmcoffey-puccini/Desktop/HR/SDC/My_repos/Trevor_Reviews/Service/users.csv' WITH DELIMITER=',' AND HEADER=TRUE;


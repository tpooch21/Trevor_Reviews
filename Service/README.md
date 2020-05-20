## Server API

### Get reviews for a place
  * GET `/api/:place_id/reviews`

**Path Parameters**
  * `place_id`  place id

**Success Status Code:** `200`

**Returns:** JSON

```json
    {
      "reviews": "Array"
    }
```

### Create review
  * POST `places/:place_id/reviews`

**Path Parameters**
  * `place_id` place id

**Success Status Code:** `201`

**Request Body:** Expects JSON with the following keys:

```json
    {
      "first_name": "String",
      "last_name": "String",
      "date": "String",
      "comment": "String",
      "checkin_rating": "Number",
      "accuracy_rating": "Number",
      "value_rating": "Number",
      "communication_rating": "Number",
      "cleanliness_rating": "Number",
      "location_rating": "Number"
    }
```

### Update review
  * PATCH `places/:place_id/reviews/:review_id`

**Path Parameters**
  * `place_id` place id
  * `review_id` review id

**Success Status Code:** `204`

**Request Body:** Expects JSON with any of the following keys (include only keys to be updated):
```json
    {
      "first_name": "String",
      "last_name": "String",
      "date": "String",
      "comment": "String",
      "checkin_rating": "Number",
      "accuracy_rating": "Number",
      "value_rating": "Number",
      "communication_rating": "Number",
      "cleanliness_rating": "Number",
      "location_rating": "Number"
    }
```

### Delete review
  * DELETE `places/:place_id/reviews/:review_id`

**Path Parameters**
* `place_id` place id
* `review_id` review id

**Success Status Code:** `204`
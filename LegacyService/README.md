## Server API

### Get reviews for a place
  * GET `/api/place/:id/reviews`

**Path Parameters**
  * `id`  place id

**Success Status Code:** `200`

**Individual Review Object:**

```json
  {
    "first_name": "String",
    "last_name": "String",
    "avatar": "String",
    "date_published": "String",
    "comment": "String",
    "checkin_rating": "Number",
    "accuracy_rating": "Number",
    "value_rating": "Number",
    "communication_rating": "Number",
    "cleanliness_rating": "Number",
    "location_rating": "Number"
  }
```

**Returns:** JSON, each object in 'reviews' array contains the above properties

```json
    {
      "reviews": "Array"
    }
```

### Create review
  * POST `api/place/:id/review`

**Path Parameters**
  * `id` place id

**Success Status Code:** `201`

**Request Body:** Expects JSON with the following keys:

```json
    {
      "first_name": "String",
      "last_name": "String",
      "avatar": "String",
      "date_published": "String",
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
  * PATCH `api/:place_id/review/:review_id`

**Path Parameters**
  * `place_id` place id
  * `review_id` review id

**Success Status Code:** `204`

**Request Body:** Expects JSON with any of the following keys (include only keys to be updated):
```json
    {
      "first_name": "String",
      "last_name": "String",
      "avatar": "String",
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
  * DELETE `api/:place_id/review/:review_id`

**Path Parameters**
  * `place_id` place id
  * `review_id` review id

**Success Status Code:** `204`

### Delete place
  * DELETE `api/place/:id`

**Path Parameters**
  * `id` place id

**Success Status Code:** `204`
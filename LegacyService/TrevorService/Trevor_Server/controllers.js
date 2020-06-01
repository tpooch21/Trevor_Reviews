const { fetchReviews } = require('../Trevor_Database/models/getReviewsModel.js');
const { writeReview } = require('../Trevor_Database/models/postReviewsModel.js');


const getAllReviews = (req, res) => {
  fetchReviews(req.params.id, (err, results) => {
    if (err) {
      console.log('Error fetching data => ', err);
      res.status(404).end();
    } else {
      res.status(200).json(results.rows);
    }
  });
};

const postReview = (req, res) => {
  writeReview(req.body, req.params.id, (err, results) => {
    if (err) {
      console.log('Error posting data => ', err);
      res.status(501).end();
    } else {
      res.status(201).end();
    }
  });
};

module.exports = {
  getAllReviews,
  postReview
};
const { fetchReviews } = require('../Trevor_Database/models/getReviewsModel.js');
const { writeReview } = require('../Trevor_Database/models/postReviewsModel.js');
const { patchReview } = require('../Trevor_Database/models/patchReviewModel.js');
const { deleteReview } = require('../Trevor_Database/models/deleteReviewModel.js');
const { deletePrimary } = require('../Trevor_Database/models/deletePlaceModel.js');

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

const updateReview = (req, res) => {
  patchReview(req.params.place_id, req.params.date, req.params.review_id, req.body, (err, results) => {
    if (err) {
      console.log('Error updating data => ', err);
      res.status(501).end();
    } else {
      res.status(204).end();
    }
  });
};

const deleteReviewCont = (req, res) => {
  deleteReview(req.params.place_id, req.params.date, req.params.review_id, (err, results) => {
    if (err) {
      res.status(501).end();
    }
    res.status(204).end();
  });
};

const deletePlace = (req, res) => {
  deletePrimary(req.params.id, (err, results) => {
    if (err) {
      res.status(501).end();
    }
    res.status(204).end();
  });
};

module.exports = {
  getAllReviews,
  postReview,
  updateReview,
  deleteReviewCont,
  deletePlace
};
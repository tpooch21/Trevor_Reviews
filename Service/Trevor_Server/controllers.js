const models = require('../Trevor_Database/models.js');

const getAllReviews = (req, res) => {
  models.fetchReviews(req.params.id, (err, results) => {
    if (err) {
      res.status(404).end();
    }
    res.status(200).json(results);
  });
};

module.exports = {
  getAllReviews
};
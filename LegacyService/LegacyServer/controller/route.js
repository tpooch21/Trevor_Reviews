const db = require('../database/index.js');

module.exports = {
  consoleLog: (req, res, next) => {
    console.log(`${req.method} comes from ${req.originalUrl}`);
    console.log(req.body);
    next();
  },

  getReviews: (req, res) => {
    db.fetchReviews(req.params.roomID, res);
  },

  filterReviews: (req, res) => {
    db.searchReviews(req.params.roomID, req.params.phrase, res);
  },
};

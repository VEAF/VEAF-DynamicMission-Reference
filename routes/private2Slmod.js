var express = require('express');
var router = express.Router();

/* GET private server SLMOD json data pages. */
router.get('/stats', function(req, res, next) {
  res.sendFile('/Users/veaf/Saved Games/private2_server/Slmod/SlmodStats.json', { root: '' });
});

router.get('/metastats', function(req, res, next) {
  res.sendFile('/Users/veaf/Saved Games/private2_server/Slmod/SlmodMetaStats.json', { root: '' });
});

router.get('/penaltystats', function(req, res, next) {
  res.sendFile('/Users/veaf/Saved Games/private2_server/Slmod/SlmodPenaltyStats.json', { root: '' });
});

router.get('/events', function(req, res, next) {
  res.sendFile('/Users/veaf/Saved Games/private2_server/Slmod/slmodEvents.json', { root: '' });
});

module.exports = router;

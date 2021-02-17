var express = require('express');
var router = express.Router();

/* GET private server SLMOD json data pages. */
router.get('/stats', function(req, res, next) {
  res.sendFile('/Users/veaf/Saved Games/private_server_2.5.6/Slmod/SlmodStats.json', { root: '' });
});

router.get('/metastats', function(req, res, next) {
  res.sendFile('/Users/veaf/Saved Games/private_server_2.5.6/Slmod/SlmodMetaStats.json', { root: '' });
});

router.get('/penaltystats', function(req, res, next) {
  res.sendFile('/Users/veaf/Saved Games/private_server_2.5.6/Slmod/SlmodPenaltyStats.json', { root: '' });
});

module.exports = router;

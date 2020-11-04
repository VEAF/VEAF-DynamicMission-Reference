var express = require('express');
var router = express.Router();
let fs = require('fs')

/* GET home page. */
router.get('/', function(req, res, next) {
  const filename = 'AliasesList.json'
  let path = process.env.VEAF_EXPORT_DIR + '\\' + filename
  if (!fs.existsSync(path)) {
    path = process.env.TEMP + '\\' + filename
  }
  if (fs.existsSync(path)) {
    let rawdata = fs.readFileSync(path);
    let aliases = JSON.parse(rawdata);
    res.render('aliases', { title: 'List of aliases', subtitle:'read from '+path, data: aliases.aliases } );
  } else {
    res.render('error', { message: 'Error !', error: {status:"Cannot find "+filename, stack:"aliases.js"} } );
  }
});

module.exports = router;

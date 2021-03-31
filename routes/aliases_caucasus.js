var express = require('express');
var router = express.Router();
router.missionName="_OpenTraining_Caucasus"
let fs = require('fs')

/* GET home page. */
router.get('/', function(req, res, next) {
  const filename = "AliasesList"+router.missionName+".json"
  let path = process.env.VEAF_EXPORT_DIR + '\\' + filename
  if (!fs.existsSync(path)) {
    path = process.env.TEMP + '\\' + filename
  }
  if (fs.existsSync(path)) {
    let rawdata = fs.readFileSync(path);
    let aliases = JSON.parse(rawdata);
    res.render('aliases', { title: 'Liste des aliases', subtitle:'générée à partir de '+path, data: aliases.aliases } );
  } else {
    res.render('error', { message: 'Erreur !', error: {status:"Impossible de trouver le fichier "+filename, stack:"aliases.js"} } );
  }
});

module.exports = router;

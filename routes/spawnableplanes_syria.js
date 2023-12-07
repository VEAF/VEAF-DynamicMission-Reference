var express = require('express');
var router = express.Router();
router.missionName="_OpenTraining_Syria"
let fs = require('fs')

/* GET home page. */
router.get('/', function(req, res, next) {
  const filename = "SpawnablePlanesList"+router.missionName+".json"
  let path = process.env.VEAF_EXPORT_DIR + '\\' + filename
  if (!fs.existsSync(path)) {
    path = process.env.TEMP + '\\' + filename
  }
  if (fs.existsSync(path)) {
    let rawdata = fs.readFileSync(path);
    let data = JSON.parse(rawdata);
    res.render('spawnablePlanes', { title: 'Liste des avions spawnables', subtitle:'générée à partir de '+path, data: data.spawnablePlanes } );
  } else {
    res.render('error', { message: 'Erreur !', error: {status:"Impossible de trouver le fichier "+filename, stack:"spawnableplanes.js"} } );
  }
});

module.exports = router;

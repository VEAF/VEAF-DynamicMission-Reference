const { notDeepEqual } = require('assert');
var express = require('express');
var router = express.Router();
router.missionName="_OpenTraining_Syria"
let fs = require('fs')

/* GET home page. */
router.get('/', function(req, res, next) {
  const filename = "CombatMissionsList"+router.missionName+".json"
  let path = process.env.VEAF_EXPORT_DIR + '\\' + filename
  if (!fs.existsSync(path)) {
    path = process.env.TEMP + '\\' + filename
  }
  if (fs.existsSync(path)) {
    let rawdata = fs.readFileSync(path);
    let missions = JSON.parse(rawdata).combatMissions;
    let parsedMissions = {}
    for (let i = 0; i < missions.length; i++) {
      const mission = missions[i];
      const friendlyName = mission.friendlyName
      const briefing = mission.briefing
      let missionGroup = parsedMissions[friendlyName]
      if(!missionGroup) {
        missionGroup = { name: friendlyName, briefing: briefing, variants: []}
        parsedMissions[friendlyName] = missionGroup
      }
      missionGroup.variants.push(mission)
    }
    res.render('missions', { title: 'Liste des missions air-air', subtitle:'générée à partir de '+path, data: parsedMissions } );
  } else {
    res.render('error', { message: 'Erreur !', error: {status:"Impossible de trouver le fichier "+filename, stack:"missions.js"} } );
  }
});

module.exports = router;

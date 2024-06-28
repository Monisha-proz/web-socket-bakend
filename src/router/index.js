const express = require("express");
const router = express.Router();

const teamController = require('../controller/teamController');
const playerController = require('../controller/playersController');

/* TEAM */
router.post('/get-team',teamController.getTeam)//get team

/* PLAYERS */
// router.post('/update-player/score', playerController.updatePlayerScore)
router.post('/get-players',playerController.getPlayers)
router.post('/get-player',playerController.getPlayer)

module.exports = router;

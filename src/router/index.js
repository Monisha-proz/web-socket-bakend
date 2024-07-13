const express = require("express");
const router = express.Router();

const teamController = require('../controller/teamController');
const playerController = require('../controller/playersController');
const userController = require('../controller/userController');


/* TEAM */
router.post('/get-team',teamController.getTeam)//get team

/* PLAYERS */
// router.post('/update-player/score', playerController.updatePlayerScore)
router.post('/get-players',playerController.getPlayers);
router.post('/get-player',playerController.getPlayer);
router.post('/retained-player',playerController.retainedPlayer);

/* AUCTION HISTORY */
router.post('/get-auction-history',playerController.auctionHistory);



/* USER */
router.post('/login',userController.login);

module.exports = router;

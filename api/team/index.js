const express = require('express') 
const teamController = require("./controller.js")
const router = express.Router();

router.get('/all',teamController.getAllTeamMembers);

module.exports = router;
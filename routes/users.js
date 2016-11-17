var express = require('express');
var router = express.Router();
const People = require('../controller/controller.peopleskills');
/* GET users listing. */
router.get('/', People.seeding)




module.exports = router;

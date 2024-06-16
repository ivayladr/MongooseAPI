const express = require('express');
const router = express.Router();
const collection2Controller = require('../controllers/collection2Controller');

router.get('/', collection2Controller.getAll);


module.exports = router;

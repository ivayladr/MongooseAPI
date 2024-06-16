const express = require('express');
const router = express.Router();
const collection3Controller = require('../controllers/collection3Controller');

router.get('/', collection3Controller.getAll);


module.exports = router;

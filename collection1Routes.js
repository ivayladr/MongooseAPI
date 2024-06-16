const express = require('express');
const router = express.Router();
const collection1Controller = require('../controllers/collection1Controller');

router.get('/', collection1Controller.getAll);


module.exports = router;

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Hola a todos los alumnos de TING');
});

module.exports = router;

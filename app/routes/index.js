const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/ping', async(req,res) => {
  return res.status(200).json({
    status: "Success",
    content: "Ping !!!"
  })
});

module.exports = router;

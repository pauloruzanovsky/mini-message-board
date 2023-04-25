var express = require('express');
var router = express.Router();
const {DateTime} = require('luxon');

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: DateTime.now().toLocaleString()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: DateTime.now().toLocaleString()
  }

]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages:messages });
});

router.get('/new', function(req, res, next) {
  res.render('form');
})

router.post('/new', function(req, res, next) {
  const {text, user} = req.body
  console.log(req.body)
  messages.push({text:text, user:user, added:DateTime.now().toLocaleString()})
  res.redirect('/')

})

module.exports = router;

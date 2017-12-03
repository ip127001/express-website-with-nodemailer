var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'contact' });
});

router.post('/send', function(req, res,next){
	var user = req.body.email;

	var transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: 'geekrk.01@gmail.com',
			pass: 'ip127001@2018'
		}
	});

	var mailOptions = {
		from: 'Rohit kumawat <rkumawat1761996@gmail.com>  ',
		to: 'geekrk.01@gmail.com',
		subject: 'address is here',
		text: 'new address is jaipur from user.....Name: '+req.body.name+ ' Email: '+req.body.email + 'Message: '+ req.body.message
	};        

	transporter.sendMail(mailOptions, function(error, info){
		if(error){
			console.log(error);
			res.redirect('/');
		} else {
			console.log('Email sent: '+ info.response);
			res.redirect('/');
		}
	});
});

module.exports = router;
 
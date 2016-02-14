var express = require('express');
var app = express();

var edge  = require('edgegrid');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

var urllist = [];


app.get('/cache-clear', function(req,res) {

	res.render('cache-clear');

});

app.post('/cache-clear', function(req,res) { 
	// res.render('cache-clear');

	var pageUrl = req.body.pageurl;

	var url = {url: pageUrl};

	var urlobj ={
	    objects: [
			pageUrl
    		]
  	};


	var eg = new edge({
	  path: '.edgerc',
	  section: 'default'
	});

	eg.auth({
	  path: '/ccu/v3/invalidate/url/production',
	  method: 'POST',
	  headers: { 'Content-Type': 'application/json' },
	  body: urlobj
	  
	});

	eg.send(function(data, response) {
	  console.log(JSON.parse(data));
	 // res.send(data);
	  var data = JSON.parse(data);

	  res.render('submitted', {data: data} );
	
	});


});




app.listen(8080, function () {
  console.log('Akamai app listening on port 8080!')
});



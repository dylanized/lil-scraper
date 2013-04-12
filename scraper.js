// scrape data

  var request = require('request');
	var cheerio = require('cheerio');
	
	var searchTerm = 'hello world';
	var url = 'http://www.bing.com/search?q=' + searchTerm;
	
	request(url, function(err, resp, body){
	  $ = cheerio.load(body);
	  links = $('.sb_tlst h3 a');
	  $(links).each(function(i, link){
	    console.log($(link).text() + ':\n  ' + $(link).attr('href'));
	  });
	
	});

// load mysql

	var _mysql = require('mysql');	
	
	var mysql = _mysql.createClient({
	    host: "",
	    port: "",
	    user: "",
	    password: "",
	});

	mysql.query('use ' + database);

// insert data
	 
	var sql = "";  // need to build query
	mysql.query(sql, function(err) {
	  if (err) { throw err; }
	});

// that's it!

	

// require(s)
var request = require('request');
var cheerio = require('cheerio');

// Flag(s)
const DEBUG = true;
const CRAWL_TAG = "EXAMPLE";
const MAX_URLS_VISITED = 1;

// Helper Function(s)
var log;

log = function log(message){
	console.log(CRAWL_TAG + ": " + message);
}

// Crawl Required Values
var rateLimitInMilliseconds = 1000;

// Crawl Required Functions
var getURLSeedlist;
var extractData;
var extractURLs;
var crawl;

getURLSeedlist = function getURLSeedlist() {
	var url_seedlist = [];

	// Load the URL seedlist
	url_seedlist.push("http://www.google.com");

	return url_seedlist;
};

extractData = function extractData($) {
	var result = {};

	// Process the HTML and extract relevant data
	result.url = "http://www.arstechnica.com";

	return result;
};

extractURLs = function extractURLs($) {
	var url_list = [];

	// Process the HTML and extract all URLs to visit later

	return url_list;
};

crawl = function crawl(url_seedlist){
	var debugStatusString = (DEBUG) ? "ON" : "OFF";
	log("Crawl started. Debug mode " + debugStatusString);

	if(DEBUG){
		log("Seedlist: " + url_seedlist);
	}

	// Crawl the web!
	var url_list = url_seedlist;
	var urls_visited = {};
	var num_urls_visited = 0;
	while(url_list.length > 0 && num_urls_visited < MAX_URLS_VISITED){
		// Get the next URL
		var next_url = url_list.pop();

		// If the next URL has not been visited before, visit it
		if(!(next_url in urls_visited)){
			if(DEBUG){
				log("Visiting URL: \"" + next_url + "\"");
			}

			// Record that the URL was visited
			urls_visited[next_url] = true;
			num_urls_visited++;

			// Request the page
			request(next_url, function(error, response, body) {
     			// Check status code (200 is HTTP OK)
     			if(error || response.statusCode !== 200) {
       				return;
     			}
     			console.log("Status code: " + response.statusCode);

    			// Load the HTML
    			var $ = cheerio.load(body);
    			var data = extractData($);
    			var urls_to_visit = extractURLs($);
  			});
		} else {
			if(DEBUG){
				log("Already visited URL: \"" + next_url + "\", skipping...");
			}
			continue;
		}
	}

	// Notify user that crawl has completed
	var crawlCompleteMessage = (num_urls_visited >= MAX_URLS_VISITED) ?
		"MAX URLS VISITED (" + MAX_URLS_VISITED + ")" :
		"URL LIST EMPTY"; 
	log("Crawl complete: " + crawlCompleteMessage);
}

// Start crawling the web
crawl(getURLSeedlist());
// require(s)

// Flag(s)
const DEBUG = true;
const CRAWL_TAG = "EXAMPLE";

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
	url_seedlist.push("www.google.com");
	url_seedlist.push("www.amazon.com");

	return url_seedlist;
};

extractData = function extractData(html) {
	var result = {};

	// Process the HTML and extract relevant data
	result.url = "www.google.com";

	return result;
};

extractURLs = function extractURLs(html) {
	var url_list = [];

	// Process the HTML and extract all URLs to visit later

	return url_list;
};

crawl = function crawl(url_seedlist){
	var debugStatusString = (DEBUG) ? "ON" : "OFF";
	log("Crawl started. Debug mode " + debugStatusString);

	if(DEBUG){
		log("Seedlist: " + url_seedlist)
	}

	// Crawl the web!
}

// Start crawling the web
crawl(getURLSeedlist());
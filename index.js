// this is a test bot for accessing twitter.

var Twit = require('twit');
var twitInfo = require('./config.js');
var twitter = new Twit(twitInfo);
var searchString = "world";

var tweets;
var lastTweet = "";

function tweeting(){


twitter.get('search/tweets', { q: searchString , count: 10, result_type: 'mixed', lang: 'en', include_entities: false }, function(err, data, response) {
  tweets = data.statuses;
  var selectTweet = tweets[Math.floor(Math.random()*tweets.length)] 
    refineTweet(selectTweet.text.replace(RegExp(searchString, "gi"),'Virtual Reality'));
});

function refineTweet(rawTweet){
	// remove mentions and replace
	rawTweet = rawTweet.replace(/@([a-z\d_]+)/ig, 'Human Person');

	//remove all #
	rawTweet = rawTweet.replace(/#([a-z\d_]+)/ig, '');

	//remove RT
	rawTweet = rawTweet.replace('RT ', '');
	
	//remove links
	rawTweet = rawTweet.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '');
	rawTweet = rawTweet.substr(0,140);

	postTweet(rawTweet);
}

function postTweet(actualTweet){
	if (actualTweet == lastTweet){ 
		tweeting();
	}else{
		
		console.log(actualTweet);
		twitter.post('statuses/update', { status: actualTweet }, function(err, data, response) {
		console.log(data);
		});
		lastTweet = actualTweet
	}
	}
}

// replace this function with setInterval() function to set frequency of tweets.
tweeting();
// setInterval(tweeting,10000);
setInterval(tweeting,4*60*60000);

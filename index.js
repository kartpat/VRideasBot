// this is a test bot for accessing twitter.

var Twit = require('twit');
var twitInfo = require('./config.js');
var twitter = new Twit(twitInfo);
var searchString = "world";

var tweets;

function tweeting(){


twitter.get('search/tweets', { q: searchString , count: 10, result_type: 'mixed', lang: 'en' }, function(err, data, response) {
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

	console.log(rawTweet);
}

// twitter.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
//   console.log(data);
// });

}


// replace this function with setInterval() function to set frequency of tweets.
tweeting();
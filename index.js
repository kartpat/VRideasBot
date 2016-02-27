// this is a test bot for accessing twitter.

var Twit = require('twit');
var twitInfo = require('./config.js');
var twitter = new Twit(twitInfo);

var tweets;

twitter.get('search/tweets', { q: '#this.mirror', count: 20 }, function(err, data, response) {
  tweets = data.statuses;
  for (index in tweets) {
    console.log(tweets[index].text);
  }
})

// twitter.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
//   console.log(data);
// });
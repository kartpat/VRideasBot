// this is a test bot for accessing twitter.

var Twit = require('twit');
var twitInfo = require('./config.js');
var twitter = new Twit(twitInfo);
var searchString = "world";

var tweets;

twitter.get('search/tweets', { q: searchString , count: 2, result_type: 'popular', lang: 'en' }, function(err, data, response) {
  tweets = data.statuses;
  for (index in tweets) {
    console.log(tweets[index].text.replace(RegExp(searchString, "gi"),'Virtual Reality'));
  }
})

//.replace(RegExp(searchString, "gi"),'Virtual Reality')

// twitter.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
//   console.log(data);
// });

// twitter.get('followers/ids', { screen_name: 'mythilivenkat' },  function (err, data, response) {
//   console.log(data)
// })
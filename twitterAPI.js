var Twitter = require('twitter');
require('dotenv/config')

const apikey = process.env.apikey
const apiSecretKey = process.env.apikeysecret
const accessToken = process.env.accesstoken
const accessTokenSecret = process.env.accesstokensecret
 
var client = new Twitter({
  consumer_key: apikey,
  consumer_secret: apiSecretKey,
  access_token_key: accessToken,
  access_token_secret: accessTokenSecret
});
 
var params = {screen_name: 'SampleSimple3'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});

client.post('statuses/update', {status: 'I am a tweet'}, function(error, tweet, response) {
    if (!error) {
      console.log(tweet);
    }
  });

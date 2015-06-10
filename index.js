// Description:
// Returns the URL of the first google hit for a query
//
// Dependencies:
// None
//
// Configuration:
//   BROBBOT_GOOGLE_REFERER - the referer URL to pass to the Google API

module.exports = function(robot) {
  robot.helpCommand("brobbot google [me] `query`", "Googles `query` and returns 1st result's URL");

  var REFERER = process.env.BROBBOT_GOOGLE_REFERER || 'https://npmjs.org/package/brobbot-google';

  robot.respond(/^(google)( me)? (.*)/i, function(msg) {
    var query = msg.match[3];

    return msg.http('https://ajax.googleapis.com/ajax/services/search/web')
      .query({v: '1.0', q: query})
      .header('Referer', REFERER)
      .get()(function(err, res, body) {
        var results = JSON.parse(body).responseData.results;
        if (results && results.length > 0) {
          msg.send(results[0].url);
        }
        else {
          msg.send("Sorry, Google had zero results for '" + query + "'");
        }
      });
  });
};

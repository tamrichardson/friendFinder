
var friendsData = require("../data/friends");

module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function (req, res) {

    var userInput = {
      name: req.body.name,
      photo: req.body.photo,
      scores: [],
    };

    console.log(friendsData);

    var scoresArray = []
    for (var i = 0; i < req.body.scores.length; i++) {
      scoresArray.push(parseInt(req.body.scores[i]))
    }
    userInput.scores = scoresArray;

    var compareArray = [];
    for (var i = 0; i < friendsData.length; i++) {
      var difference = 0;
      for (var j = 0; j < userInput.scores.length; j++) {
        difference += Math.abs(userInput.scores[j] - friendsData[i].scores[j]);
      }
      compareArray.push(difference)
    }

    var bffMatch = 0;
    for (var i = 0; i < compareArray.length; i++) {
      if (compareArray[i] < compareArray[bffMatch]) {
        bffMatch = i;
      }
    }

    var results = friendsData[bffMatch];

    // after finding match, add user to friends array
    friendsData.push(userInput);

    // send back to browser the bff match
    res.json(results);
  });
}

    // console.log(req.body)


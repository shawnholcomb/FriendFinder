var friendsArray = require("../data/friends");

module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json(friendsArray);
  });

  app.post("/api/friends", function (req, res) {
    var newFriend = req.body;
    var friendMatch;
    var scoreDiff = [];
    var totalDiffArr = [];

    // functions used for calculations

    function sum(arr) {
      return arr.reduce(function (a, b) {
        return a + b
      }, 0);
    }

    function min(arr) {
      return Math.min.apply(null, arr);
    }

    // Calc differences between scores
    friendsArray.forEach(function (friend) {
      for (var i = 0; i < friend.scores.length; i++) {
        scoreDiff.push(Math.abs(newFriend.scores[i] - friend.scores[i]))
      }
      var totalDiff = sum(scoreDiff);
      totalDiffArr.push(totalDiff);
      scoreDiff = [];
      var totalDiff = 0;
    });

    // Determine matching superhero friend
    var matchIndex = totalDiffArr.indexOf(min(totalDiffArr))
    friendMatch = friendsArray[matchIndex];

    res.json(friendMatch);
    friendsArray.push(newFriend);
  });
};
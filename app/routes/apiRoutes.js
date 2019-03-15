var friendsArray = require("../data/friends");

module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function (req, res) {
    var newFriend = req.body



    res.json(friendsArray[5]);
    friendsArray.push(newFriend);
  });
};

var apiFriends = require("../data/friendsData");

module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json(apiFriends);
  });
}
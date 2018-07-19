var friendsData = require("../data/friends");
module.exports = function (app) {
    console.log("here is freinds data: " + friendsData)
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function (req, res) {
        friendsData.push(req.body);
        console.log(friendsData);
        res.json(friendsData[1]);
    });

    app.post("/api/clear", function () {

        friendsData = [];

        console.log(friendsData);
    });
};

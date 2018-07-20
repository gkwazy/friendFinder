var friendsData = require("../data/friends");
module.exports = function (app) {
    console.log("here is freinds data: " + friendsData)
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function (req, res) {
        friendsData.push(req.body);
        var friendDefult = [50, 0];
        console.log("testing the bug " + friendsData[friendsData.length - 1].name);
        for (i = 0; i < friendsData.length - 1; i++) {
            var friendMeter = ((Math.abs(friendsData[i].q1 - friendsData[friendsData.length - 1].q1)) +
                (Math.abs(friendsData[i].q2 - friendsData[friendsData.length - 1].q2)) +
                (Math.abs(friendsData[i].q3 - friendsData[friendsData.length - 1].q3)) +
                (Math.abs(friendData[i].q4 - friendData[friendData.length].q4)) +
                (Math.abs(friendData[i].q5 - friendData[friendData.length].q5)) +
                (Math.abs(friendData[i].q6 - friendData[friendData.length].q6)) +
                (Math.abs(friendData[i].q7 - friendData[friendData.length].q7)) +
                (Math.abs(friendData[i].q8 - friendData[friendData.length].q8)) +
                (Math.abs(friendData[i].q9 - friendData[friendData.length].q9)) +
                (Math.abs(friendData[i].q10 - friendData[friendData.length].q10))
            );

            console.log("this is the total to the big thing: " + ((friendsData[friendsData.length - 1].q1)));
            if (friendMeter < friendDefult[0]) {
                friendDefult = [friendMeter, i];
            }
        }
        console.log("this is the match " + [friendDefult[1]]);
        res.json(friendsData[friendDefult[1]]);
    });

    app.post("/api/clear", function () {

        friendsData = [];

        console.log(friendsData);
    });
};

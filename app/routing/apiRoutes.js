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
                (Math.abs(friendsData[i].q4 - friendsData[friendsData.length - 1].q4)) +
                (Math.abs(friendsData[i].q5 - friendsData[friendsData.length - 1].q5)) +
                (Math.abs(friendsData[i].q6 - friendsData[friendsData.length - 1].q6)) +
                (Math.abs(friendsData[i].q7 - friendsData[friendsData.length - 1].q7)) +
                (Math.abs(friendsData[i].q8 - friendsData[friendsData.length - 1].q8)) +
                (Math.abs(friendsData[i].q9 - friendsData[friendsData.length - 1].q9)) +
                (Math.abs(friendsData[i].q10 - friendsData[friendsData.length - 1].q10))
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

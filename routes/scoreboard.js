var express = require("express");
var router = express.Router();

router.get("/", async function (req, res){
    const result = await displayScores();
    console.log(result)
    res.json({sucess: true, payload: result});
});

router.post("/", async function(req, res){
    const {date, game, team1_score, team2_score, team3_score, team4_score} = req.body;
    const result = await addNewScore(date, game, team1_score, team2_score, team3_score, team4_score);
    res.json({sucess: true, payload: result})
});



module.exports = router;

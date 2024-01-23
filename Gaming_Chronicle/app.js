const express = require("express");
const app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", function(req,res){
    
    res.render("homepage");
})

app.get("/game/:gameTitle/:gameCreator",function(req,res){
    const title = req.params.gameTitle;
    const creator = req.params.gameCreator;
    res.render("game", {
        gameTitlePickle: title,
       gameCreatorPickle: creator
    }) 
})

app.get("/list", function(req, res) {

    //Games List
    const games = [
        {title: "Fortnite", creator: "Epic Games"},
        {title: "PUBG", creator: "EA"},
        {title: "FIFA", creator: "Tensor"}
    ]

    res.render("list", {
        gamesList: games
    })
})

app.listen(3100, function(){
    console.log("Illuminiti productions website is now online")
})
var express = require('express');
var router = express.Router();
var mongodb = require("mongodb");


/* GET home page. */
router.get("/", function (req, res, next) {
    var MongoClient = mongodb.MongoClient;

    var url = "mongodb://127.0.0.1:27017/TeamHub";
    let title = "Welcome to TeamHub!"
    MongoClient.connect(url, function(err, db) {
        if(err)
            console.log("unable to connect", err);
        else {
            console.log("connection established.");
            var collection = db.collection("table1");
            collection.find({}).toArray(function(err, result) {
                if(err)
                    res.send(err);
                else if(result.length){
                    res.render('index', {"projectlist": result, "title": title});
                } else {
                    res.send("nothing found");
                }
            });
        }
        db.close();
    });
});

router.get('/create', function (req, res, next) {
    res.render('create', {title: 'Create a project!'});
});

router.get('/create-2', function (req, res, next) {
    res.render('create2', {title: 'Create a project!'});
});

router.post('/create-3', function (req, res, next) {
    console.log(req.body.project_title);
    res.render('create3', {title: 'Create a project!'});
});

router.get('/profile', function (req, res, next) {
    res.render('profile', {title: 'View your profile!'});
});

router.get("/thelist", function (req, res, next) {
    var MongoClient = mongodb.MongoClient;

    var url = "mongodb://127.0.0.1:27017/TeamHub";

    MongoClient.connect(url, function(err, db) {
        if(err)
            console.log("unable to connect", err);
        else {
            console.log("connection established.");
            var collection = db.collection("table1");
            collection.find({}).toArray(function(err, result) {
                if(err)
                    res.send(err);
                else if(result.length){
                    res.render('studentlist', {"studentlist": result});
                } else {
                    res.send("nothig found");
                }
            });
        }
        db.close();
    });
});



module.exports = router;

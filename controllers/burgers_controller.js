var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions

var burger = require("../models/burger.js");

// All our routes and logic within those routes 
router.get('/', function(req,res){
    burger.selectAll(function(burger){
        //console.log(burger_data);
        res.render('index', {burger});
    })   
});

router.put('/api/burger/:id', function(req,res){
    console.log("Made it to the put");

    var condition = req.params.id;
    
    console.log("Condition: ", condition);
    
    burger.updateOne(condition, function(result){
        if(result.changedRows == 0) {
            console.log("Database NOT Updated");
            return res.status(404).end();
        } else {
            console.log("Database Updated");
            res.status(200).end();
        }
            
    });
});

router.post("/api/burger", function(req, res) {
    burger.insertOne(req.body.burger, req.body.devoured, function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });

// Export routes for server.js to use
module.exports = router;
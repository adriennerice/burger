// Import the ORM to create functions that will interact with the database.


var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll('burgers', function(res){
            cb(res);
        });
     },
    insertOne: function(burger, devoured, cb) {
        orm.insertOne('burgers', burger, devoured, cb)
    },
    updateOne: function(id, cb) {
        orm.updateOne('burgers', id, cb);
     }
};

module.exports = burger;
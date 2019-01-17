//****** File contains methods that will execute MySQL commands in the controller  *****
//****** These methods are used to retrieve and store data in the database         *****/

var connection = require('./connection.js');

var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = 'SELECT * FROM ??;'; 
        connection.query(queryString, [tableInput],function(err, result){
            if(err)throw err;
            cb(result);
        });
    },
    insertOne: function(tableInput, burgerInput, devouredInput, cb) {
        connection.query('INSERT INTO ?? (burger, devoured) VALUES (?, ?);',
            [tableInput, burgerInput, devouredInput], function(err, result) {
            if(err) throw err;
            cb(result)
        });
        
    },
     updateOne: function(tableInput, id, cb) {
        var queryString = 'UPDATE ?? SET ? WHERE ?;';
        connection.query(queryString, [tableInput,{devoured: true}, {id: id}], function(err, result){
            if(err) throw err;
            cb(result);
        })
     }
};

module.exports = orm;
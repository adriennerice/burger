//****** File contains methods that will execute MySQL commands in the controller  *****
//****** These methods are used to retrieve and store data in the database         *****/

var connection = require('./connection.js');
 
console.log("made it to orm");

var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = 'SELECT * FROM ??;'; 
        connection.query(queryString, [tableInput],function(err, result){
            if(err)throw err;
            cb(result);
        });
    },
    insertOne: function(tableInput, burgerInput, devouredInput, cb) {
        console.log("ORM");
        console.log(tableInput);
        console.log(burgerInput);
        console.log(devouredInput);
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
            console.log("DB Result" + result);
        })
     }
};

module.exports = orm;
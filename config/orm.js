// Import MySQL connection.
const connection = require("../config/connection.js");

const orm = {
    selectAll: function(cb){
        console.log("selectAll func");
        const queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, result) {
            if(err){
                cb(err);
            }
            cb(result);
        });
    },
    insertOne: function(burgerName, cb){
        console.log("insertOne func");
        const queryString = `INSERT INTO burgers (burger_name, devoured) VALUES ("${burgerName}", false)`;
        connection.query(queryString, function(err, result) {
            if(err){
                cb(err);
            }
            cb(result);
        });
    },
    updateOne: function(id, devoured, cb){
        console.log("updateOne func");
        const queryString = `UPDATE burgers SET devoured = ${devoured} WHERE id = ${id}`;
        connection.query(queryString, function(err, result) {
            if(err){
                cb(err);
            }
            cb(result);
        });
    }
};

// Export the orm object for the model (cat.js).
module.exports = orm;
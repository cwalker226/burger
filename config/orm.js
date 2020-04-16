// Import MySQL connection.
const connection = require("../config/connection.js");

const orm = {
    selectAll: function(cb){
        const queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, result) {
            if(err){
                cb(err);
            }
            cb(result);
        });
    },
    insertOne: function(burgerName, cb){
        const queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, false)";
        connection.query(queryString, [burgerName], function(err, result) {
            if(err){
                cb(err);
            }
            cb(result);
        })
    },
    updateOne: function(id, devoured, cb){
        const queryString = "UPDATE burgers SET devoured = ? WHERE id = ?";
        connection.query(queryString, [devoured, id], function(err, result) {
            if(err){
                cb(err);
            }
            cb(result);
        })
    }
};

// Export the orm object for the model (cat.js).
module.exports = orm;
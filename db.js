'use strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '1234',
    database : 'true_db'
});

connection.connect(function(err, connection) {

});

module.exports = connection;
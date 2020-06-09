'use strict';
var sql = require('../db.js');

var Khet = function(Khet){
    this.province_id = Khet.province_id;
    this.khet_id = Khet.khet_id;
    this.khet_name = Khet.khet_name;
};

Khet.getById = function (khet_id, result) {
    sql.query("SELECT * FROM khet WHERE khet_id = ? ", user_id, function (err, res) {             
        if(err) {
            result(err, null);
        }
        else{
            result(null, res);
        
        }
    });   
};

module.exports= Khet;
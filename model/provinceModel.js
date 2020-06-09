'use strict';
var sql = require('../db.js');

var Province = function(Province){
    this.province_id = Province.province_id;
    this.province_name = Province.province_name;
};

Province.getById = function (province_id, result) {
    sql.query("SELECT * FROM province WHERE province_id = ? ", province_id, function (err, res) {             
        if(err) {
            result(err, null);
        }
        else{
            result(null, res);
        
        }
    });   
};

module.exports= Province;
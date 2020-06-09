'use strict';
var sql = require('../db.js');

var Khwang = function(Khwang){
    this.province_id = Khwang.province_id;
    this.khet_id = Khwang.khet_id;
    this.khwang_id = Khwang.khwang_id;
    this.khwang_name = Khwang.khwang_name;
    this.zipcode = Khwang.zipcode;
};

Khwang.getById = function (khwang_id, result) {
    sql.query("SELECT * FROM khwang WHERE khwang_id = ? ", khwang_id, function (err, res) {             
        if(err) {
            result(err, null);
        }
        else{
            result(null, res);
        
        }
    });   
};

module.exports= Khwang;
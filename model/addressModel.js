'use strict';
var sql = require('../db.js');

var Address = function(address){
    this.user_id = address.user_id;
    this.province_id = address.province_id;
    this.khet_id = address.khet_id;
    this.khwang_id = address.khwang_id;
    this.zipcode = address.zipcode;
};
Address.createAddress = function (new_address, result) {    
    sql.query("INSERT INTO address SET ?", new_address, function (err, res) {
        if(err) {
            result(err, null);
        }
        else{
            result(null, res.insertId);
        }
    });           
};
Address.getByUserId = function (user_id, result) {
    sql.query("SELECT * FROM address WHERE user_id = ? ", [user_id], function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        
        }
    });   
};
Address.updateAddress = function(user_id, address, result){
    delete address['user_id'];
    sql.query("UPDATE address SET ? WHERE user_id = ?", [address, user_id], function (err, res) {
        if(err) {
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Address.remove = function(user_id, result){
    sql.query("DELETE FROM address WHERE user_id = ?", [user_id], function (err, res) {
        if(err) {
            result(null, err);
        }else{
        
            result(null, res);
        }
    }); 
};

module.exports= Address;
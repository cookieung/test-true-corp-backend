'use strict';
var sql = require('../db.js');

var User = function(user){
    this.user_id = user.user_id;
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.username = user.username;
    this.create_by = user.create_by;
    this.update_by = user.update_by;
    this.created_at = new Date();
    this.update_at = new Date();
};
User.createUser = function (new_user, result) {    
        sql.query("INSERT INTO users SET ?", new_user, function (err, res) {
                
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log(res.insertId);
                    result(null, res.insertId);
                }
            });           
};
User.getUserById = function (user_id, result) {
        sql.query("SELECT * FROM users WHERE user_id = ? ", user_id, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
User.getUserList = function (result) {
        sql.query("Select * from users", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('users : ', res);  

                 result(null, res);
                }
            });   
};
User.updateUser = function(id, user, result){
  sql.query("UPDATE users SET ? WHERE user_id = ?", [user, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
User.remove = function(id, result){
     sql.query("DELETE FROM users WHERE user_id = ?", [id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= User;
'use strict';

var User = require('../model/userModel.js');
var Address = require('../model/addressModel.js');

exports.get_user_list = function(req, res) {
  let keyword = "";

  console.log(req.params)
  if(req.params.keyword) {
    keyword = "WHERE first_name LIKE '%"+req.params.keyword+"%' OR last_name LIKE '%"+req.params.keyword+"%'"
  }
  User.getUserList(keyword, function(err, user) {
    if (err) res.send(err);
    res.send(user);
  });
};



exports.create_user = function(req, res) {
    var new_user = new User(req.body);
    if(!new_user.first_name || !new_user.last_name){
            res.status(400).send({ error:true, message: 'Please fill info' });
    }else{
        User.createUser(new_user, function(err, user) {
            if (err) res.send(err);
            Address.createAddress(new_user.address, function(err2, address) {
              if(err2) res.send(err2);
            })
            res.json({"user_id" : user});
        });
    }
};


exports.get_user_detail = function(req, res) {
  User.getUserById(req.params.user_id, function(err, user) {
    if (err) res.send(err);
    res.json(user[0]);
  });
};


exports.update_user = function(req, res) {
  User.updateUser(req.params.user_id, new User(req.body), function(err, user) {
    if (err) res.send(err);

    Address.updateAddress(req.params.user_id, req.params.address, new Address(req.body), function(err2,address) {
      if(err2) res.send(err2);
    })
    res.json(user);
  });
};


exports.delete_user = function(req, res) {
  User.remove( req.params.user_id, function(err, user) {
    if (err) res.send(err);
    
    Address.remove(req.params.user_id, function(err2, address) {
      if(err2) res.send(err2);
    })
    res.json({ message: 'User is deleted' });
  });
};
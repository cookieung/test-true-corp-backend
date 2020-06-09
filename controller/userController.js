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
    var new_address = new Address(req.body.address);
    if(!new_user.first_name || !new_user.last_name){
            res.status(400).send({ error:true, message: 'Please fill info' });
    }else{

        let a_err = [];
        User.createUser(new_user, function(err, user) {
            if (err) a_err.push(err);

            new_address.user_id = user;
            Address.createAddress(new_address, function(err2, address) {
              if(err2) a_err.push(err2);
            })

            console.log(a_err)
            if(a_err.length > 0) res.send(a_err)
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
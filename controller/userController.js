'use strict';

var User = require('../model/userModel.js');

exports.get_user_list = function(req, res) {
  User.getUserList(function(err, user) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', user);
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
            res.json(user);
        });
    }
};


exports.get_user_detail = function(req, res) {
  User.getUserById(req.params.user_id, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.update_user = function(req, res) {
  User.updateUser(req.params.user_id, new User(req.body), function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.delete_user = function(req, res) {


  User.remove( req.params.user_id, function(err, user) {
    if (err)
      res.send(err);
    res.json({ message: 'User is deleted' });
  });
};
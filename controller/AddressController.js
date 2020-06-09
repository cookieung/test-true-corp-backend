'use strict';

var Address = require('../model/addressModel.js');

exports.get_by_user_id = function(req, res) {
    Address.getByUserId(req.params.user_id, function(err, address) {
      if (err) res.send(err);
      res.json(address[0]);
    });
  };
  
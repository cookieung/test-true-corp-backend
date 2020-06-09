'use strict';

var Province = require('../model/provinceModel.js');

exports.get_detail = function(req, res) {
    Province.getById(req.params.province_id, function(err, province) {
      if (err) res.send(err);
      res.json(province[0]);
    });
  };
  
  exports.get_list = function(req, res) {
    Province.getList(function(err, province) {
      if (err) res.send(err);
      res.json(province);
    });
  };
  
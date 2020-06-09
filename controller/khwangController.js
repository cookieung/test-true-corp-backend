'use strict';

var Khwang = require('../model/khwangModel.js');

exports.get_detail = function(req, res) {
    Khwang.getById(req.params.khwang_id, function(err, khwang) {
      if (err) res.send(err);
      res.json(khwang[0]);
    });
  };
  
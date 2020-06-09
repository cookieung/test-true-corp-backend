'use strict';

var Khet = require('../model/khetModel.js');

exports.get_detail = function(req, res) {
    Khet.getById(req.params.khet_id, function(err, khet) {
      if (err) res.send(err);
      res.json(khet[0]);
    });
  };
  
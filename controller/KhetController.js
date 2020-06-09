'use strict';

var Khet = require('../model/khetModel.js');

exports.get_detail = function(req, res) {
    Khet.getById(req.params.khet_id, function(err, khet) {
      if (err) res.send(err);
      res.json(khet[0]);
    });
  };
  

  exports.get_list = function(req, res) {
        let where = '';
        if(req.params && req.params.province_id) where = 'WHERE province_id = '+req.params.province_id;
        Khet.getList(where, function(err, khet) {
        if (err) res.send(err);
        res.json(khet);
        });
  };
   
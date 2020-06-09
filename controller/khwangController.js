'use strict';

var Khwang = require('../model/khwangModel.js');

exports.get_detail = function(req, res) {
    Khwang.getById(req.params.khwang_id, function(err, khwang) {
      if (err) res.send(err);
      res.json(khwang[0]);
    });
  };
  

  exports.get_list = function(req, res) {
      let province_id = req.params && req.params.province_id;
      let khet_id = req.params && req.params.khet_id;
      let cond = '';
      if(province_id && khet_id) {
        cond = "WHERE province_id = "+ province_id+" AND khet_id = "+khet_id;
      }else if(province_id){
        cond = "WHERE province_id = "+ province_id;
      }else if(khet_id) {
        cond = "WHERE khet_id = "+ khet_id;
      }
      Khwang.getList(cond, function(err, khwang) {
        if (err) res.send(err);
        res.json(khwang);
      });
  };
  
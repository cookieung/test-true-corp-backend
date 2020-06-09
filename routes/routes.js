'use strict';
    module.exports = function(app) {
    var userList = require('../controller/userController');

        app.route('/users/:keyword?')
            .get(userList.get_user_list)
            .post(userList.create_user);
        
        app.route('/user/:user_id')
            .get(userList.get_user_detail)
            .put(userList.update_user)
            .delete(userList.delete_user);

    var addressList = require('../controller/AddressController');

        app.route('/address/:user_id')
            .get(addressList.get_by_user_id)

    var provinceList = require('../controller/provinceController');

        app.route('/provinces')
            .get(provinceList.get_list)

        app.route('/province/:province_id')
            .get(provinceList.get_detail)

    var khetList = require('../controller/KhetController');

        app.route('/khets/:province_id?')
            .get(khetList.get_list)

        app.route('/khet/:khet_id')
        .get(khetList.get_detail)


    var khwangList = require('../controller/khwangController');

        app.route('/khwangs/:province_id?/:khet_id?')
            .get(khwangList.get_list)
    
        app.route('/khwang/:khwang_id')
            .get(khwangList.get_detail)

    };
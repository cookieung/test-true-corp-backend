'use strict';
    module.exports = function(app) {
    var userList = require('../controller/userController');

        app.route('/users')
            .get(userList.get_user_list)
            .post(userList.create_user);
        
        app.route('/user/:user_id')
            .get(userList.get_user_detail)
            .put(userList.update_user)
            .delete(userList.delete_user);
    };
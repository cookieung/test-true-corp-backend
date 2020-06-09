'use strict';
    module.exports = function(app) {
    var userList = require('../controller/userController');

        app.route('/users')
            .get(userList.get_user_list)
            .post(userList.create_user);
        
        app.route('/user/:userId')
            .get(userList.get_user_detail)
            .post(userList.update_user)
            .delete(userList.delete_user);
    };
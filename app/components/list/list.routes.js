/**
 * Created by ihor on 8/17/16.
 */

angular.module('vk.list').
    config(function($stateProvider) {
        $stateProvider
            .state({
                name: 'list',
                url: '/list',
                templateUrl: 'components/list/list.html',
                controller: 'list.ctrl',
                controllerAs: '$ctrl',
                //resolve: {
                //    userListData: ['user.service', function (userService) {
                //        return userService.getList();
                //    }],
                //    userList: ['userListData', 'user.service', function (userListData, userService) {
                //        var userList = [];
                //
                //        userListData.forEach(function (user) {
                //            userList.push(new userService.UserModel(user));
                //        });
                //
                //        return userList;
                //    }]
                //}
            })
});


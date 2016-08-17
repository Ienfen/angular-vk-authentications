/**
 * Created by ihor on 8/17/16.
 */

angular.module('vk').
    config(['$locationProvider', '$urlRouterProvider', function($locationProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/list');
    }]);
/**
 * Created by ihor on 8/17/16.
 */
angular.module('vk.list')
    .controller('list.ctrl', ['$q',function($q) {

        function vkApiWrapper (method, params) {
            var d = $q.defer();

            VK.api.call(VK, method, params, d.resolve.bind(d));

            return d.promise;
        }

        console.log($q);
    }]);
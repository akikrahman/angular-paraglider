'use strict';

angular.
  module('core.pictures').
  factory('Pictures', ['$resource',
    function($resource) {
      return $resource('images/images.json', {}, {
        query: {
          method: 'GET',
          isArray: true
        }
      });
    }
  ]);

'use strict';

angular.
module('view3').
component('view3', {
  templateUrl: 'view3/view3.html',
  controller: ['Pictures',
  function view3Controller(Pictures) {

  var self = this;
  self.imagefile = [];
  self.setImage = '';
  self.filesnames = Pictures.query();

  self.readPicsLocal = function readPicsLocal(){
    self.it = self.filesnames[Symbol.iterator]();
    self.position = self.it.next();

    while(!self.position.done){
      self.filename = `/thumbnails/${self.position.value.name}`
      self.imagefile.push(self.filename);
      self.position = self.it.next();
     
    }

  };
    
  }
]
})
.config(function($routeProvider) {
  $routeProvider.when('/view3', {
    template: '<view3></view3>'
  });
});

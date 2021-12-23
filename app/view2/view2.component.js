'use strict';

angular.
module('view2').
component('view2', {
  templateUrl: 'view2/view2.html',
  controller: ['Pictures',
    function view2Controller(Pictures) {

    var self = this;
    self.imagefile = [];
    self.setImage = '';
    self.filesnames = Pictures.query();
 
    self.mainImageUrl = '/thumbnails/G0017968_thumbnail.jpg';

    self.readPicsLocal = function readPicsLocal(){
      self.it = self.filesnames[Symbol.iterator]();
      self.position = self.it.next();
 
      while(!self.position.done){
        self.filename = `/thumbnails/${self.position.value.name}`
        self.imagefile.push(self.filename);
        self.position = self.it.next();
      }

      self.setImage(self.imagefile[0]);
    };


    self.setImage = function setImage(imageUrl) {
      self.mainImageUrl = imageUrl;
    };
      
    }
  ]
})
.config(function($routeProvider) {
  $routeProvider.when('/view2', {
    template: '<view2></view2>'
  });
});

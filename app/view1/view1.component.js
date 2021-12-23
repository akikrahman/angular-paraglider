'use strict';

angular.
module('view1').
component('view1', {
  templateUrl: 'view1/view1.html',
  controller: ['$interval', 'Pictures',
    function view1Controller($interval, Pictures) {
      var self = this;
      self.imagefile = [];
      self.index = 0;
      self.myTimer = {};
      self.started = false;
      self.filesnames = Pictures.query();
      self.max = self.filesnames.length;
      self.imageurl = '/thumbnails/G0017968_thumbnail.jpg';

      self.theTime = new Date().toLocaleTimeString();

      $interval(function () {
        self.theTime = new Date().toLocaleTimeString();
      }, 1000);

      self.readPicsLocal = function readPicsLocal(){
        self.it = self.filesnames[Symbol.iterator]();
        self.position = self.it.next();
        self.filename = "";
        while(!self.position.done){
          self.filename = `/thumbnails/${self.position.value.name}`
          self.imagefile.push(self.filename);
          self.position = self.it.next();
        }
        self.max= self.imagefile.length;
      };
    
      self.changePics = function changePics(){
        
        if(!self.started){
          self.readPicsLocal();
          self.index=0;
          self.started=true;
        }
        else{
          self.stopPics();
        }
        self.myTimer();
      };
      
      self.restartPics = function restartPics(){
        self.index=0;
        self.stopPics();
        self.myTimer();
      };

      self.myTimer = function theTimer() {
        self.t = setInterval( () => {
          document.getElementById('glideImg').setAttribute('src', self.imagefile[self.index]);
          document.getElementById('updates').innerHTML = "This is image " + (self.index+1) + " of " + self.max;
          self.index++;
          if(self.index === self.max) self.index=0;
        }
        , 3000);
      };
      
      self.stopPics = function stopPics(){
        clearInterval(self.t);
      };      
    }
  ]
})
.config(function($routeProvider) {
  $routeProvider.when('/view1', {
    template: '<view1></view1>'
  });
});

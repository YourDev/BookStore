angular.module('contacts').component('contacts', {
   templateUrl: 'contacts/contacts.template.html',
   controller: ['$scope', function contactsController($scope){
       var styleArray = [
           {
               featureType: "all",
               stylers: [
                   { saturation: -80 }
               ]
           },{
               featureType: "road.arterial",
               elementType: "geometry",
               stylers: [
                   { hue: "#00ffee" },
                   { saturation: 50 }
               ]
           },{
               featureType: "poi.business",
               elementType: "labels",
               stylers: [
                   { visibility: "off" }
               ]
           }
       ];

       var ourPosition = {lat: 50.490223, lng:  30.413712};

       var map = new google.maps.Map(document.getElementById("googleMap"),{
           center: ourPosition,
           styles: styleArray,
           zoom: 10
       });

       new google.maps.Marker({
           map: map,
           position: ourPosition,
           title: 'Main office!'
       });
    }
    ]
});
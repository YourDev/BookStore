angular.module('contacts').component('contacts', {
    templateUrl: 'contacts/contacts.template.html',
    controller: ['uiGmapGoogleMapApi', function contactsController(uiGmapGoogleMapApi) {
        var self = this;
        uiGmapGoogleMapApi.then(function (maps) {
            self.map = {
                center: {
                    latitude: 50.486198,
                    longitude: 30.420599
                },
                options: {
                    mapTypeId: google.maps.MapTypeId.HYBRID
                },
                zoom: 14
            };
            self.marker = {
                id: 0,
                coords: {
                    latitude: 50.490812,
                    longitude: 30.412617
                },
                options: {
                    draggable: false,
                    title: 'Yourbook \nulitsa Severo-Syretskaya, 1, Kyiv'
                }
            }
        });
    }
    ]
});
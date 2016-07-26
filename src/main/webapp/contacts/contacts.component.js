angular.module('contacts').component('contacts', {
    templateUrl: 'contacts/contacts.template.html',
    controller: ['uiGmapGoogleMapApi', function contactsController(uiGmapGoogleMapApi) {
        var self = this;
        uiGmapGoogleMapApi.then(function (maps) {
            self.map = {
                center: {
                    latitude: 50.490812,
                    longitude: 30.412617
                },
                zoom: 13
            };
        });
    }
    ]
});
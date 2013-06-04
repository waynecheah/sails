require.config({
    paths: {
        jQuery: 'libs/jquery',
        LoDash: 'libs/lodash',
        Backbone: 'libs/backbone',
        //Sockets: 'mixins/sails.io',
        //bootstrap: 'libs/bootstrap',
        //maxmertkit: 'libs/maxmertkit',
        models: 'models',
        views: 'views',
        text: 'libs/text',
        //templates: 'templates',

        backboneView: 'backboneView',
        Application: 'app'
    },

    shim: {
        'Backbone': ['LoDash', 'jQuery'],
        'Application': ['Backbone']
    }
});

require(['Application'], function(Application) {
    Application.initialize();
});

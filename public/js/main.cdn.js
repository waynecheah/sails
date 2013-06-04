require.config({
    enforceDefine: true,
    paths: {
        jQuery: ['//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js', 'js/libs/jquery.min'],
        LoDash: ['//cdnjs.cloudflare.com/ajax/libs/lodash.js/1.2.1/lodash.min.js', 'js/libs/lodash.min'],
        Backbone: ['//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone-min.js', 'js/libs/backbone-min'],
        //Sockets: 'mixins/sails.io',
        models: 'js/models',
        views: 'js/views',
        text: ['//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.5/text.js', 'js/libs/text.min'],
        templates: 'templates',

        backboneView: 'js/backboneView',
        Application: 'js/app'
    },

    shim: {
        'Backbone': ['LoDash', 'jQuery'],
        'Application': ['Backbone']
    }
});

require(['Application'], function(Application) {
    Application.initialize();
});

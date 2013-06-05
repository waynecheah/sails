require.config({
    enforceDefine: true,
    baseUrl: '/js',
    map: {
        '*': {
            'css': 'libs/css'
        }
    },
    paths: {
        cssPath: '/css',
        jQuery: ['//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js', 'js/libs/jquery.min'],
        LoDash: ['//cdnjs.cloudflare.com/ajax/libs/lodash.js/1.2.1/lodash.min.js', 'js/libs/lodash.min'],
        Backbone: ['//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone-min.js', 'js/libs/backbone-min'],
        //Sockets: 'mixins/sails.io',
        BootstrapJs: ['//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/js/bootstrap.min.js', 'libs/bootstrap.min'],
        Maxmert: 'libs/maxmertkit',
        MaxmertNotify: 'libs/maxmertkit.notify',
        jQueryUI: ['//code.jquery.com/ui/1.10.3/jquery-ui.min.js', 'js/libs/jquery-ui.min'],
        models: 'models',
        views: 'views',
        text: ['//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.5/text.js', 'js/libs/text.min'],
        //templates: 'templates',

        backboneView: 'backboneView',
        Application: 'app'
    },
    shim: {
        'Maxmertkit': ['css!cssPath/maxmertkit', 'css!cssPath/maxmertkit-components', 'css!cssPath/maxmertkit-animation', 'Maxmert', 'MaxmertNotify'],
        'BootstrapCss': ['css!cssPath/bootstrap.min'],
        'Bootstrap': ['css!//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap.min.css', 'BootstrapJs'],
        'Backbone': ['LoDash', 'jQuery'],
        'Application': ['Backbone']
    }
});

require(['Application'], function(Application) {
    Application.initialize();
});

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
        jQuery: 'libs/jquery',
        LoDash: 'libs/lodash',
        Backbone: 'libs/backbone',
        //Sockets: 'mixins/sails.io',
        BootstrapJs: 'libs/bootstrap',
        Maxmert: 'libs/maxmertkit',
        MaxmertNotify: 'libs/maxmertkit.notify',
        jQueryUI: 'libs/jquery-ui',
        models: 'models',
        views: 'views',
        text: 'libs/text',
        //templates: 'templates',

        backboneView: 'backboneView',
        Application: 'app'
    },
    shim: {
        'MaxmertkitCss': ['css!cssPath/maxmertkit', 'css!cssPath/maxmertkit-components', 'css!cssPath/maxmertkit-animation'],
        'Maxmertkit': ['MaxmertkitCss', 'Maxmert', 'MaxmertNotify'],
        'BootstrapCss': ['css!cssPath/bootstrap'],
        'Bootstrap': ['BootstrapCss', 'BootstrapJs'],
        'Backbone': ['LoDash', 'jQuery'],
        'Application': ['Backbone', 'Maxmertkit']
    }
});

require(['Application'], function(Application) {
    Application.initialize();
});

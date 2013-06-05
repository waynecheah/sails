var cfg = {
    baseUrl: '/js_src',
    paths: {
        cssPath: '/css',
        LoDash: 'libs/lodash',
        jQuery: 'libs/jquery',
        Backbone: 'libs/backbone',
        //Sockets: 'mixins/sails.io',
        BootstrapJs: 'libs/bootstrap',
        Maxmert: 'libs/maxmertkit',
        MaxmertNotify: 'libs/maxmertkit.notify.js',
        jQueryUI: 'libs/jquery-ui',
        Handlebars: 'libs/handlebars',
        Mousetrap: 'libs/mousetrap',
        models: 'models',
        views: 'views',
        text: 'libs/text',
        //templates: 'templates',

        backboneView: 'backboneView',
        Application: 'app'
    }
};

function log (msg) {
    console.log(msg);
} // log

curl(cfg, ['js!jQuery'], function(){
    log('jQuery loaded!');
    if (typeof jqReady == 'function') {
        jqReady(); // start execute jQuery dependencies function
    }

    // TODO(test): to be removed..
    $('body').prepend('<div class="welcome white gloBind" style="margin:38px 0 0 18px;">Hello World! {{name}}</div>');
    log('jQuery injects words to DOM');
}).next(['LoDash', 'js!Backbone!order', 'link!cssPath/bootstrap', 'js!BootstrapJs'], function(_){
    log('LoDash, Backbone & bootstrap loaded!');
}).next(['link!cssPath/maxmertkit', 'link!cssPath/maxmertkit-components', 'link!cssPath/maxmertkit-animation', 'js!Maxmert', 'js!MaxmertNotify'], function(){
    log('maxmertkit loaded!');
}).next(['js!jQueryUI', 'js!Handlebars', 'js!Mousetrap'], function(){
    log('jQueryUI, Handlebars, Mousetrap & Application loaded!');
}).then(function(){
    log('All required files loaded!');
    curl(['Application'], function(app){
        app.initialize();
    });
}, function(ex){
    console.error(ex);
});

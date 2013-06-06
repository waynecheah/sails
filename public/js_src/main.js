var app = {
    config: {
        env: 'development',
        lesscss: '.less'
    },
    amdCfg: {
        baseUrl: '/js_src',
        paths: {
            cssPath: '/css',
            stylePath: '/css_src',
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
    }
};


function log (msg) {
    console.log(msg);
} // log

function compile_less () {
    if (app.config.env == 'production') {
        return;
    }

    less.sheets = [];
    $.each($('link[rel=stylesheet]'), function(){
        if ($(this).attr('href').substr(-5) == '.less') {
            $(this).attr('rel', 'stylesheet/less');
            less.sheets.push($(this)[0]);
        }
    });
    //less.refresh();
    log('LESS has just compiled '+less.sheets.length+' file(s) into css');
} // compile_less

function _css (filename, less) {
    var ext = typeof less == 'undefined' ? '' : app.config.lesscss;
    return (app.config.env == 'development') ? 'link!stylePath/'+filename+ext : 'link!cssPath/'+filename;
} // _css

function lcss (filename) {
    return _css(filename, true);
} // lcss


    curl(app.amdCfg, ['js!jQuery', 'LoDash'], function(){
        log('jQuery & LoDash loaded!');
        if (typeof jqReady == 'function') {
            jqReady(); // start execute jQuery dependencies function
        }

        $.getJSON('/test/info', function(data) {
            app.config.env = data.env;

            if (data.env == 'development') {
                less.watch();
            }
        });

        // TODO(test): to be removed..
        $('body').prepend('<div class="welcome white gloBind" style="margin:38px 0 0 18px;">Hello World! {{name}}</div>');
        log('jQuery injects words to DOM');
    }).next(['js!Backbone', 'link!cssPath/bootstrap', 'js!BootstrapJs'], function(_){
        log('Backbone & bootstrap loaded!');
    }).next(['link!cssPath/maxmertkit', 'link!cssPath/maxmertkit-components', 'link!cssPath/maxmertkit-animation', 'js!Maxmert', 'js!MaxmertNotify!order'], function(){
        log('maxmertkit loaded!');
    }).next([lcss('common'), 'js!jQueryUI', 'js!Handlebars', 'js!Mousetrap'], function(){
        compile_less();
        log('jQueryUI, Handlebars, Mousetrap & Application loaded!');
    }).then(function(){
        log('All required files loaded!');
        curl(['Application'], function(app){
            app.initialize();
        });
    }, function(ex){
        console.error(ex);
    });

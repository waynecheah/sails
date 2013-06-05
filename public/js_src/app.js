(['router'], function(router) {
    var initialize = function() {
        log('check login');
        //checkLogin(runApp);
    };

    var checkLogin = function(callback) {
        $.ajax('/account/authenticated', {
            method: 'GET',
            success: function(data) {
                //router.socketEvents.trigger('app:loggedin', data);
                return callback(true);
            },
            error: function(data) {
                return callback(false);
            }
        });
    };

    var runApp = function(authenticated) {
        if (authenticated) {
            window.location.hash = 'index';
        } else {
            window.location.hash = 'login';
        }
        Backbone.history.start();
    };

    return {
        initialize: initialize
    };
});
